import { useState } from "react";
import { ImageIcon, MousePointerClick } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import MockApp from "@/components/MockApp";

function Screenshot({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-violet-400/40 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.5)] ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-[1.04]"
          onError={() => setError(true)}
        />
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center gap-3 text-white/25">
          <ImageIcon className="w-10 h-10 opacity-50" />
          <div className="text-center">
            <p className="text-xs font-medium text-white/40">{label}</p>
            <p className="font-mono2 text-[10px] mt-1">public/{src.replace("./", "")}</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050208]/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">// интерфейс</p>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight">
            Выглядит так же хорошо,
            <br />
            <span className="text-gradient">как и работает</span>
          </h2>
          <p className="mt-5 text-white/45 max-w-xl mx-auto text-sm md:text-base flex items-center justify-center gap-2">
            <MousePointerClick className="w-4 h-4 text-violet-400 shrink-0" />
            Подвигай курсором над окном — оно оживёт
          </p>
        </Reveal>

        <Reveal delay={120}>
          <TiltCard max={7} scale={1.005} className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 65%)" }}
              />
              <div className="relative">
                <MockApp />
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          <Reveal delay={0}>
            <Screenshot src="./menu.png" label="Главное окно" />
          </Reveal>
          <Reveal delay={100}>
            <Screenshot src="./screenshot-2.png" label="Скриншот №2" />
          </Reveal>
          <Reveal delay={200}>
            <Screenshot src="./screenshot-3.png" label="Скриншот №3" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
