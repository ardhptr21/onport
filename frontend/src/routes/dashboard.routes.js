import Projects from "../pages/dashboard/Projects";
import Skills from "../pages/dashboard/Skills";
import User from "../pages/dashboard/User";
import setTopUrl from "../utils/setTopUrl";
import setAuthComp from "../utils/setAuthComp";

const TOP_URL = "/dashboard";

const dashboardRoutes = [
  {
    name: "user",
    path: "/user",
    exact: false,
    component: User,
    useNavbar: false,
    auth: true,
  },
  {
    name: "skills",
    path: "/skills",
    exact: false,
    component: Skills,
    useNavbar: false,
    auth: true,
  },
  {
    name: "projects",
    path: "/projects",
    exact: false,
    component: Projects,
    useNavbar: false,
    auth: true,
  },
];

export default setAuthComp(setTopUrl(dashboardRoutes, TOP_URL));
