import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const SHOTS = [
  { src: "./menu.png", label: "Выбор скинов" },
  { src: "./screenshot-2.png", label: "Сборка и патч" },
  { src: "./screenshot-3.png", label: "Каталог по героям" },
];

function Screenshot({
  src,
  label,
  onOpen,
}: {
  src: string;
  label: string;
  onOpen: () => void;
}) {
  const [error, setError] = useState(false);

  return (
    <button
      onClick={onOpen}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-[#9fca2b]/40 cursor-zoom-in w-full text-left"
    >
      {!error ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => setError(true)}
        />
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center gap-3 text-white/25">
          <ImageIcon className="w-10 h-10 opacity-50" />
          <p className="text-xs font-medium text-white/40">{label}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-3 left-4 font-mono2 text-[11px] text-white/70">{label}</span>
      <span className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Maximize2 className="w-4 h-4 text-white/80" />
      </span>
    </button>
  );
}

function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (delta: 1 | -1) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  const shot = SHOTS[index];

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center" role="dialog" aria-modal="true" aria-label={shot.label}>
      <div className="lightbox-fade absolute inset-0 bg-[#030303]/95 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full glass text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Закрыть"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={() => onNav(-1)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Предыдущий скриншот"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => onNav(1)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Следующий скриншот"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <figure className="lightbox-zoom relative z-[5] w-full max-w-6xl px-14 md:px-20">
        <img
          src={shot.src}
          alt={shot.label}
          className="w-full max-h-[82vh] object-contain rounded-xl border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
        />
        <figcaption className="mt-4 flex items-center justify-center gap-3 font-mono2 text-xs text-white/40">
          <span>{shot.label}</span>
          <span className="text-white/20">
            {index + 1} / {SHOTS.length}
          </span>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}

export default function ScreenshotsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const nav = useCallback((delta: 1 | -1) => {
    setOpenIndex((cur) => (cur === null ? cur : (cur + delta + SHOTS.length) % SHOTS.length));
  }, []);

  return (
    <section id="screenshots" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#9fca2b] mb-4">// скриншоты</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight">
            Как это <span className="text-gradient">выглядит</span>
          </h2>
          <p className="mt-4 text-sm text-white/40">Нажми на скриншот, чтобы рассмотреть</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 100}>
              <Screenshot {...shot} onOpen={() => setOpenIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && <Lightbox index={openIndex} onClose={close} onNav={nav} />}
    </section>
  );
}
