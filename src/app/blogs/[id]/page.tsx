import { getArticles } from "@/action/articles";
import { Back } from "@/components/back";

interface Props {
  params: {
    id: string;
  };
}

export default async function BlogViewPage({ params }: Props) {
  const url = `https://medium.com/p/${params.id}`;

  const articles = await getArticles();

  const article = articles?.items.find((el) => el.id === url);

  return (
    <section className="my-24 space-y-6">
      <div className="flex items-center gap-3">
        <Back />
        <h3 className="font-medium text-gray-100 text-2xl">{article.title}</h3>
      </div>
      <article
        className="space-y-2 [&>_figure>_img]:rounded-md [&>_figure>_img]:mx-auto [&>_figure>_figcaption]:text-center [&>_figure]:py-6 [&>_a]:underline [&>_a>_em]:underline [&>_h4]:text-xl  [&>_h4]:font-semibold"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </section>
  );
}
