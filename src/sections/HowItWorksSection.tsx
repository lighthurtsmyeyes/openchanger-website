import { Download, MousePointerClick, Hammer, PlugZap, Play } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    icon: Download,
    num: "01",
    title: "Скачай",
    text: "Один архив, без установщика. Распакуй и запусти.",
  },
  {
    icon: MousePointerClick,
    num: "02",
    title: "Выбери скины",
    text: "Найди по герою или редкости и отметь понравившиеся.",
  },
  {
    icon: Hammer,
    num: "03",
    title: "Build",
    text: "Программа соберёт пак из выбранных скинов.",
  },
  {
    icon: PlugZap,
    num: "04",
    title: "Patch",
    text: "Пропатчи клиент Dota 2 — скины встанут в игру.",
  },
  {
    icon: Play,
    num: "05",
    title: "Запусти Dota 2",
    text: "Скины стоят в игре. Видишь их только ты.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#9fca2b] mb-4">// как работает</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight">
            Пять шагов — <span className="text-gradient">и скины в игре</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="card rounded-2xl p-5 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#c9e56b]" />
                  </div>
                  <span className="font-mono2 text-xs text-white/25">{step.num}</span>
                </div>
                <h3 className="font-display font-700 text-base text-white mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
