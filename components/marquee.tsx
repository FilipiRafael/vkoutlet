const items = [
  "Palmeiras",
  "Corinthians",
  "São Paulo",
  "Brasil",
  "pronta entrega",
  "importada",
  "qualidade",
  "envio Brasil",
];

function MarqueeRow() {
  return items.map((item) => (
    <span
      key={item}
      className="font-display text-sm font-semibold tracking-[0.22em] text-ink/80 uppercase sm:text-base"
    >
      {item}
      <span className="ml-10 text-vk" aria-hidden>
        *
      </span>
    </span>
  ));
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper-2/60 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap pr-10">
        <div className="flex gap-10">{MarqueeRow()}</div>
        <div className="flex gap-10" aria-hidden>
          {MarqueeRow()}
        </div>
      </div>
    </div>
  );
}
