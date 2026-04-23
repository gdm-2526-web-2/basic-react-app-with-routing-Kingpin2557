import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { About, Articles, Detail, Home, Landing } from "./pages";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/details",
    element: <Detail />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
