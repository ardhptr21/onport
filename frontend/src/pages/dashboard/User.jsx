import ButtonForm from "../../components/ButtonForm";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Sidebar from "../../components/Sidebar";
import Textarea from "../../components/Textarea";

const User = () => {
  return (
    <section className="flex py-6">
      <Sidebar />
      <div className="flex justify-center items-center flex-col w-full">
        <img
          src="https://miro.medium.com/max/500/0*xkJgg-6HskYrQ3N7.jpeg"
          alt="people profile"
          className="rounded-full w-52"
        />
        <form className="w-full" autoComplete="off">
          <InputFile text="Change Image" />
          <div className="w-3/4 m-auto bg-primary p-10">
            <Input type="text" placeholder="Name" name="name" />
            <Input type="password" placeholder="Position/Job" name="position" />
            <Textarea name="about" placeholder="About" rows="10"></Textarea>
            <ButtonForm type="submit">Save</ButtonForm>
          </div>
        </form>
      </div>
    </section>
  );
};

export default User;
