import { Download, MonitorDown, MessageCircle, Users, FileArchive } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n";
import { RELEASE_URL, RELEASES_PAGE_URL, DISCORD_URL } from "@/lib/site";
import { useDownloadsCount, useDiscordMembers } from "@/hooks/use-social-proof";

function SocialProof() {
  const { t, lang } = useI18n();
  const downloads = useDownloadsCount();
  const members = useDiscordMembers();

  if (downloads === null && members === null) return null;

  const fmt = (n: number) => new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US").format(n);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
      {downloads !== null && (
        <span className="flex items-center gap-2 text-white/45">
          <FileArchive className="w-4 h-4 text-[#9fca2b]" />
          <strong className="text-white/85 font-semibold">{fmt(downloads)}</strong>
          {t.download.downloadsLabel}
        </span>
      )}
      {members !== null && (
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors"
        >
          <Users className="w-4 h-4 text-[#9fca2b]" />
          <strong className="text-white/85 font-semibold">{fmt(members)}</strong>
          {t.download.membersLabel}
        </a>
      )}
    </div>
  );
}

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
            <a
              href={RELEASE_URL}
              className="btn-primary w-full sm:w-auto px-12 py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-base"
            >
              <Download className="w-5 h-5" />
              {t.download.cta}
            </a>
            <div className="mt-6 flex items-center gap-2.5 text-white/30 font-mono2 text-xs">
              <MonitorDown className="w-4 h-4" />
              <span>{t.download.meta}</span>
            </div>
            <SocialProof />
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </a>
              <a
                href={RELEASES_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              >
                <FileArchive className="w-4 h-4" />
                GitHub
              </a>
            </div>
            <a
              href={RELEASES_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t.download.sourceLink}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
