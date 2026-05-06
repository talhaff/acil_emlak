'use client';

/**
 * @file Property Detail Client Component
 * @description Interactive property detail view with gallery, features, and WhatsApp conversion
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, MapPin, BedDouble, Maximize, Thermometer, Building,
  Bath, Fence, Car, ArrowUpDown, MessageCircle, Share2, Heart, ChevronLeft, ChevronRight
} from 'lucide-react';
import { formatPrice, formatArea, getPropertyTypeLabel, getStatusLabel } from '@/lib/formatters';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import type { IProperty } from '@/types';

interface PropertyDetailClientProps {
  property: IProperty;
}

export default function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const whatsappUrl = generateWhatsAppUrl(
    '905551234567',
    property.title,
    typeof window !== 'undefined' ? window.location.href : ''
  );

  const featureItems = [
    { icon: BedDouble, label: 'Oda Sayısı', value: property.features.odaSayisi },
    { icon: Maximize, label: 'Metrekare', value: formatArea(property.features.metrekare) },
    { icon: Thermometer, label: 'Isıtma', value: property.features.isitma },
    { icon: Building, label: 'Kat', value: property.features.kat },
    { icon: Bath, label: 'Banyo', value: `${property.features.banyo} Banyo` },
    { icon: Fence, label: 'Balkon', value: property.features.balkon ? 'Var' : 'Yok' },
    { icon: Car, label: 'Otopark', value: property.features.otopark ? 'Var' : 'Yok' },
    { icon: ArrowUpDown, label: 'Asansör', value: property.features.asansor ? 'Var' : 'Yok' },
  ];

  // Generate placeholder gallery colors
  const galleryColors = Array.from({ length: 4 }, (_, i) => `hsl(${(i * 50 + 210) % 360}, 25%, ${22 + i * 3}%)`);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          style={{ marginBottom: '1.5rem' }}>
          <Link href="/ilanlar" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#868e96', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#868e96'}>
            <ArrowLeft size={16} />
            Tüm İlanlara Dön
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Gallery Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '450px', background: galleryColors[activeImageIndex % galleryColors.length] }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BedDouble size={80} color="rgba(255,255,255,0.1)" />
              </div>
              {/* Status Badge */}
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 2, display: 'flex', gap: '0.5rem' }}>
                <span className={`badge badge-${property.propertyType}`} style={{ fontSize: '0.85rem', padding: '0.35rem 1rem' }}>
                  {getPropertyTypeLabel(property.propertyType)}
                </span>
                <span className={`badge badge-${property.status}`} style={{ fontSize: '0.85rem', padding: '0.35rem 1rem' }}>
                  {getStatusLabel(property.status)}
                </span>
              </div>
              {/* Navigation arrows */}
              <button onClick={() => setActiveImageIndex((p) => (p - 1 + galleryColors.length) % galleryColors.length)}
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <ChevronLeft size={22} color="white" />
              </button>
              <button onClick={() => setActiveImageIndex((p) => (p + 1) % galleryColors.length)}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <ChevronRight size={22} color="white" />
              </button>
              {/* Image dots */}
              <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
                {galleryColors.map((_, i) => (
                  <button key={i} onClick={() => setActiveImageIndex(i)}
                    style={{ width: i === activeImageIndex ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === activeImageIndex ? '#c9a84c' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }} />
                ))}
              </div>
            </div>
            {/* Thumbnail strip */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {galleryColors.map((color, i) => (
                <button key={i} onClick={() => setActiveImageIndex(i)}
                  style={{ flex: 1, height: '80px', borderRadius: 'var(--radius-md)', background: color, border: i === activeImageIndex ? '3px solid #c9a84c' : '3px solid transparent', cursor: 'pointer', transition: 'border-color 0.3s ease', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BedDouble size={20} color="rgba(255,255,255,0.15)" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem' }}>
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              {/* Title + Location */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5', marginBottom: '1.5rem' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {property.title}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#868e96', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  <MapPin size={18} color="#c9a84c" />
                  {property.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#c9a84c' }}>
                    {formatPrice(property.price)}
                    {property.propertyType === 'kiralik' && <span style={{ fontSize: '1rem', fontWeight: 400, color: '#868e96' }}> /ay</span>}
                  </div>
                  <button style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', background: 'none', border: '1px solid #e9ecef', borderRadius: '0.75rem', cursor: 'pointer', color: '#495057', fontSize: '0.85rem' }}>
                    <Heart size={16} /> Kaydet
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', background: 'none', border: '1px solid #e9ecef', borderRadius: '0.75rem', cursor: 'pointer', color: '#495057', fontSize: '0.85rem' }}>
                    <Share2 size={16} /> Paylaş
                  </button>
                </div>
              </div>

              {/* Features Grid */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1.5rem' }}>
                  Özellikler
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
                  {featureItems.map((f) => (
                    <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem', borderRadius: 'var(--radius-md)', background: '#f8f9fa', border: '1px solid #f1f3f5' }}>
                      <f.icon size={20} color="#c9a84c" />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#868e96', marginBottom: '0.15rem' }}>{f.label}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a1f2e' }}>{f.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1.25rem' }}>
                  İlan Açıklaması
                </h2>
                <div style={{ fontSize: '0.95rem', color: '#495057', lineHeight: 1.8 }}>
                  {property.description?.map((block: any, i: number) => {
                    const children = block.children as Array<{ text: string }> | undefined;
                    if (children) {
                      return <p key={i} style={{ marginBottom: '1rem' }}>{children.map(c => c.text).join('')}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                {/* WhatsApp CTA Card */}
                <div style={{ background: 'linear-gradient(160deg, #0f1929 0%, #1a1f2e 100%)', borderRadius: 'var(--radius-xl)', padding: '2rem', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
                    Bu İlanla İlgileniyor musunuz?
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Hemen WhatsApp üzerinden iletişime geçin, detaylı bilgi alalım.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"
                    style={{ textDecoration: 'none', width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                    <MessageCircle size={20} />
                    WhatsApp ile Bilgi Al
                  </a>
                </div>

                {/* Quick Info Card */}
                <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '1.5rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1rem' }}>Hızlı Bilgi</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { label: 'İlan No', value: property._id.slice(0, 8).toUpperCase() },
                      { label: 'Tür', value: getPropertyTypeLabel(property.propertyType) },
                      { label: 'Durum', value: getStatusLabel(property.status) },
                      { label: 'Konum', value: property.location },
                    ].map((item) => (
                      <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f3f5' }}>
                        <span style={{ fontSize: '0.85rem', color: '#868e96' }}>{item.label}</span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a1f2e' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive style override */}
      <style jsx global>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="height: 450px"] {
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
