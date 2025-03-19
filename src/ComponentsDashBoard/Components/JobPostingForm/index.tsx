import { useState } from "react";

export default function JobPostingForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    requirements: "",
    salary: "",
    location: "",
    applicationMethod: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Tin tuyển dụng đã được gửi thành công!");
    console.log("Job Posting Data:", formData);
  };

  return (
    <div className="z-[9999] mx-auto max-w-2xl rounded-lg p-6 text-[#4a3f62] shadow-lg bg-[#ffff]">
      <h2 className="mb-4 text-2xl font-bold">Đăng Tin Tuyển Dụng</h2>

      <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[400px]">
        <label className="mb-2 block font-semibold">Tên Công Ty</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        />

        <label className="mb-2 block font-semibold">Vị Trí Tuyển Dụng</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        />

        <label className="mb-2 block font-semibold">Mô Tả Công Việc</label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        ></textarea>

        <label className="mb-2 block font-semibold">Yêu Cầu</label>
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        ></textarea>

        <label className="mb-2 block font-semibold">Mức Lương</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
        />

        <label className="mb-2 block font-semibold">Địa Điểm Làm Việc</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        />

        <label className="mb-2 block font-semibold">Cách Ứng Tuyển</label>
        <input
          type="text"
          name="applicationMethod"
          value={formData.applicationMethod}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Đăng Tin
        </button>
      </form>
    </div>
  );
}
