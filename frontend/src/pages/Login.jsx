import { Link, Redirect, useHistory } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import getRoutesName from "../utils/getRouteName";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isUnverified, setIsUnverified] = useState(false);
  const [userId, setUserId] = useState(null);

  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setMessage("");

    try {
      const {
        data: { token },
      } = await axios.post("/auth/login", { email, password });

      localStorage.setItem("token", token, { expires: 3 });
      setRedirect(true);
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      response.data.message && setMessage(response.data.message);

      if (response.data.verified === "UNVERIFIED") {
        setIsUnverified(true);
        setUserId(response.data.id);
      }
    }
  };

  const handleUnverified = async () => {
    try {
      await axios.post(`/email/send-verify/${userId}`);
      history.push(getRoutesName("send-verify", { id: userId }).path);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: getRouteName("user").path,
          state: {
            emit: true,
          },
        }}
      />
    );

  return (
    <section className="h-screen flex flex-col p-5 justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="sm:w-96 w-full bg-primary p-10" autoComplete="off" spellCheck="false" onSubmit={handleSubmit}>
        <h1 className="text-white sm:text-4xl text-3xl mb-6 font-bold uppercase font-encode-sans text-center">
          Please Login
        </h1>
        <Input
          type="text"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error.email?.replace('"value"', "Email")}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error.password?.replace('"value"', "Password")}
        />
        {message && (
          <p className="text-center text-red-500 border-2 p-2 font-bold border-red-500">
            {message}{" "}
            {isUnverified && (
              <span onClick={handleUnverified} className="font-bold underline text-white cursor-pointer ">
                <br />
                Send Verification
              </span>
            )}
          </p>
        )}
        <ButtonForm type="submit">Login</ButtonForm>
        <Link to={getRouteName("register").path} className="text-white text-xs hover:underline">
          Don't have an account? Please register
        </Link>
      </form>
    </section>
  );
};

export default Login;
