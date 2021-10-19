import { Link, Redirect } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState({});

  const axios = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});

    if (!isConfirm) {
      setError({ ...error, confirmMessage: "The confirm password does not match" });
      return;
    }

    axios
      .post("/user", {
        name,
        email,
        password,
      })
      .then(() => {
        setRedirect(true);
      })
      .catch(({ response }) => {
        setError(response.data.error);
      });
  };

  const handleConfirm = (e) => {
    if (e.target.value === password) return setIsConfirm(true);
    setIsConfirm(false);
  };

  if (redirect) return <Redirect to={getRouteName("login").path} />;

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="w-96 bg-primary p-10" onSubmit={handleSubmit}>
        <h1 className="text-white text-4xl mb-6 font-bold uppercase font-encode-sans text-center">Please Register</h1>
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
          onChange={handleConfirm}
        />
        <ButtonForm type="submit">Register</ButtonForm>
        <Link to={getRouteName("login").path} className="text-white text-xs hover:underline">
          Already have an account? Please login
        </Link>
      </form>
    </section>
  );
};

export default Register;
