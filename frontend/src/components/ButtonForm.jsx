const ButtonForm = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full
              bg-white
              text-primary
              px-4
              py-2
              mt-3
              uppercase
              font-bold
              hover:bg-gradient-to-r from-blue-500 to-blue-700
              hover:text-white
              "
    >
      {children}
    </button>
  );
};

export default ButtonForm;
