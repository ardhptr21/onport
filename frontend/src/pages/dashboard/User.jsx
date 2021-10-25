import { useEffect, useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Sidebar from "../../components/Sidebar";
import Textarea from "../../components/Textarea";
import useAxios from "../../hooks/useAxios";

import SquareLogo from "../../assets/image/SquareLogo.svg";
import getUserId from "../../utils/getUserId";

const User = () => {
  const axios = useAxios();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const {
          data: { data: user },
        } = await axios.get(`/user/${getUserId()}`, { signal: ac.signal });

        user.photo && setPhoto(user.photo);
        user.name && setName(user.name);
        user.position && setPosition(user.position);
        user.about && setPosition(user.about);
      } catch (err) {
        !ac.signal.aborted && console.error(err.message);
      }
    })();

    return () => ac.abort();
  }, [axios]);

  return (
    <section className="flex py-6">
      <Sidebar />
      <div className="flex justify-center items-center flex-col w-full">
        <img src={photo || SquareLogo} alt="people profile" className="rounded-full w-52 border-4 border-primary" />
        <form className="w-full" autoComplete="off">
          <InputFile text="Change Image" />
          <div className="w-3/4 m-auto bg-primary p-10">
            <Input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input
              type="text"
              placeholder="Position/Job"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <Textarea
              name="about"
              placeholder="About"
              rows="10"
              onChange={(e) => setAbout(e.target.value)}
              value={about}
            ></Textarea>
            <ButtonForm type="submit">Save</ButtonForm>
          </div>
        </form>
      </div>
    </section>
  );
};

export default User;
