import { axiosClient } from "./ApiClient";

const Register = async (
  email: string,
  password: string,
  phone: string,
  fullName: string,
) => {
  return await axiosClient.post("/users", { email, password, phone, fullName });
};
const SignIn = async (email: string, password: string) => {
  return await axiosClient.post("/auth/token", { email, password });
};

const GetInfo = async () => {
  return await axiosClient.get(`/profile`);
};

export { SignIn, Register, GetInfo };
