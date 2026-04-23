import Card from "../components/Card/Card";
import { useLoaderData } from "react-router";

type BasicArticle = {
  id: string;
  title: string;
  summary: string;
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
          url={`/detail/${article.id}`}
        />
      ))}
    </>
  );
}

export default Articles;
