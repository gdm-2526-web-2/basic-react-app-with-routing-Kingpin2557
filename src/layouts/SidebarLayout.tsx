import { Outlet } from "react-router";
import Heading from "../components/Heading/Heading";

function SidebarLayout() {
  return (
    <div className="grid">
      <aside>
        <Heading level={1}>Let op deze artikels zijn gemaakt met AI</Heading>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default SidebarLayout;
