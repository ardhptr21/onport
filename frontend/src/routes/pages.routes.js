import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import setTopUrl from "../utils/setTopUrl";
import setGuestComp from "../utils/setGuestComp";

const TOP_URL = "/";

const pagesRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Home,
    useNavbar: true,
    guest: true,
  },
  {
    name: "portfolio",
    path: "/portfolio/:query",
    component: Portfolio,
    useNavbar: false,
  },
];

export default setGuestComp(setTopUrl(pagesRoutes, TOP_URL));
