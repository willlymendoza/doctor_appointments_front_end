import http from "../http-common";

export const postNew = (data, token) => {
  return http(token).post("/patients", data);
};

export const update = (id, data, token) => {
  return http(token).put(`/patients/${id}`, data);
};
