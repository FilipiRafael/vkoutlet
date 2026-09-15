import Image from "next/image";
import { WhatsAppIcon, WhatsAppLink } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="hero-rise mb-6 text-[0.7rem] font-medium tracking-[0.28em] text-muted uppercase">
            01 — camisas de time
          </p>

          <h1 className="font-display text-[clamp(2.4rem,6.4vw,5.25rem)] leading-[0.94] font-semibold tracking-tight text-ink">
            <span className="hero-rise hero-rise-d1 block sm:whitespace-nowrap">
              onde a camisa
            </span>
            <span className="hero-rise hero-rise-d2 mt-1 block sm:whitespace-nowrap">
              encontra o <span className="text-vk">jogo</span>
            </span>
          </h1>

          <p className="hero-rise hero-rise-d3 mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Importada, à pronta entrega, envio pra todo o Brasil. Você escolhe
            a peça e fecha no WhatsApp.
          </p>

          <div className="hero-rise hero-rise-d4 mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppLink className="inline-flex h-12 items-center gap-2 rounded-full bg-vk px-6 text-sm font-medium text-white transition-colors hover:bg-vk-deep">
              <WhatsAppIcon className="h-4 w-4" />
              Chamar no WhatsApp
            </WhatsAppLink>
            <a
              href="#pecas"
              className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Ver peças
            </a>
          </div>

          <ul className="hero-rise hero-rise-d5 mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] tracking-[0.22em] text-muted uppercase">
            <li>pronta entrega</li>
            <li>importadas</li>
            <li>envio BR</li>
          </ul>
        </div>

        <div className="hero-rise hero-rise-d2 relative lg:col-span-5">
          <div
            className="absolute -top-4 -left-4 h-24 w-24 bg-vk sm:-top-5 sm:-left-5"
            aria-hidden
          />
          <div className="relative isolate aspect-square overflow-hidden rounded-[1.75rem] bg-ink">
            <Image
              src="/images/products/brasil-ronaldinho-frente.jpg"
              alt="Camisa do Brasil 10, número no peito"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="img-fill object-cover"
            />
          </div>
          <p className="mt-4 flex items-center justify-between text-[0.7rem] tracking-[0.18em] text-muted uppercase">
            <span>Brasil 10 — acervo</span>
            <span>vkoutlet</span>
          </p>
        </div>
      </div>

      <a
        href="#pecas"
        className="mt-14 hidden items-center gap-3 text-[0.65rem] tracking-[0.28em] text-muted uppercase sm:flex"
      >
        <span className="h-px w-10 bg-line" />
        desce
      </a>
    </section>
  );
}
