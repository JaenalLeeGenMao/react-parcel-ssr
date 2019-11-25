import Home from "~/containers/Home";
import About from "~/containers/About";
import User from "~/containers/User";
import NotFound from "~/containers/NotFound";

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/about", component: About },
  { path: "/user", component: User },
  { path: "/NotFound", component: NotFound }
];

export default routes;
