import { axiosClient } from "./ApiClient";

const Post = async (formData: FormData) => {
  return await axiosClient.post("/post", formData, {
    //là để khai báo kiểu dữ liệu gửi đi là multipart/form-data, thường dùng để upload file.
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Post Công Ty
const Company = async () => {
  let name: string = "dmlTan";
  let email: string = "hehe@gmail.com";

  return await axiosClient.post("/company", { name, email });
};

//Post Cửa hàng
const HopeShopJob = async (body: any) => {
  return await axiosClient.post("/sellerProfile", body);
};
export default { Post, Company, HopeShopJob };
