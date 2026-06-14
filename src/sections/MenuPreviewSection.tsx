import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

export default function MenuPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = section.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-20 px-4 flex flex-col items-center relative z-10 bg-[#0a0a0a]"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-on-scroll">
        Интерфейс
      </h2>
      <div className="animate-on-scroll w-full max-w-5xl menu-preview-container bg-[#111] rounded-xl border border-white/10 flex justify-center items-center overflow-hidden relative group">
        {!imgError ? (
          <img
            src="./menu.png"
            alt="Menu Preview"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full aspect-video flex flex-col justify-center items-center text-gray-500">
            <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
            <span className="text-lg">Поместите menu.png в папку public</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
