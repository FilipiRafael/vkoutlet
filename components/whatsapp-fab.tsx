import { WhatsAppIcon, WhatsAppLink } from "@/components/icons";

export function WhatsAppFab() {
  return (
    <WhatsAppLink
      aria-label="Abrir WhatsApp da vkoutlet"
      className="whatsapp-fab fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-paper shadow-[0_12px_40px_rgba(20,20,20,0.22)] transition-colors hover:bg-vk md:hidden"
    >
      <WhatsAppIcon className="h-4 w-4" />
      WhatsApp
    </WhatsAppLink>
  );
}
