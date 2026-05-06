'use client';

/**
 * @file Hero Section Component
 * @description Premium hero section with gradient background and animated elements
 */

import { motion } from 'framer-motion';
import { Search, ArrowRight, Shield, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="gradient-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Decorative elements */}
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '2px', height: '60px', background: 'linear-gradient(transparent, rgba(201,168,76,0.3), transparent)', pointerEvents: 'none' }} className="animate-float" />
      <div style={{ position: 'absolute', bottom: '30%', right: '15%', width: '2px', height: '40px', background: 'linear-gradient(transparent, rgba(201,168,76,0.2), transparent)', pointerEvents: 'none' }} className="animate-float" />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '720px' }}>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(201,168,76,0.15)', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#e2c97e', marginBottom: '1.5rem', border: '1px solid rgba(201,168,76,0.2)' }}>
              <Star size={14} fill="#e2c97e" />
              Güvenilir Emlak Danışmanlığı
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Hayalinizdeki Eve{' '}
            <span style={{ background: 'linear-gradient(135deg, #c9a84c, #e2c97e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Bir Adım Uzaktasınız
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '560px' }}>
            Profesyonel emlak danışmanlığı ile doğru yatırımı yapın. Binlerce memnun müşterimizle gurur duyuyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <Link href="/ilanlar" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1rem', padding: '1rem 2rem' }}>
              <Search size={18} />
              İlanları Keşfet
            </Link>
            <Link href="/iletisim" className="btn-secondary" style={{ textDecoration: 'none', borderColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1rem', padding: '1rem 2rem' }}>
              Bize Ulaşın
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { icon: TrendingUp, value: '500+', label: 'Satılan Mülk' },
              { icon: Star, value: '4.9/5', label: 'Müşteri Puanı' },
              { icon: Shield, value: '15 Yıl', label: 'Deneyim' },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <stat.icon size={20} color="#c9a84c" />
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(transparent, white)', pointerEvents: 'none' }} />
    </section>
  );
}
