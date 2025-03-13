import { axiosClient } from "./ApiClient";

const Register = async (username: string, password: string) => {
  return await axiosClient.post("/register", { username, password });
};
const SignIn = async (username: string, password: string) => {
  return await axiosClient.post("/login", { username, password });
};

const GetInfo = async (id: any) => {
  const a = await axiosClient.get(`/user/info/${id}`);
  return a.data;
};

export { SignIn, Register, GetInfo };
