import { MessageCircle, Users, Bell, LifeBuoy } from "lucide-react";
import Reveal from "@/components/Reveal";

const PERKS = [
  { icon: LifeBuoy, text: "Быстрая поддержка" },
  { icon: Bell, text: "Новости обновлений" },
  { icon: Users, text: "Живое комьюнити" },
];

export default function DiscordSection() {
  return (
    <section id="discord" className="relative py-28 md:py-36 px-5 md:px-8">
      <Reveal className="max-w-5xl mx-auto">
        <div className="gradient-border rounded-3xl relative overflow-hidden">
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 90% at 50% 110%, rgba(139,92,246,0.22) 0%, transparent 60%)" }}
          />

          <div className="relative px-6 py-16 md:py-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5865F2] to-[#8b9cf9] shadow-[0_0_50px_-10px_rgba(88,101,242,0.9)] mb-8">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>

            <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight mb-5">
              Залетай в <span className="text-gradient">комьюнити</span>
            </h2>
            <p className="text-white/45 max-w-xl mx-auto leading-relaxed mb-8">
              Поддержка, новости обновлений, идеи и просто общение с такими же фанатами Dota 2.
              Мы на связи почти круглосуточно.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {PERKS.map((perk) => (
                <span key={perk.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-white/60">
                  <perk.icon className="w-3.5 h-3.5 text-violet-300" />
                  {perk.text}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open("https://discord.gg/invite/PHWW2QDJJN", "_blank")}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#5865F2] text-white font-bold text-lg transition-all duration-300 hover:bg-[#4752C4] hover:-translate-y-0.5 hover:scale-[1.03] shadow-[0_15px_50px_-10px_rgba(88,101,242,0.8)] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Перейти в Discord
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
