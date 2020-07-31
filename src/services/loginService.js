import http from "../http-common";

export const login = (data) => {
  return http().post("/auth", data);
};
