/**
 * @file TypeScript type definitions for Acil Emlak
 * @description All interfaces used across the application following SOLID - Interface Segregation
 */

/** Sanity image reference type */
export interface ISanityImage {
  _type: 'image';
  _key?: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
}

/** Property features */
export interface IPropertyFeatures {
  odaSayisi: string;
  metrekare: number;
  isitma: string;
  kat: string;
  banyo: number;
  balkon: boolean;
  otopark: boolean;
  asansor: boolean;
}

/** Property listing status */
export type PropertyStatus = 'aktif' | 'satildi' | 'kiralandi';

/** Property listing type */
export type PropertyType = 'satilik' | 'kiralik';

/** Full Property interface from Sanity */
export interface IProperty {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  status: PropertyStatus;
  propertyType: PropertyType;
  price: number;
  location: string;
  features: IPropertyFeatures;
  gallery: ISanityImage[];
  description: unknown[]; // Sanity Block Content
}

/** Property card - subset for listing views */
export interface IPropertyCard {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  status: PropertyStatus;
  propertyType: PropertyType;
  price: number;
  location: string;
  features: {
    odaSayisi: string;
    metrekare: number;
  };
  gallery: ISanityImage[];
}

/** Site Settings (Singleton) */
export interface ISiteSettings {
  whatsappNumber: string;
  aboutText: unknown[]; // Sanity Block Content
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  heroTitle: string;
  heroSubtitle: string;
  logoImage?: ISanityImage;
}

/** Contact form data */
export interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyTitle?: string;
}
