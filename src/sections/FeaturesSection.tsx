import { Layers, Zap, Code2, Gift, RefreshCw, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useSpotlight } from "@/components/TiltCard";

const MINI_SKINS = [
  "from-fuchsia-600 to-purple-900",
  "from-cyan-500 to-blue-800",
  "from-emerald-600 to-teal-900",
  "from-amber-500 to-red-800",
  "from-violet-600 to-indigo-900",
  "from-rose-500 to-pink-900",
  "from-sky-500 to-indigo-800",
  "from-lime-500 to-emerald-900",
];

export default function FeaturesSection() {
  const spotlight = useSpotlight();

  return (
    <section id="features" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">// возможности</p>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight">
            Всё, что нужно.
            <br />
            <span className="text-gradient">Ничего лишнего.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Big card: library */}
          <Reveal className="lg:col-span-4" delay={0}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-7 md:p-9 h-full">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20 border border-violet-400/25 mb-6">
                <Layers className="w-5 h-5 text-violet-300" />
              </div>
              <h3 className="font-display font-700 text-xl md:text-2xl text-white mb-3">Библиотека из 1000+ скинов</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-md mb-7">
                Арканы, имморталки, редкие сеты и курьеры. Весь контент разложен по героям —
                находи нужное за секунды через поиск.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {MINI_SKINS.map((c, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${c} border border-white/10 flex items-center justify-center mock-skin`}
                  >
                    <Sparkles className="w-4 h-4 text-white/50" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Simplicity */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-7 md:p-9 h-full flex flex-col">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/25 to-orange-600/15 border border-amber-400/25 mb-6">
                <Zap className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-display font-800 text-5xl md:text-6xl text-gradient leading-none">Легко</span>
              <h3 className="font-display font-700 text-lg text-white mt-5 mb-2">Простой процесс</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Выбери скин, примени его и перезапусти игру — всё интуитивно понятно.
              </p>
            </div>
          </Reveal>

          {/* Open source */}
          <Reveal className="lg:col-span-2" delay={0}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-7 md:p-9 h-full">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/25 to-blue-600/15 border border-indigo-400/25 mb-6">
                <Code2 className="w-5 h-5 text-indigo-300" />
              </div>
              <h3 className="font-display font-700 text-lg text-white mb-2">Открытый код</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Весь исходник лежит на GitHub. Прозрачно и проверяемо.
              </p>
              <div className="rounded-lg bg-black/40 border border-white/[0.07] p-3 font-mono2 text-[10px] leading-relaxed">
                <p className="text-white/30">$ git clone openchanger</p>
                <p className="text-violet-300">✓ 100% open source</p>
              </div>
            </div>
          </Reveal>

          {/* Free */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-7 md:p-9 h-full flex flex-col">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-600/15 border border-emerald-400/25 mb-6">
                <Gift className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="font-display font-800 text-5xl md:text-6xl text-white leading-none">0₽</span>
              <h3 className="font-display font-700 text-lg text-white mt-5 mb-2">Бесплатно навсегда</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Никаких подписок, премиум-версий и рекламы. Вообще.
              </p>
            </div>
          </Reveal>

          {/* Updates */}
          <Reveal className="lg:col-span-2" delay={200}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-7 md:p-9 h-full">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500/25 to-pink-600/15 border border-fuchsia-400/25 mb-6">
                <RefreshCw className="w-5 h-5 text-fuchsia-300" />
              </div>
              <h3 className="font-display font-700 text-lg text-white mb-2">Всегда актуально</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Обновления выходят вслед за патчами Dota 2. Ничего не отваливается.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
