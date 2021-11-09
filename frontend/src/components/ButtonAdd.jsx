import { useEffect } from "react";

const ButtonAdd = ({ text, loading = false, ...props }) => {
  useEffect(() => {
    if (loading) {
      document.getElementById("button-add").disabled = true;
    } else {
      document.getElementById("button-add").disabled = false;
    }
  }, [loading]);

  return (
    <button
      {...props}
      className="uppercase p-3 gap-2 flex items-center bg-green-500 hover:bg-green-400 max-w-max shadow-sm hover:shadow-lg rounded-full h-10 text-white disabled:bg-green-800 disabled:text-gray-300 disabled:cursor-default disabled:pointer-events-none"
      type="submit"
      id="button-add"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>

      {text && <p className="font-bold">{text}</p>}
    </button>
  );
};

export default ButtonAdd;
