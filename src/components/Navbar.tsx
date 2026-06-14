import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Главная", id: "hero" },
    { label: "Меню", id: "menu" },
    { label: "Загрузки", id: "download" },
    { label: "Discord", id: "discord" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl md:text-2xl font-bold tracking-tight text-white cursor-pointer"
        >
          Open<span className="text-[#7B3FF2]">Changer</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white cursor-pointer"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
