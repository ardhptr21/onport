import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AlertDanger from "../../components/AlertDanger";
import ButtonAdd from "../../components/ButtonAdd";
import ButtonCancel from "../../components/ButtonCancel";
import ButtonForm from "../../components/ButtonForm";
import DashboardTitle from "../../components/DashboardTitle";
import Input from "../../components/Input";
import RowTableProject from "../../components/RowTableProject";
import Sidebar from "../../components/Sidebar";
import Th from "../../components/Th";
import useAxios from "../../hooks/useAxios";
import getUserId from "../../utils/getUserId";
import { toast } from "react-toastify";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [updateId, setUpdateId] = useState(null);
  const [error, setError] = useState({});

  const axios = useAxios();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const {
          data: { data: projects },
        } = await axios.get(`/profile/projects/${getUserId()}`, { signal: ac.signal });

        setProjects(projects);
      } catch (err) {
        !ac.signal.aborted && console.error(err.message);
      }
    })();
    return () => ac.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({});

    if (!updateId) {
      handleAdd();
    } else {
      handleUpdate();
    }
  };

  const handleAdd = async () => {
    try {
      const {
        data: { data: projects },
      } = await axios.post(
        `/profile/projects/${getUserId()}`,
        { title, description, url },
        { headers: { Authorization: Cookies.get("token") } }
      );

      setProjects(projects);
      setTitle("");
      setDescription("");
      setUrl("");
      setToggleForm(false);
      toast.success("New project added");
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      toast.error("Ooops! updated skill failed");
    }
  };

  const handleUpdate = async () => {
    try {
      const {
        data: { data: projects },
      } = await axios.patch(
        `/profile/projects/${getUserId()}`,
        { title, description, url, id: updateId },
        { headers: { Authorization: Cookies.get("token") } }
      );

      setProjects(projects);

      setUpdateId(null);
      setTitle("");
      setDescription("");
      setUrl("");
      setToggleForm(false);
      toast.success("Project updated");
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      toast.error("Ooops! updated skill failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const {
        data: { data: projects },
      } = await axios.delete(`/profile/projects/${getUserId()}`, {
        data: { id },
        headers: { Authorization: Cookies.get("token") },
      });
      setProjects(projects);
      toast.success("Project deleted");
    } catch (err) {
      console.error(err);
      toast.error("Ooops! deleted skill failed");
    }
  };

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex justify-center py-10 md:px-0 px-5 flex-col items-center mx-auto md:w-3/4 w-full overflow-hidden">
        <DashboardTitle text="Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </DashboardTitle>

        {!toggleForm ? (
          <ButtonAdd text="Add New Project" onClick={() => setToggleForm(true)} />
        ) : (
          <ButtonCancel
            text="Cancel"
            onClick={() => {
              setUpdateId(null);
              setTitle("");
              setDescription("");
              setUrl("");
              setToggleForm(false);
              setError({});
            }}
          />
        )}

        {toggleForm && (
          <form className="w-full mt-5" autoComplete="off" onSubmit={handleSubmit}>
            <div className="md:w-3/4 m-auto bg-primary p-10">
              <p className="text-center text-blue-500 font-bold text-lg uppercase mb-8">
                {updateId ? "Update" : "Add"}
              </p>
              <Input
                type="text"
                placeholder="Name"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={error.title?.replace("title", "name")}
              />
              <Input
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={error.description}
              />
              <Input
                type="url"
                placeholder="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                error={error.url}
              />
              <ButtonForm type="submit">{updateId ? "Update" : "Add"}</ButtonForm>
            </div>
          </form>
        )}

        {!toggleForm && (
          <div>
            {!projects.length ? (
              <AlertDanger>You do not have any project, please add at least one project</AlertDanger>
            ) : (
              <div className="md:w-7/12 lg:w-auto w-auto m-auto overflow-auto">
                <table className="border-collapse w-full mt-3">
                  <thead>
                    <tr>
                      <Th>No</Th>
                      <Th>Title</Th>
                      <Th>Description</Th>
                      <Th>URL</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <RowTableProject
                        no={index + 1}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                        key={project.id}
                        clickEdit={() => {
                          setUpdateId(project.id);
                          setTitle(project.title);
                          setDescription(project.description);
                          setUrl(project.url);
                          setToggleForm(true);
                        }}
                        clickDelete={() =>
                          window.confirm("Are you sure want to delete this project?") && handleDelete(project.id)
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
