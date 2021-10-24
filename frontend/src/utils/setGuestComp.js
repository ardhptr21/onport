import Guest from "../components/middlewares/Guest";

const setGuestComp = (routes) => {
  const newRoutes = routes.map((route) => {
    if (route.guest) {
      const newComp = () => <Guest Component={route.component} />;
      return { ...route, component: newComp };
    }

    return route;
  });

  return newRoutes;
};

export default setGuestComp;
