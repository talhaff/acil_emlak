/**
 * @file Formatting Utilities
 * @description Helper functions for number and text formatting
 */

/**
 * Formats a number as Turkish Lira currency
 * @param price - The price number to format
 * @returns Formatted price string (e.g., "1.500.000 ₺")
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Formats square meter value
 * @param m2 - Square meter value
 * @returns Formatted string (e.g., "120 m²")
 */
export function formatArea(m2: number): string {
  return `${m2} m²`;
}

/**
 * Returns a human-readable status label
 * @param status - Property status
 * @returns Turkish status label
 */
export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    aktif: 'Aktif',
    satildi: 'Satıldı',
    kiralandi: 'Kiralandı',
  };
  return labels[status] || status;
}

/**
 * Returns a human-readable property type label
 * @param type - Property type
 * @returns Turkish property type label
 */
export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    satilik: 'Satılık',
    kiralik: 'Kiralık',
  };
  return labels[type] || type;
}
