'use client';

/**
 * @file WhatsApp FAB Component
 * @description Floating Action Button for WhatsApp support - always visible
 */

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { generateSupportWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppFABProps {
  whatsappNumber: string;
}

export default function WhatsAppFAB({ whatsappNumber }: WhatsAppFABProps) {
  const url = generateSupportWhatsAppUrl(whatsappNumber);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 30px -5px rgba(37, 211, 102, 0.5)',
        zIndex: 40,
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      className="animate-pulse-gold"
    >
      <MessageCircle size={28} color="white" fill="white" />

      {/* Ripple Ring */}
      <span
        style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: '50%',
          border: '2px solid rgba(37, 211, 102, 0.3)',
          animation: 'pulse-gold 2s ease-in-out infinite',
        }}
      />
    </motion.a>
  );
}
