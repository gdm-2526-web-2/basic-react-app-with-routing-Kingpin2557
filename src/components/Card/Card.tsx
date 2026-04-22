import Button from "../Button/Button";

const Card = () => {
  return (
    <article>
      <header>
        <span>Dit is een titel</span>
      </header>

      <div>
        Dit is de inhoud van een card. Hier komt er steeds wat verschillende
        tekst.
      </div>

      <footer>
        <Button link="/link">Link</Button>
      </footer>
    </article>
  );
};

export default Card;
