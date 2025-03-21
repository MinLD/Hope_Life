import { useState } from "react";

import { motion } from "framer-motion";

import InputBoxPost from "./inputBox";
import ApiPost from "../../../Apis/PostApi";
import { toast } from "react-toastify";

type formDataType = {
  name: string;
  description: string;
  industry: string;
  phoneNumber: string;
  email: string;
  address: string;
  size: string;
  taxCode: string;
  logo: File | null;
};
type formDataTypeShop = {
  phone: string;
  email: string;
  storeName: string;
  storeDescription: string;
};
type propsType = {
  type?: string;
};
function FromUS({ type }: propsType) {
  const [isFile, setFile] = useState<File | null>();
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    description: "",
    industry: "",
    phoneNumber: "",
    email: "",
    address: "",
    size: "",
    taxCode: "",
    logo: null,
  });
  const [formDataShop, setFormDataShop] = useState<formDataTypeShop>({
    phone: "",
    email: "",
    storeName: "",
    storeDescription: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFile(files?.[0]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const Data: {
    type: string;
    name: string;

    placeholder: string;
  }[] = [
    {
      type: "text",
      name: "name",
      placeholder: "Tên công ty",
    },
    {
      type: "text",
      name: "description",
      placeholder: "Mô tả công ty",
    },
    {
      type: "file",
      name: "logo",
      placeholder: "Logo công ty",
    },
    {
      type: "text",
      name: "industry",
      placeholder: "Ngành nghề chính",
    },
    {
      type: "text",
      name: "phoneNumber",
      placeholder: "Số điện thoại",
    },
    {
      type: "email",
      name: "email",
      placeholder: "email",
    },
    {
      type: "text",
      name: "address",
      placeholder: "Địa chỉ",
    },
    {
      type: "text",
      name: "taxCode",
      placeholder: "mã số thuế (nếu có)",
    },
  ];
  const Data1: {
    type: string;
    name: string;

    placeholder: string;
  }[] = [
    {
      type: "text",
      name: "storeName",
      placeholder: "Tên cửa hàng",
    },
    {
      type: "text",
      name: "storeDescription",
      placeholder: "Mô tả về cửa hàng",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email cửa hàng",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Số điện thoại",
    },
  ];
  const handleChangeShop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormDataShop((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCreateCity = () => {
    const formdata = new FormData();
    formdata.append("name", JSON.stringify(formData.name));
    formdata.append("email", JSON.stringify(formData.email));
    formdata.append("address", JSON.stringify(formData.address));
    formdata.append("description", JSON.stringify(formData.description));
    formdata.append("industry", JSON.stringify(formData.industry));
    formdata.append("phoneNumber", JSON.stringify(formData.phoneNumber));
    formdata.append("taxCode", JSON.stringify(formData.taxCode));
    formdata.append("companyImage", isFile!);
    ApiPost.Company(formdata)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Tạo thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCreateShopJob = () => {

    ApiPost.HopeShopJob(formDataShop)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Tạo thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mx-auto max-w-4xl space-y-3 p-6 shadow-2xl">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Thông tin nhà tuyển dụng
      </h2>
      {type === "hopeshop" ? (
        <>
          {Data1.map((i, k) => (
            <div key={k}>
              <InputBoxPost
                type={i.type}
                name={i.name}
                formData={formDataShop}
                placeholder={i.placeholder}
                handleChange={handleChangeShop}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          {Data.map((i, k) => (
            <div key={k}>
              <InputBoxPost
                type={i.type}
                name={i.name}
                formData={formData}
                placeholder={i.placeholder}
                handleChange={
                  i.type === "file" ? (e: any) => handleChange(e) : handleChange
                }
              />
            </div>
          ))}
        </>
      )}
      Điều khoản
      <label className="flex items-center space-x-2 text-gray-700">
        <input
          type="checkbox"
          name="agree"
          className="h-4 w-4"
          // checked={}
        />
        <span>
          Tôi đã đọc và đồng ý với{" "}
          <span className="font-bold text-green-600">Điều khoản dịch vụ</span>{" "}
          và{" "}
          <span className="font-bold text-green-600">Chính sách bảo mật</span>{" "}
          của Hope.
        </span>
      </label>
      {/* Nút Hoàn tất */}
      <motion.button
        onClick={type === "hopeshop" ? handleCreateShopJob : handleCreateCity}
        whileTap={{ scale: 0.95 }}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
      >
        Hoàn tất tạo công ty
      </motion.button>
    </div>
  );
}

export default FromUS;
