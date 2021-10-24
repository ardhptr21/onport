import { Link, Redirect } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setMessage("");

    try {
      const {
        data: { token },
      } = await axios.post("/auth/login", { email, password });

      Cookies.set("token", token, { expires: 3 });
      setRedirect(true);
    } catch ({ response }) {
      response.data.error && setError(response.data.error);
      response.data.message && setMessage(response.data.message);
    }
  };

  if (redirect) return <Redirect to={getRouteName("user").path} />;

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="w-96 bg-primary p-10" autoComplete="off" spellCheck="false" onSubmit={handleSubmit}>
        <h1 className="text-white text-4xl mb-6 font-bold uppercase font-encode-sans text-center">Please Login</h1>
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
        {message && <p className="text-center text-red-500 border-2 p-2 font-bold border-red-500">{message}</p>}
        <ButtonForm type="submit">Login</ButtonForm>
        <Link to={getRouteName("register").path} className="text-white text-xs hover:underline">
          Don't have an account? Please register
        </Link>
      </form>
    </section>
  );
};

export default Login;
