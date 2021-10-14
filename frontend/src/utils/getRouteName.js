import routes from "../routes";

const getRoutesName = (name) => {
  const route = routes.find((route) => route.name === name);
  return route;
};

export default getRoutesName;
