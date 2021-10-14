import { Link } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";

const Login = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="w-96 bg-primary p-10">
        <h1 className="text-white text-4xl mb-6 font-bold uppercase font-encode-sans text-center">Please Login</h1>
        <Input type="text" placeholder="Email Address" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <ButtonForm>Login</ButtonForm>
        <Link to={getRouteName("register").path} className="text-white text-xs hover:underline">
          Don't have an account? Please register
        </Link>
      </form>
    </section>
  );
};

export default Login;
