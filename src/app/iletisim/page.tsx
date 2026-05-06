import type { Metadata } from 'next';
import { getSiteSettings } from '@/services/settings.service';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Acil Emlak ile iletişime geçin. Gayrimenkul alım, satım ve kiralama işlemleriniz için uzman kadromuz hizmetinizde.',
};

export default async function IletisimPage() {
  const settings = await getSiteSettings();

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '5rem', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1rem' }}>
            İletişime Geçin
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#868e96', lineHeight: 1.7 }}>
            Sorularınız, önerileriniz veya talepleriniz için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '2rem' }}>
                İletişim Bilgilerimiz
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} color="#c9a84c" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#868e96', marginBottom: '0.25rem' }}>Adres</h3>
                    <p style={{ fontSize: '1rem', color: '#1a1f2e', lineHeight: 1.5 }}>{settings.contactAddress}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="#c9a84c" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#868e96', marginBottom: '0.25rem' }}>Telefon</h3>
                    <a href={`tel:${settings.contactPhone?.replace(/\s/g, '')}`} style={{ fontSize: '1rem', color: '#1a1f2e', textDecoration: 'none', fontWeight: 500 }}>
                      {settings.contactPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="#c9a84c" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#868e96', marginBottom: '0.25rem' }}>E-posta</h3>
                    <a href={`mailto:${settings.contactEmail}`} style={{ fontSize: '1rem', color: '#1a1f2e', textDecoration: 'none', fontWeight: 500 }}>
                      {settings.contactEmail}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} color="#c9a84c" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#868e96', marginBottom: '0.25rem' }}>Çalışma Saatleri</h3>
                    <p style={{ fontSize: '1rem', color: '#1a1f2e' }}>Pzt - Cmt: 09:00 - 18:30</p>
                    <p style={{ fontSize: '0.9rem', color: '#868e96' }}>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{ height: '300px', background: '#e9ecef', borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative' }}>
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#adb5bd' }}>
                 <MapPin size={48} style={{ marginBottom: '1rem' }} />
                 <span>Harita Görünümü</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
