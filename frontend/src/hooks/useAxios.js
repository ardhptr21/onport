import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
    timeout: 3000,
  });

  return axiosInstance;
};

export default useAxios;
