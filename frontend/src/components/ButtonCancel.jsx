const ButtonCancel = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="uppercase p-3 gap-2 flex items-center bg-gray-200 hover:bg-gray-400 hover:text-white max-w-max shadow-sm hover:shadow-lg rounded-full h-10 text-primary"
      type="submit"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>

      {text && <p className="font-bold">{text}</p>}
    </button>
  );
};

export default ButtonCancel;
