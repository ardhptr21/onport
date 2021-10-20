import { useState, useEffect } from "react";

const Textarea = ({ error, children, ...props }) => {
  const [stayError, setStayError] = useState(undefined);

  useEffect(() => {
    setStayError(error);
  }, [error]);

  return (
    <div>
      <textarea
        {...props}
        className={`outline-none
        border-4
        ${error && stayError ? "border-red-500 focus:border-red-500" : "border-secondary mb-3 focus:border-white"}
        bg-transparent
        px-4
        py-2
        w-full
        text-white`}
        onFocus={() => (error ? setStayError(false) : props.onFocus)}
      >
        {children}
      </textarea>
      {error && stayError && <small className="text-red-500 mb-3 inline-block">{error}</small>}
    </div>
  );
};

export default Textarea;
