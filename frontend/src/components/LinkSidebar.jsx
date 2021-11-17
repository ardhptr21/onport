import { Link } from "react-router-dom";
import getActiveURL from "../utils/getActiveURL";
import getRoutesName from "../utils/getRouteName";

const LinkSidebar = ({ children, text, route, params, click }) => {
  return (
    <Link className={"sidebar-link" + getActiveURL(route)} to={getRoutesName(route, params).path} onClick={click}>
      {children}
      <span className="mx-4 font-medium block">{text}</span>
    </Link>
  );
};

export default LinkSidebar;
