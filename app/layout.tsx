import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FluxTreasury",
  description: "Modern treasury dashboard for tokenized assets and cash management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
