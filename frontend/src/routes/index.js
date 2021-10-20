import pagesRoutes from "./pages.routes";
import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";

const routes = [...pagesRoutes, ...authRoutes, ...dashboardRoutes];

export default routes;
