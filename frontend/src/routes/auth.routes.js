import Login from "../pages/Login";
import Register from "../pages/Register";
import setTopUrl from "../utils/setTopUrl";

const TOP_URL = "/auth";

const authRoutes = [
  {
    name: "login",
    path: "/login",
    exact: false,
    component: Login,
    useNavbar: false,
  },
  {
    name: "register",
    path: "/register",
    exact: false,
    component: Register,
    useNavbar: false,
  },
];

export default setTopUrl(authRoutes, TOP_URL);
