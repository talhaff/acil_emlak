import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio | Acil Emlak',
  description: 'Acil Emlak İçerik Yönetim Paneli',
  robots: 'noindex, nofollow',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head />
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
