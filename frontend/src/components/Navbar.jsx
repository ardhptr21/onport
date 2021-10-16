import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.svg";
import ButtonFill from "./ButtonFill";
import getRoutesName from "../utils/getRouteName";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-8 absolute top-0 w-full">
      <Link to={getRoutesName("home").path}>
        <img src={Logo} alt="ONPORT LOGO" className="w-40" />
      </Link>
      <div className="flex gap-6">
        <Link to={getRoutesName("login").path}>
          <ButtonFill>Login</ButtonFill>
        </Link>
        <Link to={getRoutesName("register").path}>
          <ButtonFill>Register</ButtonFill>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;