import axios from "axios";

export default function axiosConfig(token = "") {
  const config = axios.create({
    baseURL: "http://192.168.50.96:5000/api",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });

  return config;
}
