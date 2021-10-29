import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import getRouteName from "../../utils/getRouteName";

const Auth = ({ children, Component }) => {
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
        setVerify(true);
      } catch (e) {
        !ac.signal.aborted && setVerify(false);
      }
    })();

    return () => ac.abort();
  }, [axios]);

  if (!verify) return <Redirect to={getRouteName("login").path} />;

  return children || <Component />;
};

export default Auth;
