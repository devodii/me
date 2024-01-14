export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <div>@devodii</div>

      <nav>
        <ul className="flex gap-4 items-center">
           <li className="hover:underline hover:underline-offset-2">
            <a href="https://miniature-acorn-fac.notion.site/CV-Resume-60801a81592e4292ab2a0190e7e3c29c" target="_blank">
              resume
            </a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="https://medium.com/@emmanuelodii80" target="_blank">
              blog
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
