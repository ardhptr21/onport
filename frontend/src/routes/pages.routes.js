import Home from "../pages/Home";
import setTopUrl from "../utils/setTopUrl";

const TOP_URL = "/";

const pagesRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Home,
  },
];

export default setTopUrl(pagesRoutes, TOP_URL);
