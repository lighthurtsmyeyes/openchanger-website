import { Download, Play, Wand2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    icon: Download,
    num: "01",
    title: "Скачай",
    text: "Один архив, никаких установщиков и лишних программ. Просто скачай и распакуй.",
  },
  {
    icon: Play,
    num: "02",
    title: "Запусти",
    text: "Открой OpenChanger — перед тобой вся библиотека скинов в удобном виде.",
  },
  {
    icon: Wand2,
    num: "03",
    title: "Выбери скин",
    text: "Примени понравившийся скин и перезапусти Dota 2 — он появится у тебя в игре.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative py-28 md:py-36 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-violet-400 mb-4">// как работает</p>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white leading-tight">
            Три шага — <span className="text-gradient">и ты в игре</span>
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-violet-500/50 via-fuchsia-500/40 to-indigo-500/50" />

          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 140}>
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative mb-7">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all duration-500 group-hover:border-violet-400/50 group-hover:shadow-[0_0_35px_-8px_rgba(139,92,246,0.7)] group-hover:-translate-y-1">
                    <step.icon className="w-6 h-6 text-violet-300" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 font-mono2 text-[10px] px-2 py-0.5 rounded-full bg-violet-500 text-white font-semibold shadow-[0_0_16px_-2px_rgba(139,92,246,0.9)]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
