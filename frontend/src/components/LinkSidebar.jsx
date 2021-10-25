import { Link } from "react-router-dom";
import getActiveURL from "../utils/getActiveURL";
import getRoutesName from "../utils/getRouteName";

const LinkSidebar = ({ children, text, route, params }) => {
  return (
    <Link className={"sidebar-link" + getActiveURL(route)} to={getRoutesName(route, params).path}>
      {children}
      <span className="mx-4 font-medium hidden md:block">{text}</span>
    </Link>
  );
};

export default LinkSidebar;
