/**
 * @file Sanity Configuration
 * @description Configuration for embedded Sanity Studio
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ws5fndo6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio', // Studio'ya erişim adresi (örn: localhost:3000/studio)
  name: 'Acil_Emlak_Studio',
  title: 'Acil Emlak Yönetim Paneli',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
