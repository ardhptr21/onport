import { Link } from "react-router-dom";
import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import getRouteName from "../utils/getRouteName";
import Logo from "../assets/image/Logo.svg";

const Register = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="Onport Logo" className="w-36 mb-6" />
      <form className="w-96 bg-primary p-10">
        <h1 className="text-white text-4xl mb-6 font-bold uppercase font-encode-sans text-center">Please Register</h1>
        <Input type="text" placeholder="Your Name" name="name" />
        <Input type="text" placeholder="Email Address" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <Input type="password" placeholder="Confirm Password" name="password2" />
        <ButtonForm>Register</ButtonForm>
        <Link to={getRouteName("login").path} className="text-white text-xs hover:underline">
          Already have an account? Please login
        </Link>
      </form>
    </section>
  );
};

export default Register;
