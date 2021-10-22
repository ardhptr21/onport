import PortfolioSection from "../components/PortfolioSection";
import SkillItem from "../components/SkillItem";
import CardProject from "../components/CardProject";
import LogoWhite from "../assets/image/LogoWhite.svg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <header>
        <div className="bg-primary h-56 relative">
          <img
            className="rounded-full h-60 w-60 object-cover bg-red-400 absolute right-1/2 top-1/2 transform translate-x-1/2"
            src="https://miro.medium.com/max/500/0*xkJgg-6HskYrQ3N7.jpeg"
            alt="people"
          />
        </div>
        <div className="mt-36 text-center">
          <h1 className="font-encode-sans text-7xl font-extrabold">Evan You</h1>
          <p className="text-xl text-secondary mt-2">VueJS Developer</p>
        </div>
      </header>

      <PortfolioSection title="About me">
        <p className="w-2/3 text-lg text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet facilis dolor reprehenderit neque, id
          assumenda iure et eaque nisi cumque placeat accusamus odio nesciunt, impedit, ea voluptatem rerum accusantium
          molestias dolore! Nobis quae ipsum tenetur, delectus rerum nemo nostrum, distinctio veritatis quia nesciunt
          nihil odio maiores ducimus in fugiat autem aliquam eos optio, vel explicabo modi! Nihil, optio voluptatum.
          Blanditiis perspiciatis, fuga dignissimos odit voluptas hic eaque a et ullam asperiores repudiandae magnam
          nobis, sit dolorum neque, explicabo possimus!
        </p>
      </PortfolioSection>

      <PortfolioSection title="My Skills">
        <div className="grid grid-cols-3 gap-10">
          <SkillItem name="HTML" />
          <SkillItem name="CSS" />
          <SkillItem name="Javascript" />
          <SkillItem name="VueJS" />
          <SkillItem name="ReactJS" />
          <SkillItem name="AngularJS" />
          <SkillItem name="ExpressJS" />
          <SkillItem name="Laravel" />
        </div>
      </PortfolioSection>

      <PortfolioSection title="My Projects">
        <div className="grid grid-cols-2 gap-10">
          <CardProject
            title="VueJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, similique natus. Porro tempora, error explicabo ullam sint quibusdam enim non a eos fuga magnam? Deserunt alias laudantium aliquid minus reiciendis!"
            url="https://vuejs.org"
          />
          <CardProject
            title="ViteJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, similique natus. Porro tempora, error explicabo ullam sint quibusdam enim non a eos fuga magnam? Deserunt alias laudantium aliquid minus reiciendis!"
            url="https://vitejs.dev"
          />
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
