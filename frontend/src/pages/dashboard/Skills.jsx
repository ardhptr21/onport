import Sidebar from "../../components/Sidebar";
import SkillItemDashboard from "../../components/SkillItemDashboard";
const Skills = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex justify-center items-center w-full">
        <div className="bg-primary rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
          <div className="mb-4">
            <h1 className="text-white text-4xl font-bold">
              Skills{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>

            <form className="flex mt-4">
              <input className="rounded w-full py-2 px-3 mr-4 text-black outline-none" placeholder="Add Skills" />
              <button
                className="p-0 w-12 h-10 bg-green-500 rounded-full hover:bg-green-400 active:shadow-lg mouse shadow transition ease-in duration-200 text-white"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </form>
          </div>

          <SkillItemDashboard name="HTML" skillId="abcde-edbca-akkhf-asdj" />
          <SkillItemDashboard name="Javascript" skillId="dasfjl-akjksd-jkda-jdk" />
          <SkillItemDashboard name="NodeJS" skillId="akjdf-akdjkf-ahdkf-skdjf" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
