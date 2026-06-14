import { useEffect, useRef } from "react";
import { CheckCircle, FlaskConical, Download } from "lucide-react";

export default function DownloadsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="download"
      ref={sectionRef}
      className="py-20 px-4 flex flex-col items-center relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-on-scroll">
        Загрузки
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        {/* Stable */}
        <div
          className="glass-card p-8 flex-1 flex flex-col items-center text-center animate-on-scroll"
          style={{ transitionDelay: "0ms" }}
        >
          <div className="mb-4 text-[#7B3FF2]">
            <CheckCircle className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Стабильная версия</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Рекомендуется для большинства пользователей. Последняя проверенная и стабильная сборка.
          </p>
          <button
            onClick={() => window.open("https://github.com/", "_blank")}
            className="w-full py-3 bg-[#7B3FF2] text-white rounded-lg font-semibold hover:bg-[#5B2BC2] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#7B3FF2]/20 flex items-center justify-center gap-2 cursor-pointer mt-auto"
          >
            <Download className="w-4 h-4" />
            Скачать
          </button>
        </div>

        {/* Pre-release */}
        <div
          className="glass-card p-8 flex-1 flex flex-col items-center text-center animate-on-scroll"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="mb-4 text-gray-500">
            <FlaskConical className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Пре-релиз</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Свежие функции и улучшения, но возможны баги. Для тех, кто хочет попробовать новое первым.
          </p>
          <button
            onClick={() => window.open("https://github.com/", "_blank")}
            className="w-full py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer mt-auto"
          >
            <Download className="w-4 h-4" />
            Скачать
          </button>
        </div>
      </div>
    </section>
  );
}
