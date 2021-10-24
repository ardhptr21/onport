import Auth from "../components/middlewares/Auth";

const setAuthComp = (routes) => {
  const newRoutes = routes.map((route) => {
    if (route.auth) {
      const newComp = () => <Auth Component={route.component} />;
      return { ...route, component: newComp };
    }

    return route;
  });

  return newRoutes;
};

export default setAuthComp;
