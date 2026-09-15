import Image from "next/image";
import { formatBRL } from "@/lib/site";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  onOpen: (product: Product) => void;
};

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const cover = product.images[0];

  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      className="group flex w-full flex-col text-left outline-none [-webkit-tap-highlight-color:transparent]"
    >
      <div className="relative isolate aspect-square overflow-hidden rounded-[1.4rem] bg-ink">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="img-fill object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          <span className="rounded-full bg-paper px-4 py-2 text-[0.7rem] font-medium tracking-[0.18em] text-ink uppercase">
            Quero essa
          </span>
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3 px-1">
        <div>
          <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
            {product.team}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
            {product.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-[0.7rem] text-muted line-through">
            {formatBRL(product.compareAt)}
          </p>
          <p className="font-display text-base font-semibold text-vk">
            {formatBRL(product.price)}
          </p>
        </div>
      </div>
    </button>
  );
}
