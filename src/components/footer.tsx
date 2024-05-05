import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const links = [
  { icon: FaGithub, href: "https://github.com/devodii" },
  { icon: FaMedium, href: "https://medium.com/@emmanuelodii80" },
  { icon: FaTwitter, href: "https://twitter.com/devodii_" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/emmanuelodii/" },
];

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 h-12 md:h-20 bg-main-gray  w-full max-w-4xl flex items-center justify-between px-6">
      <div>Emmanuel Odii © {date}</div>

      <ul className="flex gap-2 items-center">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href.replaceAll(" ", "")}
            className="cursor-pointer hover:-translate-y-1 duration-300"
            target="_blank"
          >
            <link.icon size={24} />
          </a>
        ))}
      </ul>
    </footer>
  );
}
