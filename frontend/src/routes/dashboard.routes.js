import Projects from "../pages/dashboard/Projects";
import Skills from "../pages/dashboard/Skills";
import User from "../pages/dashboard/User";
import setTopUrl from "../utils/setTopUrl";

const TOP_URL = "/dashboard";

const dashboardRoutes = [
  {
    name: "user",
    path: "/user",
    exact: false,
    component: User,
    useNavbar: false,
  },
  {
    name: "skills",
    path: "/skills",
    exact: false,
    component: Skills,
    useNavbar: false,
  },
  {
    name: "projects",
    path: "/projects",
    exact: false,
    component: Projects,
    useNavbar: false,
  },
];

export default setTopUrl(dashboardRoutes, TOP_URL);
