import { Download, MousePointerClick, Hammer, PlugZap, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n";

const STEP_ICONS = [Download, MousePointerClick, Hammer, PlugZap, Play];

export default function HowItWorksSection() {
  const { t } = useI18n();

  return (
    <section id="how" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#9fca2b] mb-4">{t.how.kicker}</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight">
            {t.how.title1}
            <span className="text-gradient">{t.how.title2}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.how.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 80}>
                <div className="card rounded-2xl p-5 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#c9e56b]" />
                    </div>
                    <span className="font-mono2 text-xs text-white/25">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-700 text-base text-white mb-2">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
