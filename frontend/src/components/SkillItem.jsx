const SkillItem = ({ name }) => {
  return (
    <div
      className="px-4 
                py-2 
                w-36 text-center 
                bg-primary 
                text-secondary 
                duration-200 
                hover:bg-transparent 
                hover:text-primary 
                hover:font-bold 
                hover:border-2 
                border-primary select-none"
    >
      {name}
    </div>
  );
};

export default SkillItem;
