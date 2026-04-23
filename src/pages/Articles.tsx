import Card from "../components/Card/Card";
import { useLoaderData } from "react-router";

type BasicArticle = {
  id: string;
  title: string;
  summary: string;
};

export type Article = BasicArticle & {
  content: string;
  author: string;
  publishedDate: string;
};

function Articles() {
  const articles = useLoaderData();

  return (
    <>
      {articles.map((article: BasicArticle) => (
        <Card
          key={article.id}
          title={article.title}
          content={article.summary}
          url={`/articles/${article.id}`}
        />
      ))}
    </>
  );
}

export default Articles;
