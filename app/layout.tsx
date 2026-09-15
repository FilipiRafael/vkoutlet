import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "vkoutlet",
    template: "%s · vkoutlet",
  },
  description:
    "Camisas de time importadas, à pronta entrega. Você escolhe e fecha no WhatsApp.",
  applicationName: "vkoutlet",
  keywords: [
    "camisa de time",
    "camisas importadas",
    "pronta entrega",
    "vkoutlet",
    "futebol",
  ],
  openGraph: {
    title: "vkoutlet",
    description:
      "Camisas de time importadas, à pronta entrega. Escolhe a peça, chama no zap.",
    locale: "pt_BR",
    type: "website",
    siteName: "vkoutlet",
    images: [
      {
        url: "/images/products/brasil-ronaldinho-frente.jpg",
        width: 1024,
        height: 1024,
        alt: "Camisa do Brasil 10 — vkoutlet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vkoutlet",
    description:
      "Camisas de time importadas, à pronta entrega. Escolhe a peça, chama no zap.",
    images: ["/images/products/brasil-ronaldinho-frente.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
