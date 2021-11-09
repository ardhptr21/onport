import PortfolioSection from "../components/PortfolioSection";
import SkillItem from "../components/SkillItem";
import CardProject from "../components/CardProject";
import LogoWhite from "../assets/image/LogoWhite.svg";
import SquareLogo from "../assets/image/SquareLogo.svg";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingDark from "../components/loading/LoadingDark";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const axios = useAxios();
  const params = useParams();

  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: user },
        } = await axios.get(`/user/${params.query}`);
        const {
          data: { data: profile },
        } = await axios.get(`/profile/${params.query}`);

        setUser(user);
        setProfile(profile);
      } catch ({ response }) {
        !response.data.success && setRedirect(true);
      } finally {
        setIsLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (redirect) return <Redirect to="/" />;

  if (isLoading) return <LoadingDark />;

  return (
    <>
      <header>
        <div className="bg-primary h-56 relative">
          <img
            className="rounded-full md:h-60 h-52 md:w-60 w-52 object-cover bg-red-400 absolute right-1/2 top-1/2 transform translate-x-1/2"
            src={user.photo || SquareLogo}
            alt="people"
          />
        </div>
        <div className="mt-36 text-center">
          <h1 className="font-encode-sans md:text-7xl text-5xl font-extrabold">{user.name}</h1>
          <p className="md:text-xl text-lg text-secondary mt-2">{user.position}</p>
        </div>
      </header>

      <PortfolioSection title="About me">
        <p className="md:w-2/3 md:text-left text-center md:text-lg text-base text-secondary">{user.about}</p>
      </PortfolioSection>

      <PortfolioSection title="My Skills">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
          {profile.skills?.map((skill) => (
            <SkillItem name={skill.name} key={skill.id} />
          ))}
        </div>
      </PortfolioSection>

      <PortfolioSection title="My Projects">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {profile.projects?.map((project) => (
            <CardProject title={project.title} description={project.description} url={project.url} />
          ))}
        </div>
      </PortfolioSection>

      <footer className="w-full h-28 bg-primary text-white flex flex-col gap-2 items-center justify-center">
        <h4>Powered by</h4>
        <Link to="/">
          <img src={LogoWhite} alt="Onport Logo White" className="h-10" />
        </Link>
      </footer>
    </>
  );
};

export default Portfolio;
