"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "vi" | "en";

type Dict = Record<string, Record<Lang, string>>;

const dict: Dict = {
  tagline: { vi: "Architecture & Hospitality Imaging", en: "Architecture & Hospitality Imaging" },
  hero_h1_line1: { vi: "Ảnh kiến trúc & nội thất", en: "Architecture & Interior Photography" },
  hero_h1_line2: { vi: "chuẩn quảng cáo", en: "built for ads & conversion" },
  hero_desc: {
    vi: "Tập trung ánh sáng đúng — màu vật liệu chính xác — bối cảnh kể chuyện. Workflow blend multi‑flash + HDR chuẩn quốc tế.",
    en: "Precise light shaping, true-to-material colors, narrative composition. Multi‑flash blending + clean HDR, international standard."
  },
  cta_portfolio: { vi: "Xem portfolio", en: "View portfolio" },
  cta_process: { vi: "Quy trình làm việc", en: "Our process" },
  nav_portfolio: { vi: "Portfolio", en: "Portfolio" },
  nav_services: { vi: "Dịch vụ", en: "Services" },
  nav_process: { vi: "Quy trình", en: "Process" },
  nav_clients: { vi: "Khách hàng", en: "Clients" },
  nav_contact: { vi: "Liên hệ", en: "Contact" },
  section_portfolio: { vi: "Portfolio chọn lọc", en: "Selected portfolio" },
  need_shotlist: { vi: "Cần shotlist riêng? Liên hệ →", en: "Need a bespoke shotlist? Contact →" },
  section_services: { vi: "Dịch vụ cốt lõi", en: "Core services" },
  s1: { vi: "Hotel / Resort", en: "Hotel / Resort" },
  s1d: { vi: "Chụp phòng, F&B, amenities, trải nghiệm khách tăng tỉ lệ đặt phòng.", en: "Rooms, F&B, amenities, guest experience to lift booking rates." },
  s2: { vi: "Architecture", en: "Architecture" },
  s2d: { vi: "Ngoại thất, nội thất, facade — nhấn chất liệu & ánh sáng đúng thực tế.", en: "Exterior, interior, facade — emphasize materials & authentic light." },
  s3: { vi: "Retouch Pro", en: "Pro Retouch" },
  s3d: { vi: "Blend multi-flash, HDR sạch, giữ màu vật liệu — tiêu chuẩn quảng cáo.", en: "Multi‑flash blending, clean HDR, true color — advertising grade." },
  s4: { vi: "Video & Social", en: "Video & Social" },
  s4d: { vi: "Reel/Shorts hậu trường, cinematic clip tăng reach & conversion.", en: "BTS reels/shorts, cinematic clips for reach & conversion." },
  section_process: { vi: "Quy trình làm việc", en: "Process" },
  p1: { vi: "Khảo sát & Creative Brief", en: "Discovery & Creative Brief" },
  p1d: { vi: "Xác định USP, shotlist theo mục tiêu marketing.", en: "Define USP and shotlist aligned to marketing goals." },
  p2: { vi: "Prelight & Shooting", en: "Prelight & Shooting" },
  p2d: { vi: "Set ánh sáng khoa học (multi‑flash), canh giờ vàng & bố cục sạch.", en: "Scientific lighting (multi‑flash), golden hour timing & clean comps." },
  p3: { vi: "Retouch & Review", en: "Retouch & Review" },
  p3d: { vi: "Blend ánh sáng, cân màu vật liệu, proofing với brand team.", en: "Blend lights, balance material colors, proofing with brand team." },
  p4: { vi: "Bàn giao & Triển khai", en: "Delivery & Rollout" },
  p4d: { vi: "Export đa kênh (web/OTA/print), guideline & SEO cơ bản.", en: "Multi‑channel export (web/OTA/print), usage guideline & basic SEO." },
  section_clients: { vi: "Đối tác tin cậy", en: "Trusted clients" },
  section_contact: { vi: "Nhận báo giá & lịch chụp", en: "Get a quote & schedule" },
  contact_hint: {
    vi: "Mô tả ngắn nhu cầu, số phòng/không gian, deadline & mục tiêu truyền thông.",
    en: "Tell us rooms/spaces count, deadline and marketing objectives."
  },
  send_request: { vi: "Gửi yêu cầu", en: "Send request" },
  quote: { vi: "Nhận báo giá", en: "Get quote" },
};

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof typeof dict) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  const t = (k: keyof typeof dict) => dict[k][lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
