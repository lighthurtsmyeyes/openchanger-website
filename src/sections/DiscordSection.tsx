import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function DiscordSection() {
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
      id="discord"
      ref={sectionRef}
      className="py-20 px-4 flex flex-col items-center relative z-10 bg-[#0a0a0a]"
    >
      <div className="animate-on-scroll text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Присоединяйтесь к сообществу
        </h2>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          Получайте поддержку, задавайте вопросы, следите за обновлениями и общайтесь с другими пользователями Open Changer.
        </p>
        <button
          onClick={() => window.open("https://discord.gg/invite/PHWW2QDJJN", "_blank")}
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#5865F2] text-white rounded-lg font-bold text-lg hover:bg-[#4752C4] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#5865F2]/30 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
          Перейти в Discord
        </button>
      </div>
    </section>
  );
}
