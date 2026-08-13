import { useState, useEffect } from "react";
import { Menu, X, Github, Zap } from "lucide-react";

const LINKS = [
  { label: "Возможности", id: "features" },
  { label: "Интерфейс", id: "showcase" },
  { label: "Как работает", id: "how" },
  { label: "FAQ", id: "faq" },
];

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050208]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_40px_-15px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_20px_-4px_rgba(139,92,246,0.8)] group-hover:shadow-[0_0_28px_-2px_rgba(139,92,246,1)] transition-shadow">
            <Zap className="w-4 h-4 text-white" />
          </span>
          <span className="font-display text-sm md:text-base font-700 tracking-wide text-white">
            OPEN<span className="text-gradient">CHANGER</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => window.open("https://github.com/lighthurtsmyeyes/openchanger-website", "_blank")}
            className="p-2.5 rounded-full text-white/50 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </button>
          <button
            onClick={() => go("download")}
            className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold text-white cursor-pointer"
          >
            Скачать
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/80 p-2 cursor-pointer"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050208]/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="block w-full text-left py-3 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("download")}
            className="btn-primary w-full mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
          >
            Скачать
          </button>
        </div>
      )}
    </nav>
  );
}
