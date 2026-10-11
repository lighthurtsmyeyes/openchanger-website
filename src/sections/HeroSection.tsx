import { Download, ChevronDown } from "lucide-react";
import MockApp from "@/components/MockApp";
import { scrollToId } from "@/components/Navbar";

const STATS = [
  { value: "12 000+", label: "скинов" },
  { value: "125", label: "героев" },
  { value: "0 ₽", label: "навсегда" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-5 md:px-8 overflow-hidden"
    >
      {/* Subtle backdrop */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(159, 202, 43, 0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <h1 className="font-display font-900 leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-[4.4rem]">
            <span className="hero-anim block text-white text-glow" style={{ animationDelay: "0ms" }}>
              Все скины Dota 2.
            </span>
            <span className="hero-anim block text-gradient text-glow" style={{ animationDelay: "120ms" }}>
              Бесплатно.
            </span>
          </h1>

          <p
            className="hero-anim mt-6 text-base md:text-lg text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed font-light"
            style={{ animationDelay: "240ms" }}
          >
            Скин-чейнджер для Dota 2: выбрал скин, применил — и играешь с ним.
          </p>

          <div className="hero-anim mt-9 flex justify-center lg:justify-start" style={{ animationDelay: "360ms" }}>
            <button
              onClick={() => scrollToId("download")}
              className="btn-primary flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Скачать бесплатно
            </button>
          </div>

          <div
            className="hero-anim flex gap-10 mt-12 justify-center lg:justify-start"
            style={{ animationDelay: "480ms" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl font-800 text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 mt-1 font-mono2 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: app window */}
        <div className="hero-anim relative" style={{ animationDelay: "300ms" }}>
          <div
            className="absolute -inset-8 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(159, 202, 43, 0.1) 0%, transparent 65%)" }}
          />
          <div className="relative">
            <MockApp />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollToId("how")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Листай вниз"
      >
        <span className="font-mono2 text-[10px] uppercase tracking-[0.25em]">листай</span>
        <ChevronDown className="w-5 h-5 scroll-hint-dot" />
      </button>
    </section>
  );
}
