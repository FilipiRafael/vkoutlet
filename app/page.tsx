import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Vitrine } from "@/components/vitrine";
import { HowItWorks } from "@/components/how-it-works";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Marquee />
        <Vitrine />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
