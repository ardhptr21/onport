import { useEffect } from "react";
import LoadingBtnWhite from "../loading/LoadingBtnWhite";

const ButtonForm = ({ children, loading = false, ...props }) => {
  useEffect(() => {
    if (loading) {
      document.getElementById("btn-form").disabled = true;
    } else {
      document.getElementById("btn-form").disabled = false;
    }
  }, [loading]);

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
              disabled:bg-blue-900
              disabled:cursor-default
              hover:bg-gradient-to-r from-blue-500 to-blue-700
              disabled:pointer-events-none
              hover:text-white
              "
      id="btn-form"
    >
      {loading ? <LoadingBtnWhite /> : children}
    </button>
  );
};

export default ButtonForm;
