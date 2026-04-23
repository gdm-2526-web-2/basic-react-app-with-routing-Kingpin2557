import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { About, Articles, Detail, Home, Welcome } from "./pages";
import { NavLayout, CenteredLayout, SidebarLayout } from "./layouts";
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
        element: <SidebarLayout />,
        children: [
          {
            path: "/articles",
            loader: async () => getData("./src/data/articles.json"),
            element: <Articles />,
          },
          {
            path: "/articles/:slug",
            loader: async ({ params }) =>
              getData("./src/data/articles.json", params.slug),
            element: <Detail />,
          },
        ],
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
