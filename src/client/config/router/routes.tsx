// import { About } from "client/views/About";
// import { Home, loader as HomeLoader } from "client/views/Home";
import loadable from "@loadable/component";

const Home = loadable(() => import("../../views/Home"));
const About = loadable(() => import("../../views/About"));

export const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
];
