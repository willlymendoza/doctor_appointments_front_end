import axios from "axios";

export default function axiosConfig(token = "") {
  const config = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });

  return config;
}
