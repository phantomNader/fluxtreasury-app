import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "FluxTreasury",
  description: "Treasury in motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <div className="min-h-screen">
          {/* Top Nav */}
          <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              {/* Logo / Brand */}
             <Link href="/" className="flex items-center gap-2">
 		 <Image
   		 src="/logo.png"    
   		 alt="FluxTreasury Logo"
  		 width={160}
   		 height={40}
   		 className="h-8 w-auto"
 		 />
		</Link>

              {/* Nav Links */}
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link href="/" className="hover:text-teal-300">
                  Dashboard
                </Link>
                <Link href="/accounts" className="hover:text-teal-300">
                  Accounts
                </Link>
                <Link href="/rules" className="hover:text-teal-300">
                  Rules
                </Link>
                <Link href="/transactions" className="hover:text-teal-300">
                  Transactions
                </Link>
              </nav>

              {/* Tagline */}
              <div className="hidden text-[11px] uppercase tracking-[0.28em] text-slate-400 md:block">
                Treasury in motion
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
