const projects = [
  {
    name: "Tarot Master",
    description: "AI enhanced astrology precisions",
    link: "https://tarotmaster.ai",
  },
  {
    name: "Task Manager",
    description: "The open source linear alternative",
    link: "https://dub.sh/tm-app",
  },
];

export default function ProjectsPage() {
  return (
    <section className="my-12 md:my-24">
      <ul className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <li
            key={project.name}
            className="border border-gray-500 rounded-md p-6"
          >
            <a
              href={project.link}
              target="_blank"
              className="flex flex-col gap-2"
            >
              <span className="font-medium text-[20px]">{project.name}</span>
              <span className="text-gray-200">{project.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
