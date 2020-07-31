import axios from "axios";

export default function axiosConfig(options = {}) {
  const config = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      "Content-type": "application/json",
      options,
    },
  });

  return config;
}
