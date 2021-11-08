import jwt_decode from "jwt-decode";

const getUserInfo = () => {
  const TOKEN = localStorage.getItem("token");
  let data = {};
  try {
    data = jwt_decode(TOKEN);
  } catch {}

  if (Object.keys(data).length !== 0) {
    return data;
  }
};

export default getUserInfo;
