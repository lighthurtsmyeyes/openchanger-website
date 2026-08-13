import AuroraBackground from "@/components/AuroraBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import ShowcaseSection from "@/sections/ShowcaseSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import DownloadsSection from "@/sections/DownloadsSection";
import FaqSection from "@/sections/FaqSection";
import DiscordSection from "@/sections/DiscordSection";
import FooterSection from "@/sections/FooterSection";
import { Sparkle } from "lucide-react";

const MARQUEE_ITEMS = [
  "1000+ скинов",
  "бесплатно навсегда",
  "открытый исходный код",
  "без рекламы",
  "обновления к каждому патчу",
  "простой интерфейс",
];

function MarqueeStrip() {
  return (
    <Marquee className="relative z-10 border-y border-white/[0.06] bg-white/[0.015] py-5">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center shrink-0">
          <span className="font-display font-600 text-sm md:text-base uppercase tracking-[0.2em] text-white/35 px-6">
            {item}
          </span>
          <Sparkle className="w-4 h-4 text-violet-400/70 shrink-0" />
        </span>
      ))}
    </Marquee>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen noise">
      <AuroraBackground />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MarqueeStrip />
        <FeaturesSection />
        <ShowcaseSection />
        <HowItWorksSection />
        <DownloadsSection />
        <FaqSection />
        <DiscordSection />
        <FooterSection />
      </main>
    </div>
  );
}
