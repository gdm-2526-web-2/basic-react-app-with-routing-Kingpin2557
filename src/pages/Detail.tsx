import { useLoaderData } from "react-router";
import Heading from "../components/Heading/Heading";
import Line from "../components/Line/Line";

function Detail() {
  const article = useLoaderData();

  return (
    <article>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading level={3}>{article.title}</Heading>
        <time dateTime={article.publishedDate}>{article.publishedDate}</time>
      </div>
      <i>{article.summary}</i>
      <Line />
      <p>{article.content}</p>

      <cite>{article.author}</cite>
    </article>
  );
}

export default Detail;
