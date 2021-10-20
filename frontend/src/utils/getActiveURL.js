const getActiveURL = (expect) => {
  const path = window.location.pathname.split("/");
  const activeURL = path[path.length - 1];

  return activeURL === expect ? " active" : "";
};

export default getActiveURL;
