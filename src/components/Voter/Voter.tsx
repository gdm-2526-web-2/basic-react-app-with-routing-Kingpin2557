import { useState } from "react";
import EventButton from "../EventButton/EventButton";

type Votes = {
  [key in (typeof courses)[number]["id"]]: number;
};

type Course = {
  id: string;
  label: string;
  kind: "primary" | "secondary";
};

const courses: Course[] = [
  {
    id: "web-2",
    label: "Web 2",
    kind: "primary",
  },
  {
    id: "dev-2",
    label: "Dev 2",
    kind: "secondary",
  },
  {
    id: "tech-2",
    label: "Tech 2",
    kind: "secondary",
  },
];

const defaultVotes = {
  "dev-2": 0,
  "tech-2": 0,
  "web-2": 0,
};

function Voter() {
  const [votes, setVotes] = useState<Votes>(defaultVotes);

  const handleVoting = (id: string) => {
    setVotes({
      ...votes,
      [id]: votes[id] + 1,
    });
  };

  const getTotalVotes = () => {
    return Object.values(votes).reduce((total, value) => total + value, 0);
  };

  return (
    <>
      <div className="grid">
        {courses.map((course) => (
          <article key={course.id}>
            <header>{course.id}</header>
            <p>
              Votes: <span>{votes[course.id]}</span>
            </p>
            <EventButton
              label={`Vote for ${course.label}`}
              kind={course.kind}
              onClick={() => handleVoting(course.id)}
            />
          </article>
        ))}
      </div>
      <aside>
        Total votes: <span>{getTotalVotes()}</span>
      </aside>
    </>
  );
}

export default Voter;
