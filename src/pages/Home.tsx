import Heading from "../components/Heading/Heading";
import Voter from "../components/Voter/Voter";

function Home() {
  return (
    <>
      <Heading level={1}>Welkom bij IMD!</Heading>
      <Voter />
    </>
  );
}

export default Home;
