import { Link } from "react-router-dom";
import Logo from "../../assets/image/Logo.svg";
import ButtonFill from "../buttons/ButtonFill";
import getRoutesName from "../../utils/getRouteName";
import { useState } from "react";

const Navbar = () => {
  const [scale, setScale] = useState("scale-0");

  return (
    <nav className="flex items-center justify-between px-10 py-8 fixed top-0 w-full backdrop-filter backdrop-blur-lg z-50 border-b-2 border-primary">
      <Link to={getRoutesName("home").path}>
        <img src={Logo} alt="ONPORT LOGO" className="w-40" />
      </Link>

      <button onClick={() => setScale("scale-100")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        className={`flex transform md:flex-row md:static md:w-auto md:p-0 md:h-auto gap-6 flex-col justify-center items-center fixed h-screen w-screen top-0 left-0 bg-white z-50 p-10 duration-200 md:scale-100 ${scale}`}
      >
        <img src={Logo} alt="" className="w-40 md:hidden" />
        <hr className="bg-primary w-full mb-10 md:hidden" />

        <button className="absolute right-10 top-10 md:hidden" onClick={() => setScale("scale-0")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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
