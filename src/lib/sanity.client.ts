/**
 * @file Sanity Client Configuration
 * @description Centralized Sanity client setup for data fetching
 */

import { createClient } from 'next-sanity';

/** Sanity project configuration */
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
};

/** Sanity client instance */
export const sanityClient = createClient(sanityConfig);
