import routes from "../routes";

const getRoutesName = (name, params) => {
  const route = routes.find((route) => route.name === name);
  const mathing = route.path.match(/:\w+/g);

  if (mathing) {
    mathing.forEach((v) => {
      route.path = route.path.replace(v, params[v.slice(1)]);
    });
  }

  return route;
};

export default getRoutesName;
