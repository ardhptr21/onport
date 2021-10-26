import Logo from "../assets/image/Logo.svg";
import { Link } from "react-router-dom";
import getRouteName from "../utils/getRouteName";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Logout = () => {
  useEffect(() => {
    try {
      Cookies.remove("token");
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  return (
    <section className="flex flex-col h-screen justify-center gap-10 items-center">
      <img src={Logo} className="w-40" alt="ONPORT LOGO" />
      <div className="bg-primary p-10 w-full flex flex-col justify-center items-center gap-5 text-white">
        <h1 className="sm:text-8xl text-5xl text-center font-extrabold">Logged Out</h1>
        <hr className="bg-white h-1 w-full mt-5" />
        <p className="sm:text-xl">Successfully logged out, thank you!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link className="bg-white text-primary px-6 py-3 font-bold uppercase hover:bg-gray-200" to="/">
            Back to home
          </Link>
          <Link
            className="bg-white text-primary px-6 py-3 font-bold uppercase hover:bg-gray-200"
            to={getRouteName("login").path}
          >
            Login again
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Logout;
