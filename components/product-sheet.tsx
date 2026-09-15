"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatBRL } from "@/lib/site";
import type { Product } from "@/lib/products";
import {
  CloseIcon,
  InstagramIcon,
  InstagramLink,
  WhatsAppIcon,
  WhatsAppLink,
} from "@/components/icons";

type ProductSheetProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductSheet({ product, onClose }: ProductSheetProps) {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (!product) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.sheet = "open";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!product.images.length) return;
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % product.images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current === 0 ? product.images.length - 1 : current - 1,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      delete document.body.dataset.sheet;
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  const image = product?.images[index];
  const hasGallery = (product?.images.length ?? 0) > 1;

  function go(next: number) {
    if (!product) return;
    const total = product.images.length;
    setIndex((next + total) % total);
  }

  function onTouchStart(clientX: number) {
    setTouchX(clientX);
  }

  function onTouchEnd(clientX: number) {
    if (touchX === null || !product || !hasGallery) {
      setTouchX(null);
      return;
    }
    const delta = clientX - touchX;
    if (delta > 40) go(index - 1);
    if (delta < -40) go(index + 1);
    setTouchX(null);
  }

  return product && image ? (
    <div className="sheet-root fixed inset-0 z-50 flex items-end justify-center lg:items-center lg:p-8">
      <button
        type="button"
        aria-label="Fechar"
        className="absolute inset-0 bg-ink/80 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-sheet-title"
        className="sheet-panel relative z-10 flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[1.75rem] bg-paper shadow-[0_24px_80px_rgba(20,20,20,0.28)] lg:h-[min(40rem,88dvh)] lg:max-h-[88dvh] lg:rounded-[1.75rem]"
      >
            <div className="grid min-h-0 flex-1 lg:h-full lg:grid-cols-2">
              <div
                className="relative isolate h-[34dvh] w-full shrink-0 overflow-hidden bg-ink lg:h-full"
                onTouchStart={(event) => onTouchStart(event.changedTouches[0].clientX)}
                onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="img-fill object-cover"
                  priority
                />

                <span className="absolute top-3 left-1/2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-paper/70 lg:hidden" />

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm backdrop-blur-sm lg:hidden"
                  aria-label="Fechar peça"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>

                {hasGallery ? (
                  <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                    {product.images.map((item, imageIndex) => (
                      <button
                        key={item.src}
                        type="button"
                        aria-label={`Foto ${imageIndex + 1}`}
                        onClick={() => setIndex(imageIndex)}
                        className={`h-1.5 rounded-full transition-all ${
                          imageIndex === index
                            ? "w-8 bg-paper"
                            : "w-1.5 bg-paper/45"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex min-h-0 flex-col bg-paper">
                <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-5 pb-5 sm:px-8 sm:pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-medium tracking-[0.22em] text-muted uppercase">
                      {product.team}
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="hidden h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper-2 hover:text-ink lg:inline-flex"
                      aria-label="Fechar peça"
                    >
                      <CloseIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <h2
                    id="product-sheet-title"
                    className="mt-3 font-display text-[2rem] leading-none font-semibold tracking-tight sm:text-4xl"
                  >
                    {product.name}
                  </h2>

                  <p className="mt-4 max-w-md font-sans text-[0.95rem] leading-7 text-muted">
                    {product.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm text-muted line-through">
                      {formatBRL(product.compareAt)}
                    </p>
                    <p className="mt-1 flex items-baseline gap-2 font-display text-3xl font-semibold text-vk">
                      {formatBRL(product.price)}
                      <span className="font-sans text-sm font-medium text-muted">
                        cada
                      </span>
                    </p>
                  </div>

                  {product.comboPrice ? (
                    <p className="mt-4 inline-flex rounded-full bg-ink px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.14em] text-paper uppercase">
                      levando 2 · {formatBRL(product.comboPrice)} cada
                    </p>
                  ) : null}

                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.68rem] font-medium tracking-[0.16em] text-muted uppercase">
                    <li>pronta entrega</li>
                    <li>importada</li>
                    <li>chama no zap</li>
                  </ul>
                </div>

                <div className="relative z-10 shrink-0 border-t border-line bg-paper px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8">
                  <WhatsAppLink
                    text={product.whatsappText}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-vk text-sm font-medium text-white transition-colors hover:bg-vk-deep"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Quero essa no WhatsApp
                  </WhatsAppLink>
                  <InstagramLink className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line text-sm font-medium transition-colors hover:border-ink hover:bg-paper-2">
                    <InstagramIcon className="h-4 w-4" />
                    Ver no Instagram
                  </InstagramLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null;
    }
