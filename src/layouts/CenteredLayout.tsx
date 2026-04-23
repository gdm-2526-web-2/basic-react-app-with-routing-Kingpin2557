import { Outlet } from "react-router";
import "./CenteredLayout.css";

function CenteredLayout() {
  return (
    <main className="container centered">
      <Outlet />
    </main>
  );
}

export default CenteredLayout;
