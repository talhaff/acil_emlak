import type { Metadata } from 'next';
import { getSiteSettings } from '@/services/settings.service';
import { Shield, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Acil Emlak olarak, 15 yıllık tecrübemizle İstanbul gayrimenkul pazarında güvenilir ve şeffaf hizmet sunuyoruz.',
};

export default async function HakkimizdaPage() {
  const settings = await getSiteSettings();

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '5rem', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1rem' }}>
            Biz Kimiz?
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#868e96', lineHeight: 1.7 }}>
            Acil Emlak, gayrimenkul sektöründe güven, şeffaflık ve müşteri memnuniyetini temel ilke edinmiş yenilikçi bir emlak danışmanlık firmasıdır.
          </p>
        </div>

        {/* Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1.5rem' }}>
              Hikayemiz
            </h2>
            <div style={{ fontSize: '1rem', color: '#495057', lineHeight: 1.8 }}>
              {settings.aboutText && settings.aboutText.length > 0 ? (
                // Render Sanity block content here if available
                settings.aboutText.map((block: any, i: number) => {
                  if (block.children) {
                    return <p key={i} style={{ marginBottom: '1rem' }}>{block.children.map((c: any) => c.text).join('')}</p>;
                  }
                  return null;
                })
              ) : (
                <>
                  <p style={{ marginBottom: '1rem' }}>
                    Yılların getirdiği tecrübe ile gayrimenkul sektöründe fark yaratmak amacıyla yola çıktık. Amacımız, müşterilerimize sadece bir ev veya ofis değil, aynı zamanda güvenilir bir yatırım ve mutlu bir gelecek sunmaktır.
                  </p>
                  <p>
                    Uzman kadromuzla, pazarın dinamiklerini yakından takip ediyor ve size en uygun seçenekleri, en şeffaf şekilde sunuyoruz.
                  </p>
                </>
              )}
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #1a1f2e, #2d3548)', padding: '2rem', borderRadius: 'var(--radius-xl)', color: 'white' }}>
              <Target size={32} color="#c9a84c" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Vizyonumuz</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>Sektörde yenilikçi yaklaşımlar geliştirerek, gayrimenkul danışmanlığında Türkiye'nin en güvenilir ve referans alınan markası olmak.</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #c9a84c, #a88a3a)', padding: '2rem', borderRadius: 'var(--radius-xl)', color: 'white' }}>
              <Shield size={32} color="white" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Misyonumuz</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Müşterilerimizin beklentilerini aşan, dürüst, profesyonel ve sonuç odaklı hizmet anlayışıyla gayrimenkul ihtiyaçlarına kalıcı çözümler üretmek.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#1a1f2e', textAlign: 'center', marginBottom: '3rem' }}>
            Değerlerimiz
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Shield, title: 'Güven', desc: 'Tüm ilişkilerimizin temelinde karşılıklı güven yatar.' },
              { icon: Users, title: 'Müşteri Odaklılık', desc: 'Müşterilerimizin ihtiyaçları her zaman önceliğimizdir.' },
              { icon: Award, title: 'Profesyonellik', desc: 'İşimizi en yüksek standartlarda ve etik kurallar çerçevesinde yaparız.' },
              { icon: Target, title: 'Sonuç Odaklılık', desc: 'Süreci değil, sonucu başarı olarak kabul ederiz.' },
            ].map((val) => (
              <div key={val.title} style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid #f1f3f5', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <val.icon size={28} color="#c9a84c" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '0.75rem' }}>{val.title}</h3>
                <p style={{ color: '#868e96', fontSize: '0.95rem', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
