const ButtonEdit = (props) => {
  return (
    <button
      {...props}
      className="uppercase p-3 flex items-center bg-yellow-500 hover:bg-yellow-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 "
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </button>
  );
};

export default ButtonEdit;
