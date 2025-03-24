import { axiosClient } from "./ApiClient";
//post
const GetAllPost = async () => {
  return await axiosClient.get("/post/getAll", {
    params: { page: 1, size: 100 },
  });
};
const GetAllPostNoneActive = async () => {
  return await axiosClient.get(`/post/non-active`);
};
const ActivePost = async (id: any) => {
  return await axiosClient.patch(`/post/${id}`);
};
const DeletePost = async (id: any) => {
  return await axiosClient.delete(`/post/${id}`);
};

//user

const getAllUser = async () => {
  return await axiosClient.get("/users");
};
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
const GetAllPostJobNoneActive = async (pages: number, size: number) => {
  console.log(pages);
  return await axiosClient.get(`/company/non-active`, {
    params: {
      pages: pages,
      size: size,
    },
  });
};

const ActivePostJob = async (id: any) => {
  return await axiosClient.patch(`/company/${id}`);
};
const DeactivePostJob = async (id: any) => {
  return await axiosClient.delete(`/company/${id}`);
};
//Shop
const GetAllPostShopJobNoneActive = async () => {
  return await axiosClient.get(`/sellerProfile/nonactive`);
};
const ActiveShopJob = async (id: any) => {
  return await axiosClient.patch(`/sellerProfile/${id}/activate`);
};
const DeactiveShopJob = async (id: any) => {
  return await axiosClient.delete(`/sellerProfile/${id}`);
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
  GetAllPostShopJobNoneActive,
  ActiveShopJob,
  DeactiveShopJob,
  DeletePost,
  DeactivePostJob,
};
