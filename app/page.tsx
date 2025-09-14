"use client";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";
import { useI18n } from "@/components/I18n";
import { Landmark, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Page() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 900);
  };

  return (
    <div>
      <Nav />
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-400 mb-4">{t('tagline')}</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {t('hero_h1_line1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-rose-500">{t('hero_h1_line2')}</span>
            </h1>
            <p className="mt-5 text-neutral-400 max-w-xl">
              {t('hero_desc')}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#portfolio" className="px-4 py-2 rounded-xl bg-white text-black text-sm">{t('cta_portfolio')}</a>
              <a href="#process" className="px-4 py-2 rounded-xl border border-neutral-700 text-sm">{t('cta_process')}</a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-neutral-400 text-sm">
              <span className="inline-flex items-center gap-2"><Landmark className="w-4 h-4"/> HCM • Hà Nội • Resort</span>
              <span className="inline-flex items-center gap-2"><Youtube className="w-4 h-4"/> BTS • Tips</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/5 shadow-2xl">
              <img src="/portfolio/01.jpg" alt="Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-sm text-neutral-300">Hospitality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">{t('section_portfolio')}</h2>
            <a href="#contact" className="text-sm text-neutral-400 hover:text-neutral-200">{t('need_shotlist')}</a>
          </div>
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t('section_services')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { k: 's1', kd: 's1d' },
              { k: 's2', kd: 's2d' },
              { k: 's3', kd: 's3d' },
              { k: 's4', kd: 's4d' },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl border border-neutral-800 p-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="text-lg font-semibold">{t(s.k as any)}</div>
                <p className="mt-1 text-neutral-400 text-sm">{t(s.kd as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t('section_process')}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { n: "01", k: "p1", kd: "p1d" },
              { n: "02", k: "p2", kd: "p2d" },
              { n: "03", k: "p3", kd: "p3d" },
              { n: "04", k: "p4", kd: "p4d" },
            ].map((st, i) => (
              <div key={i} className="rounded-3xl border border-neutral-800 p-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400/70 to-rose-500/70 leading-none">{st.n}</div>
                <div className="mt-3 text-lg font-semibold">{t(st.k as any)}</div>
                <p className="mt-1 text-neutral-400 text-sm">{t(st.kd as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Clients</h2>
            <p className="text-sm text-neutral-400">Selected partners</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {["ACCOR", "Vingroup", "Sun Hospitality", "Marriott", "Amanoi", "InterContinental", "Fusion", "TTC"].map((c) => (
              <div key={c} className="rounded-2xl border border-neutral-800 px-4 py-6 text-center text-neutral-300 bg-white/5">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">{t('section_contact')}</h2>
              <p className="mt-2 text-neutral-400 text-sm max-w-md">{t('contact_hint')}</p>
              <div className="mt-6 space-y-3 text-neutral-300 text-sm">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4"/><span>+84 9x xxx xxxx</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4"/><span>hello@lesonphoto.com</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/><span>Q3, Hồ Chí Minh</span></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Tên / Name" className="rounded-xl bg-white/5 border border-neutral-800 px-3 py-2 placeholder:text-neutral-500" required />
                <input type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-neutral-800 px-3 py-2 placeholder:text-neutral-500" required />
              </div>
              <input placeholder="Số điện thoại / Phone" className="rounded-xl bg-white/5 border border-neutral-800 px-3 py-2 placeholder:text-neutral-500" />
              <textarea placeholder="Mô tả dự án / Project brief" className="rounded-xl bg-white/5 border border-neutral-800 px-3 py-2 placeholder:text-neutral-500 min-h-[140px]" />
              <button type="submit" disabled={sending} className="rounded-xl px-4 py-2 bg-white text-black text-sm">
                {sending ? "Đang gửi..." : t('send_request')}
              </button>
              <p className="text-xs text-neutral-500">Bằng cách gửi form, bạn đồng ý với điều khoản dịch vụ & chính sách bảo mật.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Leson Studios — Architecture & Hospitality Imaging</p>
          <div className="text-xs text-neutral-500">Built with ❤️ · Hybrid style</div>
        </div>
      </footer>
    </div>
  );
}
