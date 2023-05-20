import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./config/router/routes";

const router = createBrowserRouter(routes);
hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);
