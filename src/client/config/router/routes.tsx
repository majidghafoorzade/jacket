import { About } from "client/views/About";
import { Home, loader as HomeLoader } from "client/views/Home";

export const routes = [
  {
    path: "/",
    loader: HomeLoader,
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
];
