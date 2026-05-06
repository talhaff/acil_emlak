'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Ad Soyad en az 2 karakter olmalıdır.'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz.'),
  message: z.string().min(10, 'Mesajınız en az 10 karakter olmalıdır.'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #dee2e6',
    background: '#f8f9fa',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#495057',
  };

  const errorStyle = {
    color: '#fa5252',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
    display: 'block',
  };

  return (
    <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f3f5' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#1a1f2e', marginBottom: '1.5rem' }}>
        Bize Mesaj Gönderin
      </h2>

      {isSuccess && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: 'rgba(64,192,87,0.1)', border: '1px solid #40c057', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#2b8a3e' }}>
          <CheckCircle2 size={20} />
          <span style={{ fontWeight: 500 }}>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={labelStyle} htmlFor="name">Adınız Soyadınız</label>
          <input
            id="name"
            type="text"
            placeholder="Örn: Ahmet Yılmaz"
            {...register('name')}
            style={{ ...inputStyle, borderColor: errors.name ? '#fa5252' : '#dee2e6' }}
          />
          {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div>
            <label style={labelStyle} htmlFor="email">E-posta Adresiniz</label>
            <input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              {...register('email')}
              style={{ ...inputStyle, borderColor: errors.email ? '#fa5252' : '#dee2e6' }}
            />
            {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">Telefon Numaranız</label>
            <input
              id="phone"
              type="tel"
              placeholder="05XX XXX XX XX"
              {...register('phone')}
              style={{ ...inputStyle, borderColor: errors.phone ? '#fa5252' : '#dee2e6' }}
            />
            {errors.phone && <span style={errorStyle}>{errors.phone.message}</span>}
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor="message">Mesajınız</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Size nasıl yardımcı olabiliriz?"
            {...register('message')}
            style={{ ...inputStyle, borderColor: errors.message ? '#fa5252' : '#dee2e6', resize: 'vertical' }}
          />
          {errors.message && <span style={errorStyle}>{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Gönderiliyor...' : (
            <>
              Mesajı Gönder <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
