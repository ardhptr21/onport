import { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import getRoutesName from "../../utils/getRouteName";
import isValidUniqueStr from "../../utils/isValidUniqueStr";
import { toast } from "react-toastify";

const Verify = () => {
  const { uniqueStr } = useParams();
  const axios = useAxios();
  const MAX_DELAY = 60;
  const [delay, setDelay] = useState(0);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState("ardhi@gmail.com");
  const id = isValidUniqueStr(uniqueStr);

  useEffect(() => {
    if (!id) {
      setRedirect(true);
    }

    (async () => {
      try {
        await axios.post(`/email/verify/${uniqueStr}`);
      } catch (err) {
        setError(true);
        console.error(err.message);
      } finally {
        const {
          data: {
            data: { email },
          },
        } = await axios.get(`/user/${id}`);
        setEmail(email);
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
      console.log(err.message);
      toast.error("Ooops! email verification can't be sent");
    } finally {
      setDelay(MAX_DELAY);
    }
  };

  if (redirect) return <Redirect to={getRoutesName("register").path} />;

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="md:py-10 md:px-20 sm:py-5 sm:px-10 px-2 py-4 bg-primary text-white max-w-2xl text-center">
        {error ? (
          <>
            <h1 className="md:text-4xl text-3xl font-bold text-red-500 uppercase">Verification Failed</h1>
            <p className="mt-5 text-xl">
              Can't verify <span className="font-bold">{email}</span>, link may be wrong or expired. Are you want to
              send verification again?
            </p>
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
          </>
        ) : (
          <>
            <h1 className="md:text-4xl text-3xl font-bold text-green-500 uppercase">Verification Success</h1>

            <p className="mt-5 text-xl">
              <span className="font-bold">{email}</span> is already verified now,{" "}
              <Link to={getRoutesName("login").path} className="underline hover:text-blue-400 font-bold">
                Please Login
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Verify;
