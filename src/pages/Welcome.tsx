import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";

function Welcome() {
  return (
    <article>
      <Heading>Welkom op onze app!</Heading>

      <Button link="/">Start met ontdekken</Button>
    </article>
  );
}

export default Welcome;
