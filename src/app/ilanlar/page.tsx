/**
 * @file İlanlar (Listings) Page
 * @description All property listings with filter support
 */

import type { Metadata } from 'next';
import { getAllProperties } from '@/services/property.service';
import PropertyListClient from './PropertyListClient';

export const metadata: Metadata = {
  title: 'Tüm İlanlar',
  description: 'İstanbul\'da satılık ve kiralık emlak ilanları. En güncel gayrimenkul fırsatlarını keşfedin.',
  openGraph: {
    title: 'Tüm İlanlar | Acil Emlak',
    description: 'İstanbul\'da satılık ve kiralık emlak ilanları.',
  },
};

export default async function IlanlarPage() {
  const properties = await getAllProperties();

  return <PropertyListClient properties={properties} />;
}
