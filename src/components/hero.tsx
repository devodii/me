"use client";
import {
  GithubLogo,
  MediumLogo,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const links = [
  { icon: GithubLogo, href: "https://github.com/devodii" },
  { icon: MediumLogo, href: "https://medium.com/@emmanuelodii80" },
  { icon: TwitterLogo, href: "https://twitter.com/devodii_" },
  { icon: LinkedinLogo, href: "https://www.linkedin.com/in/emmanuelodii/" },
];
export function Hero() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl lg:text-6xl font-bold">Full stack developer</h1>
      <span className="text-lg">
        Hey there! I&apos;m Emmanuel, a self-taught full-stack developer eager
        to learn and build.
      </span>

      <div className="flex flex-wrap items-center gap-4 opacity-90 mt-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href.replaceAll(" ", "")}
            className="cursor-pointer hover:-translate-y-1 duration-300"
            target="_blank"
          >
            <link.icon size={32} className="opacity-70" />
          </Link>
        ))}
      </div>
    </div>
  );
}
