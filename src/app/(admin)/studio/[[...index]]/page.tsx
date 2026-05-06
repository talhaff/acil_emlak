'use client';

/**
 * @file Sanity Studio Page
 * @description Embedded Sanity Studio for managing content directly within the Next.js app
 */

import dynamic from 'next/dynamic';
import config from '../../../../../sanity.config';

const Studio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  return <Studio config={config} />;
}
