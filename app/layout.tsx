import "./globals.css";
import type { Metadata } from "next";
import { I18nProvider } from "@/components/I18n";

export const metadata: Metadata = {
  title: "Leson Studios — Architecture & Hospitality Imaging",
  description: "Photography for hotels, resorts, architecture and interiors — multi-flash blending, clean HDR, true-to-material colors.",
  openGraph: {
    title: "Leson Studios — Architecture & Hospitality Imaging",
    description: "Photography for hotels, resorts, architecture and interiors — multi-flash blending, clean HDR, true-to-material colors.",
    images: ["/og.jpg"],
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
