import { useState } from "react";
import api from "../../../Services/PostApi";
export default function JobPostingForm() {
  const formatDate = (date: string) => {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`; // Chuyển thành yyyy-MM-dd
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    suitableForDisability: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: formatDate("28-02-2025"),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputFields = [
    {
      type: "text",
      name: "title",
      placeholder: "Tiêu đề tin tuyển dụng",
      isInput: true,
    },
    {
      type: "text",
      name: "salaryMin",
      placeholder: "Lương tối thiểu",
      isInput: true,
    },
    {
      type: "text",
      name: "salaryMax",
      placeholder: "Lương tối đa",
      isInput: true,
    },
    {
      type: "text",
      name: "applicationDeadline",
      placeholder: "Thời hạn tuyển dụng",
      isInput: true,
    },
  ];

  const textAreaFields = [
    { name: "description", placeholder: "Mô tả tin tuyển dụng" },
    { name: "requirements", placeholder: "Yêu cầu của việc làm" },
    { name: "responsibilities", placeholder: "Trách nhiệm" },
    { name: "benefits", placeholder: "Phúc lợi" },
    {
      name: "suitableForDisability",
      placeholder: "Phù hợp cho người khuyết tật nào",
    },
    { name: "location", placeholder: "Địa chỉ" },
    { name: "jobType", placeholder: "Loại công việc" },
  ];

  const handleSubmit = () => {
    api
      .JobPosting(formData)
      .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="z-[9999] mx-auto max-w-2xl rounded-lg bg-white p-6 text-gray-800 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Đăng Tin Tuyển Dụng</h2>

      <div className="max-h-[600px] overflow-y-auto">
        {/* Input bình thường */}
        {inputFields.map((item, index) => (
          <input
            key={index}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className="mb-4 w-full rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            value={formData[item.name as keyof typeof formData]}
          />
        ))}

        {/* Textarea lớn */}
        {textAreaFields.map((item, index) => (
          <textarea
            key={index}
            name={item.name}
            placeholder={item.placeholder}
            rows={4}
            className="mb-4 w-full rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            value={formData[item.name as keyof typeof formData]}
          />
        ))}

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Đăng Tin
        </button>
      </div>
    </div>
  );
}
