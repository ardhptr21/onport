import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LogoWhite from "../../assets/image/LogoWhite.svg";
import useAxios from "../../hooks/useAxios";
import getUserInfo from "../../utils/getUserInfo";
import LinkSidebar from "../links/LinkSidebar";
import ToggleSidebar from "./ToggleSidebar";

const Sidebar = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [username, setUsername] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const axios = useAxios();

  const handlePortfolioLinkClick = async (e) => {
    e.preventDefault();

    try {
      const {
        data: { data: user },
      } = await axios.get(`/user/${getUserInfo().userId}`);
      setUsername(user.username);
      setIsRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isRedirect) {
    return <Redirect to={`/portfolio/${username}`} />;
  }

  return (
    <>
      <div className="w-64 h-screen hidden md:block"></div>
      <ToggleSidebar setIsToggle={setIsToggle} isToggle={isToggle} />
      <div
        className={`w-64 h-screen bg-primary fixed z-50 transform md:transform-none transition duration-500 ${
          isToggle ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center">
          <img className="h-8 mt-10 block" src={LogoWhite} alt="White Logo ONPORT" />
        </div>
        <nav className="mt-10">
          <LinkSidebar text="User" route="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </LinkSidebar>
          <LinkSidebar text="Skills" route="skills">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </LinkSidebar>
          <LinkSidebar text="Projects" route="projects">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </LinkSidebar>
          <LinkSidebar
            text="Your Portfolio"
            route="portfolio"
            params={{ query: getUserInfo()?.username }}
            click={handlePortfolioLinkClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </LinkSidebar>
          <Link
            to="/auth/logout"
            className="flex justify-center text-white hover:text-gray-300 items-center gap-2 cursor-pointer select-none absolute bottom-10 left-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <p className="font-bold">Logout</p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
