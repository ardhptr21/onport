import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import setTopUrl from "../utils/setTopUrl";

const TOP_URL = "/";

const pagesRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Home,
    useNavbar: true,
  },
  {
    name: "portfolio",
    path: "/portfolio/:id",
    component: Portfolio,
    useNavbar: false,
  },
];

export default setTopUrl(pagesRoutes, TOP_URL);
