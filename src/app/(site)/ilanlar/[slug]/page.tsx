/**
 * @file Property Detail Page
 * @description Dynamic property detail page with gallery, features, and WhatsApp CTA
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyBySlug, getAllPropertySlugs } from '@/services/property.service';
import PropertyDetailClient from './PropertyDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return { title: 'İlan Bulunamadı' };
  }

  return {
    title: property.title,
    description: `${property.title} - ${property.location}. ${property.features.odaSayisi}, ${property.features.metrekare} m².`,
    openGraph: {
      title: `${property.title} | Acil Emlak`,
      description: `${property.location} bölgesinde ${property.features.odaSayisi} ${property.features.metrekare} m² gayrimenkul.`,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPropertySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}
