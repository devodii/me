import Link from "next/link";

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

export const BlogCard = ({ id, title, createdAt }: Props) => {
  return (
    <Link
      className="bg-gray-800 rounded-md w-full px-8 py-4 flex flex-col gap-3 hover:scale-105 hover:duration-150"
      href={`/blogs/${id}`}
    >
      <h3 className="font-medium text-gray-100 md:text-xl">{title}</h3>

      <p className="text-[14px]">{toDateString(createdAt)}</p>
    </Link>
  );
};
