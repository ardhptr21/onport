import ButtonEdit from "../components/ButtonEdit";
import ButtonDelete from "../components/ButtonDelete";

const SkillItemDashboard = ({ name, skillId, clickEdit, clickDelete }) => {
  return (
    <div className="flex mb-4 items-center text-white mt-5">
      <p className="w-full font-bold">{name}</p>
      <div className="flex gap-2">
        <ButtonEdit onClick={clickEdit} />
        <ButtonDelete onClick={clickDelete} />
      </div>
    </div>
  );
};

export default SkillItemDashboard;
