import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ru, en, type Dict } from "./translations";

export type Lang = "ru" | "en";

const DICTS: Record<Lang, Dict> = { ru, en };
const STORAGE_KEY = "oc-lang";

function readStored(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "ru" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function detectLang(): Lang {
  try {
    const url = new URL(window.location.href);
    const param = url.searchParams.get("lang");
    if (param === "ru" || param === "en") {
      localStorage.setItem(STORAGE_KEY, param);
      url.searchParams.delete("lang");
      window.history.replaceState(null, "", url);
      return param;
    }
  } catch {
    /* URL unavailable — fall through */
  }
  const stored = readStored();
  if (stored) return stored;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("ru") ? "ru" : "en";
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function applyHead(lang: Lang) {
  const d = DICTS[lang];
  document.documentElement.lang = lang;
  document.title = d.meta.title;
  setMetaContent('meta[name="description"]', d.meta.description);
  setMetaContent('meta[property="og:title"]', d.meta.ogTitle);
  setMetaContent('meta[property="og:description"]', d.meta.ogDescription);
  setMetaContent('meta[property="og:locale"]', lang === "ru" ? "ru_RU" : "en_US");
  setMetaContent('meta[name="twitter:title"]', d.meta.ogTitle);
  setMetaContent('meta[name="twitter:description"]', d.meta.ogDescription);
}

type I18n = { lang: Lang; setLang: (lang: Lang) => void; t: Dict };

const LangContext = createContext<I18n | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    applyHead(lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  };

  return <LangContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</LangContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within LangProvider");
  return ctx;
}
