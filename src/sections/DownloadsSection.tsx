import { Download, CheckCircle2, MonitorDown, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useSpotlight } from "@/components/TiltCard";

const STABLE_URL = "https://github.com/lighthurtsmyeyes/openchanger-website/releases/download/Release/OpenChanger-x64-Windows.zip";

export default function DownloadsSection() {
  const spotlight = useSpotlight();

  return (
    <section id="download" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-2xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">// загрузки</p>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight">
            Забирай <span className="text-gradient">свою копию</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div onMouseMove={spotlight} className="spotlight-card gradient-border rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/35 text-violet-300">
              <ShieldCheck className="w-3 h-3" />
              последняя версия
            </span>
            <CheckCircle2 className="w-14 h-14 text-violet-400 mb-5" />
            <h3 className="font-display font-700 text-2xl md:text-3xl text-white mb-3">OpenChanger для Windows</h3>
            <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Актуальная стабильная сборка. Скачай архив, распакуй — и можно пользоваться.
            </p>
            <button
              onClick={() => window.open(STABLE_URL, "_blank")}
              className="btn-primary w-full sm:w-auto px-12 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 cursor-pointer text-base"
            >
              <Download className="w-5 h-5" />
              Скачать бесплатно
            </button>
          </div>
        </Reveal>

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
