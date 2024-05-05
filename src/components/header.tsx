import Link from "next/link";

export function Header() {
  return (
    <header className="fixed right-0 left-0 max-w-4xl mx-auto w-full flex items-center justify-between px-4 lg:px-0 bg-main-gray top-0 h-12 md:h-20">
      <Link href="/">@devodii</Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li className="hover:underline hover:underline-offset-2">
            <Link href="/blogs">blogs</Link>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a
              href="https://miniature-acorn-fac.notion.site/CV-Resume-60801a81592e4292ab2a0190e7e3c29c"
              target="_blank"
            >
              resume
            </a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="https://github.com/devodii" target="_blank">
              projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
