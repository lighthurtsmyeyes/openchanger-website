import { Download, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10"
    >
      <h1 className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">
        Open<span className="text-[#7B3FF2]">Changer</span>
      </h1>
      <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
        Меняй скины в Dota 2 легко и безопасно
      </p>
      <div className="hero-buttons flex flex-wrap gap-4 mt-10 justify-center">
        <button
          onClick={() => scrollTo("download")}
          className="px-8 py-4 bg-[#7B3FF2] text-white rounded-lg font-semibold hover:bg-[#5B2BC2] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#7B3FF2]/30 flex items-center gap-2 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          Скачать
        </button>
        <button
          onClick={() => scrollTo("discord")}
          className="px-8 py-4 bg-[#5865F2] text-white rounded-lg font-semibold hover:bg-[#4752C4] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#5865F2]/30 flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          Discord
        </button>
      </div>
    </section>
  );
}
