import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import ScreenshotsSection from "@/sections/ScreenshotsSection";
import FaqSection from "@/sections/FaqSection";
import DownloadsSection from "@/sections/DownloadsSection";
import FooterSection from "@/sections/FooterSection";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n";

function FactsStrip() {
  const { t } = useI18n();
  return (
    <div className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {t.facts.map((fact) => (
          <span key={fact} className="flex items-center gap-2.5 text-sm text-white/55">
            <Check className="w-4 h-4 text-[#9fca2b] shrink-0" />
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen noise">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FactsStrip />
        <HowItWorksSection />
        <ScreenshotsSection />
        <FaqSection />
        <DownloadsSection />
      </main>
      <FooterSection />
    </div>
  );
}
