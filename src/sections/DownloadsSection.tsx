import { Download, CheckCircle2, FlaskConical, MonitorDown, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useSpotlight } from "@/components/TiltCard";

const STABLE_URL = "https://github.com/lighthurtsmyeyes/openchanger-website/releases/download/Release/OpenChanger-x64-Windows.zip";
const BETA_URL = "https://github.com/lighthurtsmyeyes/openchanger-website/releases/download/Beta/OpenChanger-Beta-x64-Windows.zip";

export default function DownloadsSection() {
  const spotlight = useSpotlight();

  return (
    <section id="download" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">// загрузки</p>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight">
            Забирай <span className="text-gradient">свою копию</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Stable */}
          <Reveal delay={0}>
            <div onMouseMove={spotlight} className="spotlight-card gradient-border rounded-2xl p-8 flex flex-col items-center text-center h-full">
              <span className="mb-6 inline-flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/35 text-violet-300">
                <ShieldCheck className="w-3 h-3" />
                рекомендуем
              </span>
              <CheckCircle2 className="w-12 h-12 text-violet-400 mb-5" />
              <h3 className="font-display font-700 text-2xl text-white mb-3">Стабильная</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Проверенная сборка для всех. Максимум стабильности, минимум сюрпризов.
              </p>
              <button
                onClick={() => window.open(STABLE_URL, "_blank")}
                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 cursor-pointer mt-auto"
              >
                <Download className="w-4 h-4" />
                Скачать .zip
              </button>
            </div>
          </Reveal>

          {/* Beta */}
          <Reveal delay={140}>
            <div onMouseMove={spotlight} className="spotlight-card rounded-2xl p-8 flex flex-col items-center text-center h-full">
              <span className="mb-6 inline-flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/40">
                для самых смелых
              </span>
              <FlaskConical className="w-12 h-12 text-white/35 mb-5" />
              <h3 className="font-display font-700 text-2xl text-white mb-3">Бета</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Свежие фичи раньше всех. Возможны баги — зато ты первый на новинках.
              </p>
              <button
                onClick={() => window.open(BETA_URL, "_blank")}
                className="btn-ghost w-full py-3.5 rounded-xl font-semibold text-white/85 flex items-center justify-center gap-2 cursor-pointer mt-auto"
              >
                <Download className="w-4 h-4" />
                Скачать .zip
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-8">
          <div className="flex items-center justify-center gap-2.5 text-white/30 font-mono2 text-xs">
            <MonitorDown className="w-4 h-4" />
            <span>Windows 10 / 11 · x64 · без установки</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
