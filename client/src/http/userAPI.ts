import type { FormData } from "@/types/types";
import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async ({
  email,
  password,
  name,
  lastname,
  number,
}: FormData) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    name,
    lastname,
    number,
    role: "USER",
  });
  localStorage.setItem("token", data.jwtToken);
  return jwtDecode(data.jwtToken);
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.jwtToken);
  return jwtDecode(data.jwtToken);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.jwtToken);
  return data.user;
};

export const editUser = async ({
  name,
  lastname,
  email,
  number,
}: {
  name: string;
  lastname: string;
  email: string;
  number: string;
}) => {
  const { data } = await $authHost.patch("api/user", {
    name,
    lastname,
    email,
    number,
  });

  if (data.jwtToken) {
    localStorage.setItem("token", data.jwtToken);
    return jwtDecode(data.jwtToken);
  }
  return data;
};
