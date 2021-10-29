import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import getRoutesName from "../../utils/getRouteName";
import { toast } from "react-toastify";

const SendVerify = () => {
  const MAX_DELAY = 60;
  const { id } = useParams();
  const [delay, setDelay] = useState(MAX_DELAY);
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const axios = useAxios();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: user },
        } = await axios.get(`/user/${id}`);
        setEmail(user.email);
      } catch (err) {
        console.error(err.message);
        setRedirect(true);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const delayTime = setTimeout(() => {
      delay > 0 && setDelay(delay - 1);
    }, 1000);
    return () => clearTimeout(delayTime);
  }, [delay]);

  const handleResend = async () => {
    try {
      await axios.post(`/email/send-verify/${id}`);
      toast.success("Email verification sent");
    } catch (err) {
      console.error(err.message);
      toast.error("Ooops! email verification can't be sent");
    } finally {
      setDelay(MAX_DELAY);
    }
  };

  if (redirect) return <Redirect to={getRoutesName("register").path} />;

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="md:py-10 md:px-20 sm:py-5 sm:px-10 px-2 py-4 bg-primary text-white max-w-2xl text-center">
        <h1 className="md:text-4xl text-3xl font-bold">Verify Your Email</h1>
        <p className="text-secondary md:text-2xl text-xl mt-5">We have sent a verification link to email</p>
        <p className="text-white md:text-2xl text-xl font-bold">{email}</p>
        <hr className="mt-5" />
        <button
          className="bg-blue-500 px-4 py-2 text-white font-bold uppercase mt-6 disabled:bg-secondary disabled:text-primary"
          disabled={delay > 0}
          onClick={handleResend}
        >
          Resend Link Verification
        </button>
        {delay > 0 && (
          <p className="text-secondary block mt-1">
            Resend in <span className="text-white">{delay}s</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default SendVerify;
