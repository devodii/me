import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Emmanuel Odii",
  description: "Full stack developer & Builder in public",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`bg-white/90 text-black/90 text-md`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
