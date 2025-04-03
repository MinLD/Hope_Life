import { axiosClient } from "./ApiClient";
//Nạp tiền
const SePay_Payment = () => {
  return axiosClient.get("/hooks/sepay-payment/start");
};
//post
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
//MyPostVolunn
const GetAllPostVolunnFromUser = async () => {
  return await axiosClient.get("/postVolunteer/fulled", {
    params: { page: 1, size: 100 },
  });
};
//postVolunn
const ReportPosrtVolunn = async (postId: any, content: any) => {
  return await axiosClient.post(`/report`, {
    postId,
    content,
  });
};
const postVolunn = async (formData: FormData) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
  return await axiosClient.post("/postVolunteer", formData, {
    //là để khai báo kiểu dữ liệu gửi đi là multipart/form-data, thường dùng để upload file.
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const GetAllPostVolunn = async () => {
  return await axiosClient.get("/postVolunteer/getAll", {
    params: { page: 1, size: 100 },
  });
};
const DonatePostVolunn = async (id: any, amount: any) => {
  return await axiosClient.patch("postVolunteer/donate", {
    postVolunteerId: id,
    amount: amount,
  });
};
const GetAlldonatePostVolunn = async (id: any) => {
  return await axiosClient.get(`/support/post/${id}`);
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

  return await axiosClient.post("/product", body, {
    headers: {
      "Content-Type": "multipart/form-data", // Không cần thiết, nhưng có thể giữ lại nếu Axios chưa tự đặt đúng
    },
  });
};
const GetAllProductFromSeller = async (page: number) => {
  return await axiosClient.get(`/product/getAllBySeller?page=${page}&size=12`);
};
const GetAllProduct = async (page: number) => {
  return await axiosClient.get(`/product/getAll?page=${page}&size=12`);
};
const DeleteProduct = async (id: any) => {
  return await axiosClient.delete(`/product/${id}`);
};
//postCartProduct
const Cart = async (productId: any, quantity: any) => {
  return await axiosClient.post("/cartitem", {
    productId: productId,
    quantity: quantity,
  });
};
export default {
  ReportPosrtVolunn,
  Cart,
  GetAllPostVolunnFromUser,
  SePay_Payment,

  GetAllProductFromSeller,
  Post,
  Company,
  HopeShopJob,
  JobPosting,
  getAllPost,
  PostProductHopeShops,
  GetAllProduct,
  DeleteProduct,
  postVolunn,
  GetAllPostVolunn,
  DonatePostVolunn,
  GetAlldonatePostVolunn,
};
