/** Return a safe absolute HTTP(S) URL, or an empty string for invalid input.
export function getSafeExternalUrl(value) {
  
  if (typeof value !== "string" || !value.trim()) return "";

  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

/** Normalize an international WhatsApp number to digits only. 
export function getWhatsAppUrl(phoneNumber) {
  if (typeof phoneNumber !== "string") return "";
  const digits = phoneNumber.replace(/\D/g, "");

  // E.164 numbers contain 8–15 digits. A blank/placeholder value disables the link.
  if (!/^\d{8,15}$/.test(digits) || /^0+$/.test(digits)) return "";
  return `https://wa.me/${digits}`;
}

export function getMailtoUrl(email) {
  if (typeof email !== "string") return "";
  const normalized = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return "";
  if (normalized.toLowerCase().includes("example.com")) return "";
  return `mailto:${normalized}`;
}
 */