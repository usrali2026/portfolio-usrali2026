import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-zinc-50 text-black antialiased">
        {children}
      </body>
    </html>
  );
}
