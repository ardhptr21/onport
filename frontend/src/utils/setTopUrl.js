const setTopUrl = (routes, top_url) => {
  const newRoutes = routes.map((route) => ({ ...route, path: top_url === "/" ? route.path : top_url + route.path }));
  return newRoutes;
};

export default setTopUrl;
