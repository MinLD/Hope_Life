import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function RegisterPostJob() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="mx-auto max-w-2xl p-6">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-gray-900">H O</span>
          <span className="text-3xl font-bold text-green-500">P E</span>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-green-600">
          Đăng ký tài khoản Nhà tuyển dụng
        </h1>
        <p className="mt-2 text-gray-600">
          Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ
          tuyển dụng ứng dụng sâu AI & Hiring Funnel.
        </p>

        {/* Accordion */}
        <div className="mt-6 overflow-hidden rounded-lg border border-green-600">
          <button
            className="flex w-full items-center justify-between p-4 text-left font-bold text-green-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            Quy định
            <span>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div
              className={`space-y-2 p-4 text-gray-700 transition-all duration-500 ${isOpen ? "opacity-[100%]" : "opacity-[0%]"}`}
            >
              <p>
                Để đảm bảo chất lượng dịch vụ,{" "}
                <span className="font-bold text-red-500">
                  HOPE không cho phép một người dùng tạo nhiều tài khoản khác
                  nhau.
                </span>
              </p>
              <p>
                Nếu phát hiện vi phạm, HOPE sẽ ngừng cung cấp dịch vụ tới tất cả
                các tài khoản trùng lặp hoặc chặn toàn bộ truy cập.
              </p>
              <p>
                Sau khi đăng ký tài khoản, nhà tuyển dụng có thể được hỗ trợ
                hiển thị tin tuyển dụng cơ bản, ngoại trừ một số vị trí nhất
                định.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-green-600 md:flex-row md:justify-between">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt /> <span>(84+) 0918607139</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt /> <span>(84+) 0918607139</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterPostJob;
