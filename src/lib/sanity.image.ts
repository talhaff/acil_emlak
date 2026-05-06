/**
 * @file Sanity Image URL Builder
 * @description Utility to generate optimized image URLs from Sanity
 */

import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './sanity.client';
import type { ISanityImage } from '@/types';

const builder = imageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

/**
 * Generates an optimized URL for a Sanity image
 * @param source - Sanity image reference object
 * @returns Image URL builder instance
 */
export function urlForImage(source: ISanityImage) {
  return builder.image(source);
}
