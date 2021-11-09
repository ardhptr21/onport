import { Link, Redirect } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState({});
  const [userId, setUserId] = useState(null);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setIsBtnLoading(true);

    if (password !== password2 && password !== "") {
      setError({ ...error, confirmMessage: "The confirm password does not match" });
      return;
    }

    try {
      const {
        data: { data },
      } = await axios.post("/user", { name, username, email, password });
      setUserId(data.id);
      setRedirect(true);
    } catch ({ response }) {
      setError(response.data.error);
    } finally {
      setIsBtnLoading(false);
    }
  };

  if (redirect) return <Redirect to={getRouteName("send-verify", { id: userId }).path} />;

  return (
    <section className="h-screen flex flex-col p-5 my-10 justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="sm:w-96 w-full bg-primary p-10" onSubmit={handleSubmit} autoComplete="off" spellCheck="false">
        <h1 className="text-white sm:text-4xl text-3xl mb-6 font-bold uppercase font-encode-sans text-center">
          Please Register
        </h1>
        <Input
          type="text"
          placeholder="Your Name"
          name="name"
          error={error.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          error={error.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Username"
          name="username"
          error={error.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          error={error.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          error={error.confirmMessage}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <ButtonForm type="submit" loading={isBtnLoading}>
          Register
        </ButtonForm>
        <Link to={getRouteName("login").path} className="text-white text-xs hover:underline">
          Already have an account? Please login
        </Link>
      </form>
    </section>
  );
};

export default Register;
