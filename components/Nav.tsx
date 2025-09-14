"use client";
import { useI18n } from "./I18n";
import Link from "next/link";

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-800/80 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Leson Studios" className="w-7 h-7 rounded-xl ring-1 ring-white/10" />
          <span className="font-semibold tracking-tight">Leson Studios</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#portfolio" className="hover:text-white">{t('nav_portfolio')}</a>
          <a href="#services" className="hover:text-white">{t('nav_services')}</a>
          <a href="#process" className="hover:text-white">{t('nav_process')}</a>
          <a href="#clients" className="hover:text-white">{t('nav_clients')}</a>
          <a href="#contact" className="hover:text-white">{t('nav_contact')}</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="px-3 py-2 rounded-xl bg-white text-black text-sm">{t('quote')}</a>
          <button
            className="px-3 py-2 rounded-xl border border-neutral-700 text-sm"
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
        </div>
      </div>
    </header>
  );
}
