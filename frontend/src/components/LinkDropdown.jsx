import getRouteName from "../utils/getRouteName";
import { Link } from "react-router-dom";

const LinkDropdown = ({ route, text, children, params }) => {
  return (
    <Link
      to={getRouteName(route, params).path}
      className="w-full flex items-center justify-start gap-3 p-4 hover:text-white hover:bg-primary"
    >
      {children}
      {text}
    </Link>
  );
};

export default LinkDropdown;
