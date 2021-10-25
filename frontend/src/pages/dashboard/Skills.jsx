import Sidebar from "../../components/Sidebar";
import SkillItemDashboard from "../../components/SkillItemDashboard";
import ButtonAdd from "../../components/ButtonAdd";
import DashboardTitle from "../../components/DashboardTitle";
import { useEffect, useState } from "react";
import AlertDanger from "../../components/AlertDanger";
import useAxios from "../../hooks/useAxios";
import getUserId from "../../utils/getUserId";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const axios = useAxios();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const {
          data: { data: skills },
        } = await axios.get(`/profile/skills/${getUserId()}`, { signal: ac.signal });
        setSkills(skills);
      } catch (err) {
        !ac.signal.aborted && console.error(err.message);
      }
    })();
    return () => ac.abort();
  }, [axios]);

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex justify-center items-center flex-col w-full">
        <DashboardTitle text="Skills">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </DashboardTitle>
        <div className="bg-primary shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
          <div className="mb-4">
            <form className="flex mt-4">
              <input
                className="w-full py-2 px-3 mr-4 text-black outline-none"
                placeholder="Add Skills"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                autoFocus
              />
              <ButtonAdd />
            </form>
          </div>

          {!skills.length && <AlertDanger>You do not have any skill yet, please add at least one skill</AlertDanger>}

          {skills.map((s) => (
            <SkillItemDashboard name={s.name} skillId={s.id} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
