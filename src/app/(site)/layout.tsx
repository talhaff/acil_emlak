import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
  title: {
    default: 'Acil Emlak — Güvenilir Emlak Danışmanlığı',
    template: '%s | Acil Emlak',
  },
  description: 'İstanbul\'un en prestijli lokasyonlarında satılık ve kiralık emlak ilanları. Profesyonel emlak danışmanlığı ile hayalinizdeki eve ulaşın.',
  keywords: ['emlak', 'gayrimenkul', 'satılık daire', 'kiralık daire', 'İstanbul emlak', 'acil emlak'],
  openGraph: {
    title: 'Acil Emlak — Güvenilir Emlak Danışmanlığı',
    description: 'İstanbul\'un en prestijli lokasyonlarında satılık ve kiralık emlak ilanları.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Acil Emlak',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB whatsappNumber="905551234567" />
      </body>
    </html>
  );
}
