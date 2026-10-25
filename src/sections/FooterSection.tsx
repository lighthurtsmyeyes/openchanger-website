import { MessageCircle, Github } from "lucide-react";
import { useI18n } from "@/i18n";
import { DISCORD_URL, REPO_URL, GUIDES } from "@/lib/site";

export default function FooterSection() {
  const { t } = useI18n();
  const guideHrefs = [GUIDES.skinChanger, GUIDES.howToChange, GUIDES.arcana];

  return (
    <footer className="relative border-t border-white/[0.06] px-5 md:px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src="./icon-192.png" alt="OpenChanger" className="w-7 h-7 rounded-md ring-1 ring-white/10" />
          <span className="font-display font-700 text-sm tracking-wide text-white">
            OPEN<span className="text-[#9fca2b]">CHANGER</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all"
            aria-label="Discord"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-white/30 text-center md:text-right">
          &copy; {new Date().getFullYear()} OpenChanger. {t.footer.rights}
        </p>
      </div>

      {/* SEO link hub: guide pages + repo, real <a> links for crawlers */}
      <nav className="max-w-6xl mx-auto mt-8" aria-label={t.footer.guidesTitle}>
        <a
          href={GUIDES.home}
          className="block font-mono2 text-[10px] uppercase tracking-[0.25em] text-white/30 hover:text-white/60 transition-colors mb-3 text-center"
        >
          {t.footer.guidesTitle}
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
          {t.footer.guides.map((label, i) => (
            <li key={label}>
              <a href={guideHrefs[i]} className="hover:text-white/80 transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              {t.footer.githubLink}
            </a>
          </li>
        </ul>
      </nav>

      <p className="max-w-6xl mx-auto mt-8 text-center md:text-left text-[11px] leading-relaxed text-white/20">
        {t.footer.disclaimer}
      </p>
    </footer>
  );
}
