'use client';

/**
 * @file Featured Properties Section
 * @description Displays latest active property listings on homepage
 */

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import type { IPropertyCard } from '@/types';

interface FeaturedPropertiesProps {
  properties: IPropertyCard[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="section" style={{ background: '#f8f9fa' }}>
      <div className="container-custom">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 600, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
            Seçkin Portföy
          </span>
          <h2 className="section-title">Öne Çıkan İlanlar</h2>
          <p className="section-subtitle">
            En yeni ve en çok ilgi çeken gayrimenkul ilanlarımızı keşfedin.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.75rem',
        }}>
          {properties.map((property, i) => (
            <PropertyCard key={property._id} property={property} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
          <Link href="/ilanlar" className="btn-secondary" style={{ textDecoration: 'none' }}>
            Tüm İlanları Gör
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
