import { useEffect, useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Sidebar from "../../components/Sidebar";
import Textarea from "../../components/Textarea";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

import SquareLogo from "../../assets/image/SquareLogo.svg";
import getUserId from "../../utils/getUserId";
import Cookies from "js-cookie";
import DashboardTitle from "../../components/DashboardTitle";

const User = () => {
  const axiosInstance = useAxios();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const {
          data: { data: user },
        } = await axiosInstance.get(`/user/${getUserId()}`, { signal: ac.signal });
        user.photo && setPhoto(user.photo);
        user.name && setName(user.name);
        user.position && setPosition(user.position);
        user.about && setAbout(user.about);
      } catch (err) {
        !ac.signal.aborted && console.error(err.message);
      }
    })();

    return () => ac.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangePreview = (e) => {
    const file = e.target.files[0];
    try {
      const blob = URL.createObjectURL(file);
      setPreview(blob);
    } catch (err) {
      console.log(err.message);
    }
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      let url = null;
      if (file) {
        url = await uploadFile(file);
      }

      try {
        const {
          data: { data: user },
        } = await axiosInstance.put(
          `/user/${getUserId()}`,
          { name, position, about, photo: url },
          { headers: { Authorization: Cookies.get("token") } }
        );
        user.photo && setPhoto(user.photo);
        user.name && setName(user.name);
        user.position && setPosition(user.position);
        user.about && setAbout(user.about);
      } catch ({ response }) {
        response.data.error && setError(response.data.error);
      }
    })();

    setFile("");
    setPreview("");
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    let url = null;

    try {
      const result = await axios.post("https://api.imgbb.com/1/upload", formData, {
        params: {
          key: process.env.REACT_APP_IMGBB_KEY,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      url = result.data.data.url;
    } catch (err) {
      console.error(err.response);
    }

    return url;
  };

  return (
    <section className="flex py-6">
      <Sidebar />
      <div className="flex justify-center py-10 md:px-0 px-5 items-center flex-col w-full">
        <DashboardTitle text="User">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </DashboardTitle>
        <img src={SquareLogo} alt="people profile" className="rounded-full w-52 border-4 border-primary object-cover" />
        <form className="w-full" autoComplete="off" onSubmit={handleSubmit}>
          <InputFile text="Change Image" name="photo" onChange={handleChangePreview} />
          <div className="w-full md:w-3/4 m-auto bg-primary p-10">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              error={error.name}
              value={name}
              required
            />
            <Input
              type="text"
              placeholder="Position/Job"
              name="position"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              error={error.position}
            />
            <Textarea
              name="about"
              placeholder="About"
              rows="10"
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              error={error.about}
            ></Textarea>
            <ButtonForm type="submit">Save</ButtonForm>
          </div>
        </form>
      </div>
    </section>
  );
};

export default User;
