# Leson Studios — Hybrid Landing (Next.js + Tailwind, VI/EN)

This is a bilingual (VI/EN) landing page skeleton for architecture & hospitality photography.

## 🔧 Tech
- Next.js 14 (App Router)
- TailwindCSS
- framer-motion, lucide-react
- Simple in-app i18n toggle (no external lib)

## 📁 Structure
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  I18n.tsx
  Nav.tsx
  PortfolioGrid.tsx
data/
  portfolio.ts
public/
  logo.svg
  portfolio/
    01.jpg ... 06.jpg  (placeholders — replace with your real shots)
```

## 🖼️ Replace Logo & Photos
- Put your logo file at `public/logo.svg` (or `logo.png` and update img src in `components/Nav.tsx`).
- Drop your photos into `public/portfolio/` and update paths/titles in `data/portfolio.ts`.

## 📝 Edit Text
- Most VI/EN strings live in `components/I18n.tsx` dictionary.
- Add new keys there and use `t('key')` in components.

## ▶️ Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 🚀 Deploy (Vercel)
1. Create a GitHub repo (e.g. `leson-studios-hybrid`).
2. Upload these files to the repo (drag & drop on GitHub → **Commit changes**).
3. Go to https://vercel.com → **New Project** → Import the repo → **Deploy**.
4. Get a URL like `https://leson-studios-hybrid.vercel.app`

## 🔁 Auto updates
Every push to GitHub triggers a new deployment on Vercel.

---

### FAQ
**Q: How to add a new gallery album?**  
Create another array in `data/portfolio.ts` and render with `<PortfolioGrid items={yourItems} />`.

**Q: Where to add meta/OG tags?**  
`app/layout.tsx` in the `metadata` export. Update `metadataBase` to your real domain.

**Q: Can I use remote image URLs?**  
Yes. Set `cover` as a full URL in `data/portfolio.ts`.

**Q: Form submission?**  
This demo form is UI-only. For real submissions, connect a service (Formspree, Basin) or add an API route.
