/**
 * @file Property Schema for Sanity CMS
 * @description Defines the 'property' document type for real estate listings
 */

const propertySchema = {
  name: 'property',
  title: 'İlan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'İlan Başlığı',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Durum',
      type: 'string',
      options: {
        list: [
          { title: 'Aktif', value: 'aktif' },
          { title: 'Satıldı', value: 'satildi' },
          { title: 'Kiralandı', value: 'kiralandi' },
        ],
        layout: 'radio',
      },
      initialValue: 'aktif',
    },
    {
      name: 'propertyType',
      title: 'İlan Türü',
      type: 'string',
      options: {
        list: [
          { title: 'Satılık', value: 'satilik' },
          { title: 'Kiralık', value: 'kiralik' },
        ],
        layout: 'radio',
      },
      initialValue: 'satilik',
    },
    {
      name: 'price',
      title: 'Fiyat (₺)',
      type: 'number',
      validation: (Rule: { required: () => { (): unknown; min: (n: number) => unknown } }) =>
        Rule.required(),
    },
    {
      name: 'location',
      title: 'Konum',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Özellikler',
      type: 'object',
      fields: [
        { name: 'odaSayisi', title: 'Oda Sayısı', type: 'string' },
        { name: 'metrekare', title: 'Metrekare (m²)', type: 'number' },
        { name: 'isitma', title: 'Isıtma', type: 'string' },
        { name: 'kat', title: 'Kat', type: 'string' },
        { name: 'banyo', title: 'Banyo Sayısı', type: 'number' },
        { name: 'balkon', title: 'Balkon', type: 'boolean', initialValue: false },
        { name: 'otopark', title: 'Otopark', type: 'boolean', initialValue: false },
        { name: 'asansor', title: 'Asansör', type: 'boolean', initialValue: false },
      ],
    },
    {
      name: 'gallery',
      title: 'Fotoğraf Galerisi',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Metin',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'gallery.0',
      status: 'status',
      price: 'price',
    },
    prepare(selection: { title: string; media: unknown; status: string; price: number }) {
      const { title, media, status, price } = selection;
      return {
        title,
        subtitle: `${status?.toUpperCase()} — ${price?.toLocaleString('tr-TR')} ₺`,
        media,
      };
    },
  },
};

export default propertySchema;
