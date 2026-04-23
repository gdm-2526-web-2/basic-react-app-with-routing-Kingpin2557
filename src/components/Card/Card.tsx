import Button from "../Button/Button";

type Card = {
  title: String;
  content: String;
  url: string;
};

const Card = ({ title, content, url }: Card) => {
  return (
    <article>
      <header>
        <span>{title}</span>
      </header>

      <div>{content}</div>

      <footer>
        <Button link={url}>Read more</Button>
      </footer>
    </article>
  );
};

export default Card;
