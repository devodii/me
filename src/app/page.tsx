"use client"

import { Button } from "@/components/ui/button"
import Story from "@/markdown/story.mdx"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FaLinkedin, FaMedium } from "react-icons/fa6"
import Photo from "~/photo.jpg"

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
]

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-start gap-5 px-6 py-12 pb-24">
      <header className="fixed bottom-4 flex items-center gap-2 md:right-4 md:top-4 md:items-start">
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

      <div className="[&_a]:underline">
        <Story />
      </div>

      <ul className="mt-1 flex items-center justify-center gap-4 md:mt-12">
        {links.map(({ icon: Icon, url }) => (
          <li key={url}>
            <Link href={url} target="_blank" className="text-2xl">
              <Icon className="text-2xl" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
