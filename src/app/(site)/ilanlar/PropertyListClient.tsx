'use client';

/**
 * @file Property List Client Component
 * @description Client-side filtering and display for property listings
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import type { IPropertyCard } from '@/types';

interface PropertyListClientProps {
  properties: IPropertyCard[];
}

type FilterType = 'all' | 'satilik' | 'kiralik';
type FilterStatus = 'all' | 'aktif' | 'satildi';

export default function PropertyListClient({ properties }: PropertyListClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch = searchTerm === '' || 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || p.propertyType === typeFilter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'aktif' ? p.status === 'aktif' : p.status !== 'aktif');
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [properties, searchTerm, typeFilter, statusFilter]);

  const filterBtnStyle = (active: boolean) => ({
    padding: '0.5rem 1.25rem',
    borderRadius: '9999px',
    border: active ? '2px solid #c9a84c' : '2px solid #e9ecef',
    background: active ? 'rgba(201,168,76,0.08)' : 'white',
    color: active ? '#c9a84c' : '#495057',
    fontWeight: active ? 700 : 500,
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  });

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container-custom">
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '0.5rem' }}>
            Tüm İlanlar
          </h1>
          <p style={{ fontSize: '1rem', color: '#868e96' }}>
            {filteredProperties.length} ilan bulundu
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.5rem',
            boxShadow: 'var(--shadow-soft)', marginBottom: '2.5rem', border: '1px solid #f1f3f5',
          }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={18} color="#adb5bd" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="İlan ara... (başlık veya konum)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem',
                borderRadius: 'var(--radius-lg)', border: '2px solid #e9ecef',
                fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s ease',
                background: '#f8f9fa',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#c9a84c'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e9ecef'}
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                <X size={16} color="#adb5bd" />
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
            <SlidersHorizontal size={16} color="#868e96" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#495057', marginRight: '0.25rem' }}>Tür:</span>
            {(['all', 'satilik', 'kiralik'] as FilterType[]).map((f) => (
              <button key={f} onClick={() => setTypeFilter(f)} style={filterBtnStyle(typeFilter === f)}>
                {f === 'all' ? 'Tümü' : f === 'satilik' ? 'Satılık' : 'Kiralık'}
              </button>
            ))}
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#495057', marginLeft: '1rem', marginRight: '0.25rem' }}>Durum:</span>
            {(['all', 'aktif', 'satildi'] as FilterStatus[]).map((f) => (
              <button key={f} onClick={() => setStatusFilter(f)} style={filterBtnStyle(statusFilter === f)}>
                {f === 'all' ? 'Tümü' : f === 'aktif' ? 'Aktif' : 'Satılmış'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {filteredProperties.map((property, i) => (
              <PropertyCard key={property._id} property={property} index={i} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)' }}>
            <Search size={48} color="#ced4da" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#343a40', marginBottom: '0.5rem' }}>İlan Bulunamadı</h3>
            <p style={{ color: '#868e96' }}>Arama kriterlerinize uygun ilan bulunamadı. Filtreleri değiştirmeyi deneyin.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
