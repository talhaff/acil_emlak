/**
 * @file GROQ Queries
 * @description Centralized GROQ queries for Sanity data fetching
 */

/** Fetch all active properties for listing page */
export const allPropertiesQuery = `*[_type == "property"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  status,
  propertyType,
  price,
  location,
  features {
    odaSayisi,
    metrekare
  },
  gallery
}`;

/** Fetch featured properties (latest 6 active) */
export const featuredPropertiesQuery = `*[_type == "property" && status == "aktif"] | order(_createdAt desc) [0...6] {
  _id,
  title,
  slug,
  status,
  propertyType,
  price,
  location,
  features {
    odaSayisi,
    metrekare
  },
  gallery
}`;

/** Fetch single property by slug */
export const propertyBySlugQuery = `*[_type == "property" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  status,
  propertyType,
  price,
  location,
  features,
  gallery,
  description
}`;

/** Fetch site settings singleton */
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  whatsappNumber,
  aboutText,
  contactEmail,
  contactPhone,
  contactAddress,
  heroTitle,
  heroSubtitle,
  logoImage
}`;

/** Fetch all property slugs for static generation */
export const allPropertySlugsQuery = `*[_type == "property" && defined(slug.current)][].slug.current`;
