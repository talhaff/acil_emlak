'use client';

/**
 * @file Footer Component
 * @description Premium footer with company info, quick links, and social proof
 */

import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/ilanlar', label: 'Tüm İlanlar' },
  { href: '/ilanlar?type=satilik', label: 'Satılık İlanlar' },
  { href: '/ilanlar?type=kiralik', label: 'Kiralık İlanlar' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(160deg, #0f1929 0%, #1a1f2e 40%, #2d3548 100%)',
        color: 'rgba(255,255,255,0.7)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            paddingTop: '4rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #c9a84c, #e2c97e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={22} color="white" />
              </div>
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>Acil</span>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #c9a84c, #e2c97e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginLeft: '4px',
                  }}
                >
                  Emlak
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '320px' }}>
              Güvenilir emlak danışmanlığı ile hayalinizdeki mülke ulaşmanızı sağlıyoruz. Profesyonel ekibimizle sizin için en doğru yatırımı buluyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
              Hızlı Linkler
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c9a84c';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                      e.currentTarget.style.paddingLeft = '0px';
                    }}
                  >
                    <ArrowUpRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
              İletişim
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#c9a84c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem' }}>Atatürk Mah. Cumhuriyet Cad. No:42, İstanbul</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} color="#c9a84c" style={{ flexShrink: 0 }} />
                <a href="tel:+905551234567" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  +90 555 123 45 67
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="#c9a84c" style={{ flexShrink: 0 }} />
                <a href="mailto:info@acilemlaak.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  info@acilemlaak.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Acil Emlak. Tüm hakları saklıdır.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Güven · Kalite · Profesyonellik
          </p>
        </div>
      </div>
    </footer>
  );
}
