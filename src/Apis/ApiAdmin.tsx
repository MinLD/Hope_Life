import { axiosClient } from "./ApiClient";
//user
const getAllUser = async () => {
  return await axiosClient.get("/users");
};
const GetAllPost = async () => {
  return await axiosClient.get("/post/getAll");
};
const GetAllPostNoneActive = async () => {
  return await axiosClient.get(`/post/non-active`);
};
const ActivePost = async (id: any) => {
  return await axiosClient.patch(`/post/${id}`);
};

//user
const DeleteUser = async (id: any) => {
  return await axiosClient.delete(`/users/${id}`);
};
const UpdateUsers = async (
  email: string,
  password: string,
  phone: string,
  fullName: string,
) => {
  return await axiosClient.put("/users", { email, password, phone, fullName });
};
//tuyển dụng
const GetAllPostJobNoneActive = async () => {
  return await axiosClient.get(`/company/non-active/page=${1}&size=${3}`);
};

export default {
  getAllUser,
  GetAllPost,
  DeleteUser,
  UpdateUsers,
  GetAllPostNoneActive,
  ActivePost,
  GetAllPostJobNoneActive,
};
