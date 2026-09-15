import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Escolhe a peça",
    body: "Olha a peça, o time, o preço. Se curtir, abre e lê o recado.",
  },
  {
    n: "02",
    title: "Chama no WhatsApp",
    body: "Manda o time e o tamanho. A gente confirma o que tem agora.",
  },
  {
    n: "03",
    title: "Recebe em casa",
    body: "Importada, pronta entrega. Envio pra todo o Brasil.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-muted uppercase">
            03 — como funciona
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            três passos. o resto é conversa.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <li className="border-t border-line pt-6">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-vk">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
