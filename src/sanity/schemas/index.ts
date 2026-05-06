/**
 * @file Sanity Schema Index
 * @description Central export point for all Sanity schemas
 */

import propertySchema from './property';
import siteSettingsSchema from './siteSettings';

export const schemaTypes = [propertySchema, siteSettingsSchema];
