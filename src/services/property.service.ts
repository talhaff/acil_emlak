/**
 * @file Property Service
 * @description Data fetching service for property listings - separated from UI per SOLID
 */

import { sanityClient } from '@/lib/sanity.client';
import {
  allPropertiesQuery,
  featuredPropertiesQuery,
  propertyBySlugQuery,
  allPropertySlugsQuery,
} from './queries';
import type { IProperty, IPropertyCard } from '@/types';
import { mockProperties, mockPropertyDetail } from '@/services/mock-data';

const USE_MOCK = !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-project-id';

/**
 * Fetches all properties for listing page
 * @returns Array of property cards
 */
export async function getAllProperties(): Promise<IPropertyCard[]> {
  if (USE_MOCK) return mockProperties;
  return sanityClient.fetch<IPropertyCard[]>(allPropertiesQuery);
}

/**
 * Fetches featured properties for homepage
 * @returns Array of featured property cards (max 6)
 */
export async function getFeaturedProperties(): Promise<IPropertyCard[]> {
  if (USE_MOCK) return mockProperties.filter(p => p.status === 'aktif').slice(0, 6);
  return sanityClient.fetch<IPropertyCard[]>(featuredPropertiesQuery);
}

/**
 * Fetches a single property by its slug
 * @param slug - URL-friendly property identifier
 * @returns Full property data or null
 */
export async function getPropertyBySlug(slug: string): Promise<IProperty | null> {
  if (USE_MOCK) {
    const found = mockPropertyDetail.find(p => p.slug.current === slug);
    return found || null;
  }
  return sanityClient.fetch<IProperty | null>(propertyBySlugQuery, { slug });
}

/**
 * Fetches all property slugs for static generation
 * @returns Array of slug strings
 */
export async function getAllPropertySlugs(): Promise<string[]> {
  if (USE_MOCK) return mockProperties.map(p => p.slug.current);
  return sanityClient.fetch<string[]>(allPropertySlugsQuery);
}
