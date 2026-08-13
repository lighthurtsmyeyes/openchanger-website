import { useRef, type MouseEvent } from "react";
import { Download, ChevronDown, Github, Star } from "lucide-react";
import MockApp from "@/components/MockApp";
import { useCountUp } from "@/hooks/useCountUp";
import { scrollToId } from "@/components/Navbar";

function Stat({ target, suffix, label, decimals = 0 }: { target: number; suffix: string; label: string; decimals?: number }) {
  const { ref, value } = useCountUp(target, 1600, decimals);
  return (
    <div className="flex flex-col">
      <span ref={ref} className="font-display text-2xl md:text-3xl font-800 text-white">
        {value.toLocaleString("ru-RU")}
        <span className="text-gradient">{suffix}</span>
      </span>
      <span className="text-xs text-white/40 mt-1 font-mono2 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const mockRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = mockRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;
    const rect = section.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${px * 18}px, ${py * 14}px, 0) rotateY(${px * 4}deg) rotateX(${-py * 4}deg)`;
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-5 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="hero-anim inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8" style={{ animationDelay: "0ms" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono2 text-xs text-white/60 tracking-wide">open source · активно развивается</span>
          </div>

          <h1 className="font-display font-900 leading-[1.02] tracking-tight text-[11vw] sm:text-6xl md:text-7xl xl:text-[5.2rem]">
            <span className="hero-anim block text-white text-glow" style={{ animationDelay: "80ms" }}>ТВОЯ ДОТА.</span>
            <span className="hero-anim block text-gradient text-glow" style={{ animationDelay: "200ms" }}>ТВОИ СКИНЫ.</span>
          </h1>

          <p className="hero-anim mt-7 text-base md:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light" style={{ animationDelay: "340ms" }}>
            OpenChanger — бесплатный скин-чейнджер для Dota 2 с открытым исходным кодом.
            Больше тысячи скинов, аркан и имморталок — в два клика, без танцев с бубном.
          </p>

          <div className="hero-anim flex flex-wrap gap-4 mt-10 justify-center lg:justify-start" style={{ animationDelay: "480ms" }}>
            <button
              onClick={() => scrollToId("download")}
              className="btn-primary flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Скачать бесплатно
            </button>
            <button
              onClick={() => window.open("https://github.com/lighthurtsmyeyes/openchanger-website", "_blank")}
              className="btn-ghost flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white/80 cursor-pointer"
            >
              <Github className="w-5 h-5" />
              Исходный код
            </button>
          </div>

          <div className="hero-anim flex gap-10 mt-14 justify-center lg:justify-start" style={{ animationDelay: "620ms" }}>
            <Stat target={1000} suffix="+" label="скинов" />
            <Stat target={120} suffix="+" label="героев" />
            <Stat target={100} suffix="%" label="бесплатно" />
          </div>
        </div>

        {/* Right: floating mockup */}
        <div className="hero-anim relative tilt-scene" style={{ animationDelay: "400ms" }}>
          <div
            className="absolute -inset-10 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.22) 0%, transparent 65%)" }}
          />
          <div ref={mockRef} className="relative animate-float" style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease-out" }}>
            <MockApp />

            {/* Floating chips */}
            <div className="absolute -left-4 md:-left-10 top-10 glass rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-2xl" style={{ transform: "translateZ(50px)" }}>
              <Star className="w-4 h-4 text-amber-300" />
              <div>
                <p className="text-xs font-semibold text-white">Arcana разблокирована</p>
                <p className="text-[10px] text-white/40 font-mono2">Manifold Paradox</p>
              </div>
            </div>
            <div className="absolute -right-3 md:-right-8 bottom-12 glass rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-2xl" style={{ transform: "translateZ(40px)" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              <div>
                <p className="text-xs font-semibold text-white">Применено за 0.4 сек</p>
                <p className="text-[10px] text-white/40 font-mono2">без перезапуска игры</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollToId("features")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Листай вниз"
      >
        <span className="font-mono2 text-[10px] uppercase tracking-[0.25em]">листай</span>
        <ChevronDown className="w-5 h-5 scroll-hint-dot" />
      </button>
    </section>
  );
}
