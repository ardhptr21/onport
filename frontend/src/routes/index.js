import pagesRoutes from "./pages.routes";
import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";
import emailRoutes from "./email.routes";

const routes = [...pagesRoutes, ...authRoutes, ...dashboardRoutes, ...emailRoutes];

export default routes;
