import { useState } from "react";

import { motion } from "framer-motion";

import InputBoxPost from "./inputBox";
import ApiPost from "../../../Services/PostApi";
import { toast } from "react-toastify";
import LoadingTextCommon from "../../LoaddingCommon";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isFile, setFile] = useState<File | null>();
  const [isCheck, setCheck] = useState(false);
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
    if (name === "logo" && files?.length) {
      setFile(files[0]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        logo: files[0], // Cập nhật logo trong formData
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
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
    if (!isCheck) {
      toast.warning("Vui lòng đọc lại điều khoản của Hope!!!");
      return;
    }
    if (!isFile) {
      toast.warning("Vui lòng chọn hình ảnh của công ty!!");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("address", formData.address);
    formdata.append("description", formData.description);
    formdata.append("industry", formData.industry);
    formdata.append("phoneNumber", formData.phoneNumber);
    formdata.append("taxCode", formData.taxCode);
    formdata.append("companyImage", isFile);
    for (let [key, value] of formdata.entries()) {
      console.log(`${key}:`, value);
    }
    setLoading(true);
    ApiPost.Company(formdata)
      .then((res) => {
        if (res?.data?.result) {
          console.log(res.data.result);
          toast.success("Tạo thành công!");
          toast.success("Bạn nhớ để ý email để chờ xét duyệt!");
          setLoading(false);
          navigate("/");
        } else {
          console.error("Phản hồi API không hợp lệ", res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err?.response?.data);

        toast.error("Lỗi !!");
        setLoading(false);
      });
  };
  const handleCreateShopJob = () => {
    setLoading(true);
    ApiPost.HopeShopJob(formDataShop)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Tạo thành công");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-3 p-6 shadow-2xl">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Thông tin của {type === "hopeshop" ? "cửa hàng" : "công ty"}
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
          onChange={(e) => setCheck(e.target.checked)}
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
        {isLoading && <LoadingTextCommon />}{" "}
        {type === "hopeshop"
          ? "Gửi xét duyệt công ty"
          : "Gửi xét duyệt cửa hàng"}
      </motion.button>
    </div>
  );
}

export default FromUS;
