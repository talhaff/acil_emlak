'use client';

/**
 * @file Sanity Studio Page
 * @description Embedded Sanity Studio for managing content directly within the Next.js app
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
