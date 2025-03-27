import { axiosClient } from "./ApiClient";

const Post = async (formData: FormData) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
  return await axiosClient.post("/post", formData, {
    //là để khai báo kiểu dữ liệu gửi đi là multipart/form-data, thường dùng để upload file.
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Post Công Ty
const Company = async (formdata: FormData) => {
  for (let [key, value] of formdata.entries()) {
    console.log(`${key}:`, value);
  }
  return await axiosClient.post("/company", formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const JobPosting = async (body: any) => {
  return await axiosClient.post("/job", body);
};

const getAllPost = async (page: number) => {
  return await axiosClient.get(`job/getAll?page=${page}&size=12`);
};

//Post Cửa hàng
const HopeShopJob = async (body: any) => {
  console.log(body);
  return await axiosClient.post("/sellerProfile", body);
};
const PostProductHopeShops = async (body: any) => {
  for (let [key, value] of body.entries()) {
    console.log(`${key}:`, value);
  }

  return await axiosClient.post("/product", body);
};
const GetAllProduct = async () => {
  return await axiosClient.get("/product/getAll");
};
export default {
  Post,
  Company,
  HopeShopJob,
  JobPosting,
  getAllPost,
  PostProductHopeShops,
  GetAllProduct,
};
