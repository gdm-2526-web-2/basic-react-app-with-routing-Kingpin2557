import Heading from "../components/Heading/Heading";
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
    <div className="grid">
      <aside>
        <Heading level={1}>Let op deze artikels zijn gemaakt met AI</Heading>
      </aside>

      <section>
        {articles.map((article: BasicArticle) => (
          <Card
            key={article.id}
            title={article.title}
            content={article.summary}
            url={`/details/${article.id}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Articles;
