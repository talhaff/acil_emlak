/**
 * @file Site Settings Schema for Sanity CMS
 * @description Singleton document for global site configuration
 */

const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Başlığı',
      type: 'string',
      initialValue: 'Hayalinizdeki Evi Bulun',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Alt Başlığı',
      type: 'string',
      initialValue: 'Güvenilir emlak danışmanlığı ile doğru yatırımı yapın.',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Numarası (Ülke koduyla: 905xxxxxxxxx)',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'contactEmail',
      title: 'İletişim E-postası',
      type: 'string',
    },
    {
      name: 'contactPhone',
      title: 'İletişim Telefonu',
      type: 'string',
    },
    {
      name: 'contactAddress',
      title: 'Adres',
      type: 'text',
    },
    {
      name: 'aboutText',
      title: 'Hakkımızda Metni',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'logoImage',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Ayarları',
      };
    },
  },
};

export default siteSettingsSchema;
