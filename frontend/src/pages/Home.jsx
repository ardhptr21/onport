import ButtonOutline from "../components/buttons/ButtonOutline";
import { Link } from "react-router-dom";
import getRouteName from "../utils/getRouteName";
import FeatureCard from "../components/cards/FeatureCard";
import LogoCreatedWhite from "../assets/image/LogoCreatedWhite.svg";

const Home = () => {
  return (
    <section className="px-10 pb-10">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="lg:text-8xl font-encode-sans md:text-7xl sm:text-6xl text-5xl text-center font-extrabold leading-tight mb-7">
          Build Your Own <br /> Online Portfolio
        </h1>
        <Link to={getRouteName("login").path}>
          <ButtonOutline>LET'S MAKE NOW</ButtonOutline>
        </Link>
        <p className="text-xs mt-3 mb-1">OR</p>
        <Link to={process.env.REACT_APP_DEMO_PROJECT} className="underline text-sm hover:font-bold duration-200">
          SEE DEMO HERE
        </Link>
      </div>

      <FeatureCard
        title="Introduce Yourself"
        description="Who is you? you can describe yourself and added in your portfolio. In this website you can add information to describe yourself, like Your Name, Your Position/Job in your organization, About Yourself, and last but not least is Your Image Profile"
        src="https://i.ibb.co/QNgcfZ6/image.png"
        alt="User info section"
        mb={true}
      />

      <FeatureCard
        title="Show Up Your Skills"
        description="Skills are very important to show others. So you can provide your skills as much as possible in your portfolio, so that other people are interested your skills"
        src="https://i.ibb.co/CV5y7zs/image.png"
        alt="Skills section"
        mirror={true}
        mb={true}
      />

      <FeatureCard
        title="Your Awesome Projects"
        description="Surely you have a awesome projects, right? share your cool and awesome projects with others, this will be proof of the skills you have"
        src="https://i.ibb.co/3Sd6m3D/image.png"
        alt="Projects section"
        mb={true}
      />

      <div className="bg-primary text-white md:px-20 md:py-10 px-10 py-5 flex justify-center flex-col items-center">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-10 mb-10">
          <h2 className="md:text-5xl text-4xl md:text-left text-center capitalize font-bold leading-relaxed">
            Ready to make your own portfolio?
          </h2>
          <Link
            to={getRouteName("login").path}
            className="md:w-1/2 w-full text-center inline-block bg-white py-5 text-primary font-bold text-xl hover:bg-gray-300"
          >
            MAKE IT NOW
          </Link>
        </div>

        <a href="https://github.com/ardhptr21" target="_blank" rel="noreferrer">
          <img src={LogoCreatedWhite} className="w-40" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Home;
