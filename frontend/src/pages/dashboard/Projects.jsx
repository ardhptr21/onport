import ButtonAdd from "../../components/ButtonAdd";
import DashboardTitle from "../../components/DashboardTitle";
import RowTableProject from "../../components/RowTableProject";
import Sidebar from "../../components/Sidebar";
import Th from "../../components/Th";

const Projects = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex justify-center flex-col items-center mx-auto w-3/4">
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

        <ButtonAdd text="Add New Project" />

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
            <RowTableProject
              no={1}
              title="Laravelia"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti dignissimos quisquam, quos facere quam nihil, nisi beatae neque ut, earum harum vitae. Id deserunt incidunt, quos suscipit ullam sapiente!"
              url="https://google.com"
            />
            <RowTableProject
              no={2}
              title="OnPort"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti dignissimos quisquam, quos facere quam nihil, nisi beatae neque ut, earum harum vitae. Id deserunt incidunt, quos suscipit ullam sapiente!"
              url="https://google.com"
            />
            <RowTableProject
              no={3}
              title="Candaan API 😂"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti dignissimos quisquam, quos facere quam nihil, nisi beatae neque ut, earum harum vitae. Id deserunt incidunt, quos suscipit ullam sapiente!"
              url="https://google.com"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Projects;
