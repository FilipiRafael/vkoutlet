"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { InstagramIcon, InstagramLink, WhatsAppIcon, WhatsAppLink } from "@/components/icons";

const links = [
  { href: "#pecas", label: "Peças" },
  { href: "#como-funciona", label: "Como funciona" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/40"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#topo" className="flex items-center gap-3" aria-label="vkoutlet, início">
          <Image
            src="/brand/logo.png"
            alt="vkoutlet"
            width={150}
            height={150}
            className="h-9 w-9 sm:h-10 sm:w-10"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
            vkoutlet
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tracking-wide transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <InstagramLink
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-2"
            aria-label="Instagram da vkoutlet"
          >
            <InstagramIcon className="h-5 w-5" />
          </InstagramLink>
          <WhatsAppLink
            aria-label="WhatsApp da vkoutlet"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-vk"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </WhatsAppLink>
        </div>
      </div>
    </header>
  );
}
