import Sidebar from "../../components/navigations/Sidebar";
import SkillItemDashboard from "../../components/SkillItemDashboard";
import ButtonAdd from "../../components/buttons/ButtonAdd";
import DashboardTitle from "../../components/DashboardTitle";
import { useEffect, useState } from "react";
import AlertDanger from "../../components/alerts/AlertDanger";
import useAxios from "../../hooks/useAxios";
import getUserInfo from "../../utils/getUserInfo";
import ButtonCancel from "../../components/buttons/ButtonCancel";
import { toast } from "react-toastify";
import LoadingDark from "../../components/loading/LoadingDark";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [error, setError] = useState({});
  const [updateId, setUpdateId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const axios = useAxios();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const {
          data: { data: skills },
        } = await axios.get(`/profile/skills/${getUserInfo().userId}`, { signal: ac.signal });
        setSkills(skills);
      } catch (err) {
        !ac.signal.aborted && console.error(err.message);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    })();
    return () => ac.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setIsBtnLoading(true);

    if (!updateId) {
      handleAdd();
    } else {
      handleUpdate();
    }
  };

  const handleAdd = async () => {
    try {
      const {
        data: { data: skills },
      } = await axios.post(
        `/profile/skills/${getUserInfo().userId}`,
        { skill },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      setSkills(skills);
      setError({});
      toast.success("New skill added");
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      toast.error("Ooops! added new skill failed");
    } finally {
      setIsBtnLoading(false);
    }

    setSkill("");
  };

  const handleUpdate = async () => {
    try {
      const {
        data: { data: skills },
      } = await axios.patch(
        `/profile/skills/${getUserInfo().userId}`,
        { skill, id: updateId },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setUpdateId(null);
      setSkills(skills);
      setSkill("");
      toast.success("Skill updated");
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      toast.error("Ooops! updated skill failed");
    } finally {
      setIsBtnLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const {
        data: { data: skills },
      } = await axios.delete(`/profile/skills/${getUserInfo().userId}`, {
        data: { id },
        headers: { Authorization: localStorage.getItem("token") },
      });
      setSkills(skills);
    } catch (err) {
      console.error(err);
      toast.error("Ooops! deleted skill failed");
    }

    toast.success("Skill deleted");
  };

  return (
    <section className="flex">
      <Sidebar />
      {isLoading ? (
        <LoadingDark />
      ) : (
        <div className="flex justify-center py-10 px-5 items-center flex-col w-full">
          <DashboardTitle text="Skills">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </DashboardTitle>
          <div className="bg-primary shadow p-6 m-4 w-full md:w-3/4">
            <div className="mb-4">
              <p className="text-center text-blue-500 uppercase text-lg font-bold">{updateId ? "Update" : "Add"}</p>
              <form className="flex mt-4 gap-2" onSubmit={handleSubmit}>
                <input
                  className="w-full py-2 px-3 text-black outline-none"
                  placeholder={`${updateId ? "Update" : "Add"} Skill`}
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onFocus={() => setError({})}
                  autoFocus
                />
                <ButtonAdd loading={isBtnLoading} />
                {updateId && (
                  <ButtonCancel
                    onClick={() => {
                      setUpdateId(null);
                      setSkill("");
                    }}
                  />
                )}
              </form>
              <p className="text-red-500 mt-2">{error.name}</p>
            </div>

            {!skills.length && <AlertDanger>You do not have any skill yet, please add at least one skill</AlertDanger>}

            {skills.map((s) => (
              <SkillItemDashboard
                name={s.name}
                skillId={s.id}
                key={s.id}
                clickEdit={() => {
                  setUpdateId(s.id);
                  setSkill(s.name);
                }}
                clickDelete={() => window.confirm("Are you sure want to delete this?") && handleDelete(s.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
