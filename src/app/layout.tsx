import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ali Rahmoune – Portfolio",
  description: "C/C++ and DevOps Developer in Luxembourg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className="bg-zinc-950 text-zinc-100 antialiased"
        suppressHydrationWarning
      >
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
          <div className="mx-auto max-w-5xl px-4 py-6">
            <header className="mb-12 flex items-center justify-between border-b border-zinc-800 pb-6">
              <Link href="/" className="text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors">
                Ali Rahmoune
              </Link>
              <nav className="flex gap-6 text-sm">
                <Link href="/projects" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Projects
                </Link>
                <Link href="/experience" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Experience
                </Link>
                <Link href="/education" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Education
                </Link>
              </nav>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
