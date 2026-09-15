export const site = {
  name: "vkoutlet",
  whatsappE164: "5511942449240",
  whatsappDisplay: "+55 11 94244-9240",
  instagramUrl: "https://www.instagram.com/outletvk_/",
  instagramHandle: "outletvk_",
  defaultWhatsappText:
    "Fala! Vim pelo site da vkoutlet e quero ver as camisas disponíveis.",
} as const;

export function whatsappHref(text: string = site.defaultWhatsappText) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(text)}`;
}

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
