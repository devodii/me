import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import * as React from "react";
import "./globals.css";
import { Layout } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Emmanuel Odii",
  description: "Full stack developer & Builder in public",
};

const font = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-main-gray text-white opacity-90`}>
        <Layout>{props.children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
