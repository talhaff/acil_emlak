'use client';

/**
 * @file Header Component
 * @description Premium navigation bar with glassmorphism effect and mobile menu
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Building2, Phone, Info } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Ana Sayfa', icon: Home },
  { href: '/ilanlar', label: 'İlanlar', icon: Building2 },
  { href: '/hakkimizda', label: 'Hakkımızda', icon: Info },
  { href: '/iletisim', label: 'İletişim', icon: Phone },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="container-custom">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: isScrolled ? '70px' : '85px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #c9a84c, #e2c97e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px -3px rgba(201,168,76,0.4)',
                }}
              >
                <Building2 size={22} color="white" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: isScrolled ? '#1a1f2e' : 'white',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Acil
                </span>
                <span
                  className="text-gradient-gold"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginLeft: '4px',
                  }}
                >
                  Emlak
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.1rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isScrolled ? '#495057' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  borderRadius: '0.75rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isScrolled
                    ? 'rgba(201,168,76,0.08)'
                    : 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = isScrolled ? '#c9a84c' : 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = isScrolled ? '#495057' : 'rgba(255,255,255,0.85)';
                }}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}
            <Link href="/ilanlar" className="btn-primary" style={{ marginLeft: '0.5rem', padding: '0.65rem 1.5rem', fontSize: '0.875rem', textDecoration: 'none' }}>
              İlan Ara
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? '#1a1f2e' : 'white',
              padding: '0.5rem',
            }}
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#343a40',
                      textDecoration: 'none',
                      borderRadius: '0.75rem',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <link.icon size={18} color="#c9a84c" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ marginTop: '0.75rem' }}>
                <Link
                  href="/ilanlar"
                  className="btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', width: '100%' }}
                >
                  İlan Ara
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
