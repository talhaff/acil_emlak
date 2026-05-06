/**
 * @file Mock Data
 * @description Realistic mock data for development without Sanity connection
 */

import type { IPropertyCard, IProperty } from '@/types';

export const mockProperties: IPropertyCard[] = [
  {
    _id: '1',
    title: 'Deniz Manzaralı Lüks Daire — Kadıköy',
    slug: { current: 'deniz-manzarali-luks-daire-kadikoy' },
    status: 'aktif',
    propertyType: 'satilik',
    price: 8500000,
    location: 'Kadıköy, İstanbul',
    features: { odaSayisi: '3+1', metrekare: 165 },
    gallery: [],
  },
  {
    _id: '2',
    title: 'Modern Villa — Beykoz Orman Kenarı',
    slug: { current: 'modern-villa-beykoz' },
    status: 'aktif',
    propertyType: 'satilik',
    price: 22000000,
    location: 'Beykoz, İstanbul',
    features: { odaSayisi: '5+2', metrekare: 380 },
    gallery: [],
  },
  {
    _id: '3',
    title: 'Merkezi Konumda Satılık Ofis — Levent',
    slug: { current: 'merkezi-konumda-satilik-ofis-levent' },
    status: 'aktif',
    propertyType: 'satilik',
    price: 12500000,
    location: 'Levent, İstanbul',
    features: { odaSayisi: 'Açık Plan', metrekare: 240 },
    gallery: [],
  },
  {
    _id: '4',
    title: 'Boğaz Manzaralı Penthouse — Beşiktaş',
    slug: { current: 'bogaz-manzarali-penthouse-besiktas' },
    status: 'aktif',
    propertyType: 'satilik',
    price: 45000000,
    location: 'Beşiktaş, İstanbul',
    features: { odaSayisi: '4+1', metrekare: 290 },
    gallery: [],
  },
  {
    _id: '5',
    title: 'Rezidans Daire — Ataşehir',
    slug: { current: 'rezidans-daire-atasehir' },
    status: 'aktif',
    propertyType: 'kiralik',
    price: 35000,
    location: 'Ataşehir, İstanbul',
    features: { odaSayisi: '2+1', metrekare: 110 },
    gallery: [],
  },
  {
    _id: '6',
    title: 'Tarihi Yarımada\'da Butik Ev — Fatih',
    slug: { current: 'tarihi-yarimada-butik-ev-fatih' },
    status: 'satildi',
    propertyType: 'satilik',
    price: 6800000,
    location: 'Fatih, İstanbul',
    features: { odaSayisi: '3+1', metrekare: 145 },
    gallery: [],
  },
];

export const mockPropertyDetail: IProperty[] = mockProperties.map((p) => ({
  ...p,
  _createdAt: '2024-01-15T10:00:00Z',
  _updatedAt: '2024-01-20T10:00:00Z',
  features: {
    odaSayisi: p.features.odaSayisi,
    metrekare: p.features.metrekare,
    isitma: 'Doğalgaz Kombi',
    kat: '5/12',
    banyo: 2,
    balkon: true,
    otopark: true,
    asansor: true,
  },
  description: [
    {
      _type: 'block',
      _key: 'desc1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span1',
          text: `${p.title} - Bu eşsiz gayrimenkul, şehrin en prestijli bölgelerinden birinde yer almaktadır. Geniş yaşam alanları, modern mimarisi ve üstün kalite malzemeleriyle dikkat çeken bu mülk, konforlu bir yaşam için tüm ihtiyaçlarınızı karşılamaktadır.`,
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
}));
