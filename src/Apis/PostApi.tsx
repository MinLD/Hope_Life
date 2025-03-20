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
const Company = async (data: any) => {
  return await axiosClient.post("/company", JSON.stringify({ email: data }), {
    headers: { "Content-Type": "application/json" },
  });
};
export default { Post, Company };
