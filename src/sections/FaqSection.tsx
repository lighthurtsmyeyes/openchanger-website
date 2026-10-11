import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "Это правда бесплатно?",
    a: "Да, полностью. Никаких подписок, скрытых платежей, премиум-версий и рекламы. Сейчас — и навсегда.",
  },
  {
    q: "Скины видят другие игроки?",
    a: "Нет. Скины применяются только на твоём клиенте — остальные игроки видят стандартные модели. Это твой личный визуальный кайф.",
  },
  {
    q: "За это могут забанить?",
    a: "Нет. Способу замены скинов через VPK уже около 9 лет, и за всё это время не было зафиксировано ни одного бана. Сервер про твои скины ничего не знает.",
  },
  {
    q: "Работает ли после обновлений Dota 2?",
    a: "Да. Мы следим за патчами и выпускаем обновления OpenChanger сразу после крупных апдейтов игры. Обычно всё чинится в считанные дни.",
  },
  {
    q: "Нашёл баг или есть идея. Куда писать?",
    a: "Залетай в наш Discord — там быстро отвечаем и поможем с любым вопросом.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#9fca2b] mb-4">// faq</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isOpen
                      ? "border-[#9fca2b]/40 bg-[#9fca2b]/[0.05]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? "text-[#d2ec6e]" : "text-white/80"}`}>
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "border-[#9fca2b]/50 bg-[#9fca2b]/20 rotate-45"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <Plus className={`w-4 h-4 ${isOpen ? "text-[#c9e56b]" : "text-white/50"}`} />
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-white/45 leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
