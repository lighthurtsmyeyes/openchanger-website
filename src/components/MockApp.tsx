import { Search, LayoutGrid, Swords, Backpack, Settings, Sparkles, Check, Zap } from "lucide-react";

const SKINS = [
  { name: "Manifold Paradox", hero: "Phantom Assassin", rarity: "Arcana", color: "from-fuchsia-600/80 to-purple-900/80", rarityColor: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10" },
  { name: "Frost Avalanche", hero: "Crystal Maiden", rarity: "Arcana", color: "from-cyan-500/80 to-blue-800/80", rarityColor: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10" },
  { name: "Feast of Abscession", hero: "Pudge", rarity: "Arcana", color: "from-emerald-600/80 to-teal-900/80", rarityColor: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10" },
  { name: "Bladeform Legacy", hero: "Juggernaut", rarity: "Legendary", color: "from-amber-500/80 to-red-800/80", rarityColor: "text-amber-300 border-amber-400/30 bg-amber-500/10" },
  { name: "Dark Artistry", hero: "Invoker", rarity: "Immortal", color: "from-violet-600/80 to-indigo-900/80", rarityColor: "text-violet-300 border-violet-400/30 bg-violet-500/10" },
  { name: "Golden Basher", hero: "Anti-Mage", rarity: "Immortal", color: "from-yellow-500/80 to-amber-800/80", rarityColor: "text-violet-300 border-violet-400/30 bg-violet-500/10" },
];

const NAV = [
  { icon: LayoutGrid, label: "Скины", active: true },
  { icon: Swords, label: "Герои", active: false },
  { icon: Backpack, label: "Инвентарь", active: false },
  { icon: Settings, label: "Настройки", active: false },
];

export default function MockApp() {
  return (
    <div className="mock-window rounded-2xl overflow-hidden text-left select-none">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex items-center gap-2 ml-3">
          <Zap className="w-3.5 h-3.5 text-violet-400" />
          <span className="font-mono2 text-xs text-white/60">OpenChanger</span>
        </div>
        <span className="ml-auto font-mono2 text-[10px] px-2 py-0.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300">
          v2.1.0
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-36 md:w-44 shrink-0 border-r border-white/[0.06] py-4 px-2 gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                item.active
                  ? "bg-violet-500/15 text-violet-200 border border-violet-400/25"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </div>
          ))}
          <div className="mt-auto mx-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
              <span className="text-[10px] text-white/50 font-mono2">Dota 2 запущена</span>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-4 min-w-0">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.07] mb-3">
            <Search className="w-3.5 h-3.5 text-white/30" />
            <span className="text-xs text-white/30">Поиск по скинам...</span>
            <kbd className="ml-auto font-mono2 text-[9px] text-white/25 border border-white/10 rounded px-1.5 py-0.5">Ctrl+K</kbd>
          </div>

          {/* Filter chips */}
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {["Все", "Arcana", "Immortal", "Legendary"].map((chip, i) => (
              <span
                key={chip}
                className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                  i === 0
                    ? "bg-violet-500/20 border-violet-400/40 text-violet-200"
                    : "border-white/10 text-white/40"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Skins grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {SKINS.map((skin, i) => (
              <div
                key={skin.name}
                className={`mock-skin relative rounded-xl border overflow-hidden ${
                  i === 0 ? "border-violet-400/50" : "border-white/[0.07]"
                } bg-white/[0.02]`}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${skin.color} relative flex items-center justify-center`}>
                  <Sparkles className="w-5 h-5 text-white/60" />
                  {i === 0 && (
                    <span className="absolute top-1.5 right-1.5 flex items-center gap-1 text-[8px] font-semibold bg-violet-500 text-white px-1.5 py-0.5 rounded-full">
                      <Check className="w-2 h-2" />
                      Активен
                    </span>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-semibold text-white/85 truncate">{skin.name}</p>
                  <p className="text-[9px] text-white/35 truncate">{skin.hero}</p>
                  <span className={`inline-block mt-1.5 text-[8px] px-1.5 py-0.5 rounded border ${skin.rarityColor}`}>
                    {skin.rarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
