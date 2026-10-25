import { Download, MonitorDown, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n";

const STABLE_URL = "https://github.com/lighthurtsmyeyes/openchanger-website/releases/download/Release/OpenChanger-x64-Windows.zip";
const DISCORD_URL = "https://discord.gg/invite/PHWW2QDJJN";

export default function DownloadsSection() {
  const { t } = useI18n();

  return (
    <section id="download" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="card rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
              {t.download.title1}
              <span className="text-gradient">{t.download.title2}</span>
            </h2>
            <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              {t.download.sub}
            </p>
            <button
              onClick={() => window.open(STABLE_URL, "_blank")}
              className="btn-primary w-full sm:w-auto px-12 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 cursor-pointer text-base"
            >
              <Download className="w-5 h-5" />
              {t.download.cta}
            </button>
            <div className="mt-6 flex items-center gap-2.5 text-white/30 font-mono2 text-xs">
              <MonitorDown className="w-4 h-4" />
              <span>{t.download.meta}</span>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <button
                onClick={() => window.open(DISCORD_URL, "_blank")}
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
