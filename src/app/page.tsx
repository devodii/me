"use client";

import Image from "next/image";
import Photo from "~/photo.jpg";
import Story from "@/markdown/story.mdx";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaMedium } from "react-icons/fa6";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/emmanuelododii",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/devodii",
  },
  {
    name: "Medium",
    icon: FaMedium,
    url: "https://medium.com/@emmanuelodii80",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/devodii",
  },
];

export default function Home() {
  return (
    <section className="py-12 px-6 flex flex-col justify-start items-center gap-5 mx-auto container pb-24">
      <header className="fixed flex items-center gap-2 md:top-4 md:right-4 bottom-4 ">
        <Button asChild>
          <Link
            href="/resume.pdf"
            className="no-underline"
            download="Emmanuel's_Resume.pdf"
          >
            Download Resume
          </Link>
        </Button>
        <Button asChild>
          <Link
            className="no-underline"
            href="mailto:emmanuelodii80@gmail.com?subject=Work Inquiry&body=Hi Emmanuel,"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work with me
          </Link>
        </Button>
      </header>
      <Image
        src={Photo}
        height={200}
        width={200}
        className="rounded-full"
        alt="Emmanuel Odii"
      />
      <h3 className="text-3xl font-semibold">Emmanuel Odii</h3>
      <p className="text-xl">emmanuelodii80@gmail.com</p>

      <div className="[&_a]:underline ">
        <Story />
      </div>

      <ul className="flex gap-4 items-center justify-center mt-1 md:mt-12">
        {links.map(({ icon: Icon, url }) => (
          <li key={url}>
            <Link href={url} target="_blank" className="text-2xl">
              <Icon className="text-2xl" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
