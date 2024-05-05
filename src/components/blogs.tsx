import { getArticles } from "@/action/articles";
import { BlogCard } from "@/components/blog-card";

export const Blogs = async () => {
  const articles = await getArticles();

  return (
    <ul className="grid grid-cols-1 gap-4">
      {articles?.items.map((article) => (
        <li key={article.id}>
          <BlogCard
            id={article.id.split("/p/")[1]}
            title={article.title}
            createdAt={article.created}
            link={article.link}
          />
        </li>
      ))}
    </ul>
  );
};
