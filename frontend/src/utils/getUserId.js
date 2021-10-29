import jwt_decode from "jwt-decode";

const getUserId = () => {
  const TOKEN = localStorage.getItem("token");
  let data = {};
  try {
    data = jwt_decode(TOKEN);
  } catch (err) {
    console.error(err.message);
  }

  return data.userId;
};

export default getUserId;
