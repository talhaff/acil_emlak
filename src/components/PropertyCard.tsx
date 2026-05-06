'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Maximize, BedDouble, ArrowUpRight } from 'lucide-react';
import { formatPrice, formatArea, getPropertyTypeLabel } from '@/lib/formatters';
import type { IPropertyCard } from '@/types';

interface PropertyCardProps {
  property: IPropertyCard;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const isSold = property.status === 'satildi' || property.status === 'kiralandi';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/ilanlar/${property.slug.current}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div className="card" style={{ position: 'relative', opacity: isSold ? 0.75 : 1 }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, hsl(${(index * 40 + 200) % 360}, 25%, 20%) 0%, hsl(${(index * 40 + 230) % 360}, 30%, 30%) 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BedDouble size={48} color="rgba(255,255,255,0.15)" />
            </div>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
              <span className={`badge badge-${property.propertyType}`}>
                {getPropertyTypeLabel(property.propertyType)}
              </span>
            </div>
            {isSold && (
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <span style={{ padding: '0.5rem 1.5rem', background: property.status === 'satildi' ? '#fa5252' : '#fab005', color: 'white', fontWeight: 700, fontSize: '1rem', borderRadius: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {property.status === 'satildi' ? 'Satıldı' : 'Kiralandı'}
                </span>
              </div>
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '2rem 1.25rem 1rem', zIndex: 2 }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>
                {formatPrice(property.price)}
                {property.propertyType === 'kiralik' && <span style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.8 }}> /ay</span>}
              </div>
            </div>
          </div>
          <div style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '0.5rem', lineHeight: 1.3, fontFamily: 'var(--font-sans)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {property.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#868e96', fontSize: '0.875rem', marginBottom: '1rem' }}>
              <MapPin size={14} />
              {property.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f3f5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#495057' }}>
                <BedDouble size={16} color="#c9a84c" />
                {property.features.odaSayisi}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#495057' }}>
                <Maximize size={16} color="#c9a84c" />
                {formatArea(property.features.metrekare)}
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} color="#c9a84c" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
