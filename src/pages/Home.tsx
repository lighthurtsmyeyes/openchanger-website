import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import MenuPreviewSection from "@/sections/MenuPreviewSection";
import DownloadsSection from "@/sections/DownloadsSection";
import DiscordSection from "@/sections/DiscordSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MenuPreviewSection />
        <DownloadsSection />
        <DiscordSection />
        <FooterSection />
      </main>
    </div>
  );
}
