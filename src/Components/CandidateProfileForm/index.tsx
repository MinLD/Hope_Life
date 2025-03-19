import { useState } from "react";

export default function CandidateProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    experience: "",
    skills: "",
    education: "",
    cvFile: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("CV của bạn đã được gửi thành công!");
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold">
        Ứng tuyển công việc
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Họ và tên"
          required
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          required
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Địa chỉ"
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Vị trí ứng tuyển"
          required
          className="w-full rounded border p-2"
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Kinh nghiệm làm việc"
          className="w-full rounded border p-2"
          onChange={handleChange}
        ></textarea>

        <textarea
          name="skills"
          placeholder="Kỹ năng"
          className="w-full rounded border p-2"
          onChange={handleChange}
        ></textarea>

        <textarea
          name="education"
          placeholder="Học vấn"
          className="w-full rounded border p-2"
          onChange={handleChange}
        ></textarea>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full rounded border p-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Gửi CV
        </button>
      </form>
    </div>
  );
}
