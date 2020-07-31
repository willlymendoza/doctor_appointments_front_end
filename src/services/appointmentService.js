import http from "../http-common";

export const postNew = (data, token) => {
  return http(token).post("/appointments", data);
};

export const update = (id, data, token) => {
  return http(token).put(`/appointment/${id}`, data);
};
