const ButtonFill = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-6
                py-2 
                border-2 
                border-primary 
                bg-white 
                shadow-button 
                transform 
                duration-200
                hover:shadow-none 
                hover:translate-x-1
                hover:translate-y-1"
    >
      {children}
    </button>
  );
};

export default ButtonFill;
