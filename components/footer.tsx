import Image from "next/image";
import { site } from "@/lib/site";
import {
  InstagramIcon,
  InstagramLink,
  WhatsAppIcon,
  WhatsAppLink,
} from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            src="/brand/logo.png"
            alt="vkoutlet"
            width={150}
            height={150}
            className="h-10 w-10"
          />
          <p className="mt-4 font-display text-sm font-semibold tracking-[0.2em] uppercase">
            vkoutlet
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Camisas importadas. Compra e atendimento pelo WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <WhatsAppLink className="inline-flex items-center gap-2 text-ink transition-colors hover:text-vk">
            <WhatsAppIcon className="h-4 w-4" />
            {site.whatsappDisplay}
          </WhatsAppLink>
          <InstagramLink className="inline-flex items-center gap-2 text-ink transition-colors hover:text-vk">
            <InstagramIcon className="h-4 w-4" />
            @{site.instagramHandle}
          </InstagramLink>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[0.7rem] tracking-wide text-muted">
        vkoutlet · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
