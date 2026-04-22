import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Content from "./components/Content/Content";
import Heading from "./components/Heading/Heading";
import Line from "./components/Line/Line";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Section>
          <Heading level={1}>Welcome to Artevelde University College!</Heading>

          <Content>
            <p>This is some starter code for a React application.</p>
            <p>Here you have an overview of the components available.</p>
            <p>
              Let's create an application showing some cards, add basic routing
              and state management.
            </p>
          </Content>
        </Section>

        <Line />

        <Section>
          <Heading level={2}>Available components</Heading>

          <ul>
            <li>
              <strong>Nav</strong>: a navigation bar with a logo and some links.
              <Nav />
            </li>
            <li>
              <strong>Section</strong>: a wrapper for the main sections of the
              page.
              <Section>
                <p>This is a section.</p>
              </Section>
            </li>
            <li>
              <strong>Heading</strong>: a component for rendering headings of
              different levels.
              <Heading level={3}>This is a heading level 3</Heading>
            </li>
            <li>
              <strong>Content</strong>: a wrapper for the main content of the
              page, with some basic styling.
              <Content>
                <p>This is some content.</p>
              </Content>
            </li>
            <li>
              <strong>Button</strong>: a component for rendering buttons with
              different styles.
              <Button link="#" type="primary">
                This is a button
              </Button>
              <Button link="#" type="secondary">
                This is a secondary button
              </Button>
            </li>
            <li>
              <strong>Card</strong>: a component for rendering cards with an
              image, title and description.
              <i>Props still needs to be defined!</i>
              <Card />
            </li>
          </ul>
        </Section>
      </main>
    </>
  );
}

export default App;
