import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FromUT() {
  const [position, setPosition] = useState("");
  const [budget, setBudget] = useState(0);
  const [field, setField] = useState("");
  const [consultation, setConsultation] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!position) {
      setError(true);
      return;
    }
    setError(false);
    alert("Form submitted successfully!");
  };
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-3xl rounded-lg p-6 shadow-xl">
      <h2 className="mb-4 text-xl font-semibold">Nhu cầu tư vấn</h2>
      <p className="mb-4 text-gray-600">
        Hãy giúp chúng tôi tìm hiểu nhu cầu của bạn bằng cách hoàn thành các câu
        hỏi sau:
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">
            Bạn đang tuyển dụng vị trí nào? *
          </label>
          <input
            type="text"
            className={`w-full rounded-md border p-2 ${error ? "border-red-500" : "border-gray-300"}`}
            placeholder="Nhập vị trí tuyển dụng"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          {error && (
            <p className="text-sm text-red-500">
              Vị trí tuyển dụng không được để trống
            </p>
          )}
        </div>
        <div>
          <label className="block font-medium">Lĩnh vực</label>
          <select
            className="w-full rounded-md border border-gray-300 p-2"
            value={field}
            onChange={(e) => setField(e.target.value)}
          >
            <option value="">Chọn lĩnh vực hoạt động</option>
            <option value="IT">Công nghệ thông tin</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Tài chính</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">
            Ngân sách tuyển dụng cho vị trí này của bạn là?
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-full rounded-md border border-gray-300 p-2"
              value={budget}
              onChange={(e: any) => setBudget(e.target.value)}
            />
            <select className="rounded-md border border-gray-300 p-2">
              <option>VND/tháng</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block font-medium">
            Bạn có nhu cầu cần tư vấn kỹ hơn về vấn đề nào không?
          </label>
          <select
            className="w-full rounded-md border border-gray-300 p-2"
            value={consultation}
            onChange={(e) => setConsultation(e.target.value)}
          >
            <option value="">-- Chọn --</option>
            <option value="HR">Nhân sự</option>
            <option value="Salary">Mức lương</option>
            <option value="Process">Quy trình tuyển dụng</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 p-2 text-white hover:bg-green-600"
          onClick={() => navigate("/app/dashboard")}
        >
          Hoàn thành →
        </button>
      </form>
    </div>
  );
}
