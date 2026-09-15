import { site } from "@/lib/site";
import {
  InstagramIcon,
  InstagramLink,
  WhatsAppIcon,
  WhatsAppLink,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-16">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-paper/55 uppercase">
            04 — fechamento
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Manda o time e o tamanho. A gente responde.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Atendimento no WhatsApp {site.whatsappDisplay}. Se preferir, chama no
            Instagram @{site.instagramHandle}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-vk px-6 text-sm font-medium text-white transition-colors hover:bg-vk-deep">
              <WhatsAppIcon className="h-4 w-4" />
              Abrir WhatsApp
            </WhatsAppLink>
            <InstagramLink className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-paper/20 px-6 text-sm font-medium text-paper transition-colors hover:border-paper">
              <InstagramIcon className="h-4 w-4" />
              @{site.instagramHandle}
            </InstagramLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
