/**
 * @file WhatsApp Conversion Engine
 * @description Generates WhatsApp redirect URLs with dynamic property context
 */

/**
 * Generates a WhatsApp URL with pre-filled message about a specific property
 * @param whatsappNumber - The phone number from site settings
 * @param propertyTitle - The title of the property listing
 * @param propertyUrl - The full URL of the property page
 * @returns Formatted WhatsApp URL ready for redirection
 */
export function generateWhatsAppUrl(
  whatsappNumber: string,
  propertyTitle?: string,
  propertyUrl?: string
): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const message = propertyTitle && propertyUrl
    ? `Merhaba, sitenizdeki "${propertyTitle}" (${propertyUrl}) ilanı hakkında bilgi almak istiyorum.`
    : 'Merhaba, emlak ilanlarınız hakkında bilgi almak istiyorum.';

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Generates a generic WhatsApp support URL
 * @param whatsappNumber - The phone number from site settings
 * @returns Formatted WhatsApp URL for general support
 */
export function generateSupportWhatsAppUrl(whatsappNumber: string): string {
  return generateWhatsAppUrl(whatsappNumber);
}
