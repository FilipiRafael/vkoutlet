"use client";

import { useState } from "react";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductSheet } from "@/components/product-sheet";
import { Reveal } from "@/components/reveal";

export function Vitrine() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="pecas" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] text-muted uppercase">
                02 — peças
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                o que tem agora
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Preço na peça. Tamanho e disponibilidade, no zap. Sem carrinho, sem
              enrolação.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <ProductCard product={product} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductSheet
        key={selected?.id ?? "closed"}
        product={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
