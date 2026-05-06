'use client';

/**
 * @file Why Choose Us Section
 * @description Social proof section with key benefits and animated counters
 */

import { motion } from 'framer-motion';
import { Shield, Users, Handshake, Award, Clock, HeartHandshake } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Güvenilir Hizmet', description: '15 yıllık sektör deneyimimiz ile mülkünüzü güvenle alıp satabilirsiniz.' },
  { icon: Users, title: 'Uzman Kadro', description: 'Alanında uzman danışman ekibimiz, sizin için en iyi seçenekleri sunar.' },
  { icon: Handshake, title: 'Şeffaf Süreç', description: 'Alım-satım sürecinin her aşamasında sizi bilgilendirir, şeffaf oluruz.' },
  { icon: Award, title: 'Premium Portföy', description: 'İstanbul\'un en prestijli lokasyonlarında seçkin gayrimenkul portföyümüz.' },
  { icon: Clock, title: 'Hızlı İşlem', description: 'Bürokratik işlemleri hızlı ve sorunsuz bir şekilde tamamlarız.' },
  { icon: HeartHandshake, title: 'Müşteri Memnuniyeti', description: '500+ memnun müşteri ile kanıtlanmış kaliteli hizmet anlayışımız.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 600, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
            Neden Biz?
          </span>
          <h2 className="section-title">Güvenin Adresi</h2>
          <p className="section-subtitle">
            Müşterilerimizin bize güvenmesinin nedenlerini keşfedin.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((feature, i) => (
            <motion.div key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                background: 'white',
                border: '1px solid #f1f3f5',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#f1f3f5';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <feature.icon size={24} color="#c9a84c" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#868e96', lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
