import { loadableReady } from "@loadable/component";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./config/router/routes";

loadableReady(() => {
  const router = createBrowserRouter(routes);
  hydrateRoot(
    document.getElementById("root"),
    <RouterProvider router={router} />
  );
});
