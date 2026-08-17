export const EMAIL = 'contact.barbershop.studio@gmail.com';
export const WHATSAPP_NUMBER = '50688527576';

export function buildMailto(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
