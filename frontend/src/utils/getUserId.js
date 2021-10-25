import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const getUserId = () => {
  const TOKEN = Cookies.get("token");
  let data = {};
  try {
    data = jwt_decode(TOKEN);
  } catch (err) {
    console.error(err.message);
  }

  return data.userId;
};

export default getUserId;
