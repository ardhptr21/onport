const ButtonOutline = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-6 
                py-2 
                bg-primary 
                text-white uppercase 
                font-bold 
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

export default ButtonOutline;
