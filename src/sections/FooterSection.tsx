import { MessageCircle } from "lucide-react";
import { scrollToId } from "@/components/Navbar";

export default function FooterSection() {
  return (
    <footer className="relative border-t border-white/[0.06] px-5 md:px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <button onClick={() => scrollToId("hero")} className="flex items-center gap-2.5 cursor-pointer">
          <img src="./icon-192.png" alt="OpenChanger" className="w-7 h-7 rounded-md ring-1 ring-white/10" />
          <span className="font-display font-700 text-sm tracking-wide text-white">
            OPEN<span className="text-[#9fca2b]">CHANGER</span>
          </span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.open("https://discord.gg/invite/PHWW2QDJJN", "_blank")}
            className="p-2.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all cursor-pointer"
            aria-label="Discord"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-white/30 text-center md:text-right">
          &copy; {new Date().getFullYear()} OpenChanger. Все права защищены.
        </p>
      </div>

      <p className="max-w-6xl mx-auto mt-8 text-center md:text-left text-[11px] leading-relaxed text-white/20">
        OpenChanger не аффилирован с Valve Corporation. Dota 2 является торговой маркой Valve Corporation.
        Программа предоставляется «как есть» — используйте на свой страх и риск.
      </p>
    </footer>
  );
}
