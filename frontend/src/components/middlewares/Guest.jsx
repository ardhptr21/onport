import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import getRouteName from "../../utils/getRouteName";

const Guest = ({ children, Component }) => {
  const axios = useAxios();
  const [verify, setVerify] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        await axios.post("/auth/verify", null, {
          signal: ac.signal,
          headers: { Authorization: localStorage.getItem("token") },
        });
        setVerify(false);
      } catch (e) {
        !ac.signal.aborted && setVerify(true);
      }
    })();

    return () => ac.abort();
  }, [axios]);

  if (!verify) return <Redirect to={getRouteName("user").path} />;

  return children || <Component />;
};

export default Guest;
