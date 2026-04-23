import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { About, Articles, Home, Welcome } from "./pages";
import { NavLayout, CenteredLayout } from "./layouts";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { getData } from "./helpers";

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles",
        loader: async () => getData("./src/data/articles.json"),
        element: <Articles />,
      },
    ],
  },
  {
    element: <CenteredLayout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
