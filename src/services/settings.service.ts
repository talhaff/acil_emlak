/**
 * @file Site Settings Service
 * @description Data fetching service for global site configuration
 */

import { sanityClient } from '@/lib/sanity.client';
import { siteSettingsQuery } from './queries';
import type { ISiteSettings } from '@/types';

const USE_MOCK = !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-project-id';

/** Default site settings for development */
const defaultSettings: ISiteSettings = {
  whatsappNumber: '905551234567',
  aboutText: [],
  contactEmail: 'info@acilemlaak.com',
  contactPhone: '+90 555 123 45 67',
  contactAddress: 'Atatürk Mah. Cumhuriyet Cad. No:42, İstanbul',
  heroTitle: 'Hayalinizdeki Evi Bulun',
  heroSubtitle: 'Güvenilir emlak danışmanlığı ile doğru yatırımı yapın.',
};

/**
 * Fetches site settings from Sanity or returns defaults
 * @returns Site settings object
 */
export async function getSiteSettings(): Promise<ISiteSettings> {
  if (USE_MOCK) return defaultSettings;

  const settings = await sanityClient.fetch<ISiteSettings | null>(siteSettingsQuery);
  return settings || defaultSettings;
}
