import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.svg";
import ButtonFill from "./ButtonFill";
import getRoutesName from "../utils/getRouteName";
import getUserId from "../utils/getUserId";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import UserNav from "./UserNav";

const Navbar = () => {
  const axios = useAxios();
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: user },
        } = await axios.get(`/user/${getUserId()}`);
        setUser(user);
      } catch (err) {
        console.error(err);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex items-center justify-between px-10 py-8 absolute top-0 w-full">
      <Link to={getRoutesName("home").path}>
        <img src={Logo} alt="ONPORT LOGO" className="w-40" />
      </Link>

      {/* not authenticated */}
      {!getUserId() && (
        <div className="flex gap-6">
          <Link to={getRoutesName("login").path}>
            <ButtonFill>Login</ButtonFill>
          </Link>
          <Link to={getRoutesName("register").path}>
            <ButtonFill>Register</ButtonFill>
          </Link>
        </div>
      )}

      {/* authenticated */}
      {getUserId() && <UserNav name={user.name} photo={user.photo} />}
    </nav>
  );
};

export default Navbar;
