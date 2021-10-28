import ButtonOutline from "../components/ButtonOutline";
import { Link } from "react-router-dom";
import getRouteName from "../utils/getRouteName";
import getUserId from "../utils/getUserId";

const Home = () => {
  return (
    <section className="px-10 font-encode-sans flex flex-col justify-center items-center h-screen">
      <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-center font-extrabold leading-tight mb-7">
        Build Your Own <br /> Online Portfolio
      </h1>
      <Link to={getRouteName("login").path}>
        <ButtonOutline>{getUserId() ? "GO TO DASHBOARD" : "LET'S MAKE NOW"} </ButtonOutline>
      </Link>
      {!getUserId() && (
        <>
          <p className="text-xs mt-3 mb-1">OR</p>
          <Link to={process.env.REACT_APP_DEMO_PROJECT} className="underline text-sm hover:font-bold duration-200">
            SEE DEMO HERE
          </Link>
        </>
      )}
    </section>
  );
};

export default Home;
