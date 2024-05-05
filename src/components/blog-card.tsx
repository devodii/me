interface Props {
  id: string;
  title: string;
  link: string;
  content?: string;
  createdAt: number;
}

const toDateString = (date: number) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

export const BlogCard = ({ title, link, createdAt }: Props) => {
  return (
    <a
      className="bg-gray-800 rounded-md w-full px-8 py-4 flex flex-col gap-3 hover:scale-105 hover:duration-150"
      target="_blank"
      href={link}
    >
      <h3 className="font-medium text-gray-100 md:text-xl">{title}</h3>

      <p className="text-[14px]">{toDateString(createdAt)}</p>
    </a>
  );
};
