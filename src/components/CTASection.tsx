'use client';

/**
 * @file CTA Section Component
 * @description Call-to-action section for WhatsApp conversion
 */

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { generateSupportWhatsAppUrl } from '@/lib/whatsapp';

export default function CTASection() {
  const whatsappUrl = generateSupportWhatsAppUrl('905551234567');

  return (
    <section style={{
      position: 'relative', padding: '5rem 0', overflow: 'hidden',
      background: 'linear-gradient(160deg, #0f1929 0%, #1a1f2e 40%, #2d3548 100%)',
    }}>
      <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}
        >
          <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 600, color: '#e2c97e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Hemen İletişime Geçin
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Hayalinizdeki Mülkü Birlikte Bulalım
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Uzman ekibimiz size en uygun gayrimenkul seçeneklerini sunmak için hazır. WhatsApp ile anında iletişime geçin.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ textDecoration: 'none', fontSize: '1rem', padding: '1rem 2rem' }}>
              <MessageCircle size={20} />
              WhatsApp İle Yazın
            </a>
            <Link href="/iletisim" className="btn-secondary" style={{ textDecoration: 'none', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
              <Phone size={18} />
              Bizi Arayın
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
