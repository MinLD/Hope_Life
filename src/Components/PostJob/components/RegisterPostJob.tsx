import { useState } from "react";

import ContractAgreement from "../../ContractAgreement";

function RegisterPostJob() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-3xl pb-5">
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-bold text-gray-900">H O</span>
        <span className="text-3xl font-bold text-green-500">P E</span>
      </div>

      <h1 className="mt-4 text-2xl font-bold text-green-600">
        Đăng ký tài khoản Nhà tuyển dụng
      </h1>
      <p className="mt-2 text-gray-600">
        Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển
        dụng ứng dụng sâu AI & Hiring Funnel.
      </p>

      {/* Accordion */}
      <div className="mt-6 max-w-md overflow-hidden rounded-lg border border-green-600">
        <button
          className="flex w-full items-center justify-between p-4 text-left font-bold text-green-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          Quy định
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && <ContractAgreement />}
      </div>
    </div>
  );
}

export default RegisterPostJob;
