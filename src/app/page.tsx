/**
 * @file Homepage
 * @description Main landing page with hero, featured listings, benefits, and CTA
 */

import HeroSection from '@/components/HeroSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { getFeaturedProperties } from '@/services/property.service';

export default async function HomePage() {
  const properties = await getFeaturedProperties();

  return (
    <>
      <HeroSection />
      <FeaturedProperties properties={properties} />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
