import Login from "../pages/Login";
import Register from "../pages/Register";
import setTopUrl from "../utils/setTopUrl";
import setGuestComp from "../utils/setGuestComp";
import Logout from "../pages/Logout";

const TOP_URL = "/auth";

const authRoutes = [
  {
    name: "login",
    path: "/login",
    exact: false,
    component: Login,
    useNavbar: false,
    guest: true,
  },
  {
    name: "register",
    path: "/register",
    exact: false,
    component: Register,
    useNavbar: false,
    guest: true,
  },
  {
    name: "logout",
    path: "/logout",
    exact: false,
    component: Logout,
    useNavbar: false,
  },
];

export default setGuestComp(setTopUrl(authRoutes, TOP_URL));
