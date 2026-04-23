import Heading from "../components/Heading/Heading";
import Nav from "../components/Nav/Nav";

function Home() {
  return (
    <>
      <Nav />
      <Heading level={1}>This is the home page</Heading>
    </>
  );
}

export default Home;
