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
  let currentPage: number = 0;
  let pageSize: number = 5;
  return await axiosClient.get(`/company/non-active`, {
    params: {
      currentPage,
      pageSize,
      totalPages: 5,
    },
  });
};

const ActivePostJob = async (id: any) => {
  return await axiosClient.patch(`/company/${id}`);
};

export default {
  getAllUser,
  GetAllPost,
  DeleteUser,
  UpdateUsers,
  GetAllPostNoneActive,
  ActivePost,
  GetAllPostJobNoneActive,
  ActivePostJob,
};
