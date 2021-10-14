const Input = (props) => {
  return (
    <input
      {...props}
      className="outline-none
                border-4 
                border-secondary 
                bg-transparent 
                px-4 
                py-2 
                w-full 
                text-white 
                focus:border-white
                mb-3"
    />
  );
};

export default Input;
