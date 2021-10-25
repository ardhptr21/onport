import PortfolioSection from "../components/PortfolioSection";
import SkillItem from "../components/SkillItem";
import CardProject from "../components/CardProject";
import LogoWhite from "../assets/image/LogoWhite.svg";
import SquareLogo from "../assets/image/SquareLogo.svg";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const axios = useAxios();
  const params = useParams();

  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: user },
        } = await axios.get(`/user/${params.id}`);
        const {
          data: { data: profile },
        } = await axios.get(`/profile/${params.id}`);

        setUser(user);
        setProfile(profile);
      } catch ({ response }) {
        !response.data.success && setRedirect(true);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (redirect) return <Redirect to="/" />;

  return (
    <>
      <header>
        <div className="bg-primary h-56 relative">
          <img
            className="rounded-full h-60 w-60 object-cover bg-red-400 absolute right-1/2 top-1/2 transform translate-x-1/2"
            src={user.photo || SquareLogo}
            alt="people"
          />
        </div>
        <div className="mt-36 text-center">
          <h1 className="font-encode-sans text-7xl font-extrabold">{user.name}</h1>
          <p className="text-xl text-secondary mt-2">{user.position}</p>
        </div>
      </header>

      <PortfolioSection title="About me">
        <p className="w-2/3 text-lg text-secondary">{user.about}</p>
      </PortfolioSection>

      <PortfolioSection title="My Skills">
        <div className="grid grid-cols-3 gap-10">
          {profile.skills?.map((skill) => (
            <SkillItem name={skill.name} key={skill.id} />
          ))}
        </div>
      </PortfolioSection>

      <PortfolioSection title="My Projects">
        <div className="grid grid-cols-2 gap-10">
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
