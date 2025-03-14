import { useState } from "react";
import { FaUser, FaPhone, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
type layoutProps = {
  setStep: any;
};
function FromUS({ setStep }: layoutProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    district: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <div className="mx-auto max-w-4xl space-y-3 p-6 shadow-2xl">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Thông tin nhà tuyển dụng
      </h2>

      {/* Họ và tên */}
      <div className="flex items-center rounded-lg border px-3 py-2">
        <FaUser className="text-gray-500" />
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          className="w-full p-2 outline-none"
          value={formData.name}
          onChange={() => handleChange(formData)}
        />
      </div>

      {/* Số điện thoại */}
      <div className="flex items-center rounded-lg border px-3 py-2">
        <FaPhone className="text-gray-500" />
        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại cá nhân"
          className="w-full p-2 outline-none"
          value={formData.phone}
          onChange={() => handleChange(formData)}
        />
      </div>

      {/* Công ty */}
      <div className="flex items-center rounded-lg border px-3 py-2">
        <FaBuilding className="text-gray-500" />
        <input
          type="text"
          name="company"
          placeholder="Tên công ty"
          className="w-full p-2 outline-none"
          value={formData.company}
          onChange={() => handleChange(formData)}
        />
      </div>

      {/* Địa điểm làm việc */}
      <div className="grid grid-cols-2 gap-4">
        <select
          name="city"
          className="w-full rounded-lg border p-2"
          value={formData.city}
          onChange={() => handleChange(formData)}
        >
          <option value="">Chọn tỉnh/thành phố</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
        </select>
        <select
          name="district"
          className="w-full rounded-lg border p-2"
          value={formData.district}
          onChange={() => handleChange(formData)}
        >
          <option value="">Chọn quận/huyện</option>
        </select>
      </div>

      {/* Giới tính */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Giới tính:</span>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={formData.gender === "Nam"}
            onChange={() => handleChange(formData)}
          />
          <span>Nam</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={formData.gender === "Nữ"}
            onChange={() => handleChange(formData)}
          />
          <span>Nữ</span>
        </label>
      </div>

      {/* Checkbox Điều khoản */}
      <label className="flex items-center space-x-2 text-gray-700">
        <input
          type="checkbox"
          name="agree"
          className="h-4 w-4"
          checked={formData.agree}
          onChange={() => handleChange(formData)}
        />
        <span>
          Tôi đã đọc và đồng ý với{" "}
          <span className="font-bold text-green-600">Điều khoản dịch vụ</span>{" "}
          và{" "}
          <span className="font-bold text-green-600">Chính sách bảo mật</span>{" "}
          của TopCV.
        </span>
      </label>

      {/* Nút Hoàn tất */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
        onClick={() => setStep(2)}
      >
        Lưu và Tiếp tục
        <FaArrowRight />
      </motion.button>
    </div>
  );
}

export default FromUS;
