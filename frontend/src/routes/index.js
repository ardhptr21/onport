import pagesRoutes from "./pages.routes";
import authRoutes from "./auth.routes";

const routes = [...pagesRoutes, ...authRoutes];

export default routes;
