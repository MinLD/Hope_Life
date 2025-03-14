import { useState } from "react";

const SuggestedServiceModal = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(true);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

  const options = [
    "Hỗ trợ quảng cáo và tăng lượt tiếp cận với ứng viên",
    "Chủ động kết nối và mở thông tin hồ sơ ứng viên",
    "Làm nổi bật tin tuyển dụng để tăng hiệu quả với ứng viên",
    "Xây dựng hình ảnh thương hiệu tuyển dụng uy tín, nâng cao hiệu quả hoạt động tuyển dụng",
  ];

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center shadow-2xl">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg font-semibold">Gợi ý gói dịch vụ phù hợp</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <p className="mt-4 text-gray-700">
          Hãy chọn một trong các nhu cầu bên dưới để chúng tôi có thể giúp bạn
          đưa ra gợi ý chính xác nhất nhé.
        </p>
        <div className="mt-4">
          {options.map((option) => (
            <label
              key={option}
              className={`mt-2 flex cursor-pointer items-center rounded-lg border p-4 transition ${selectedOption === option ? "border-green-500 bg-gray-100" : "border-gray-300"}`}
              onClick={() => setSelectedOption(option)}
            >
              <input
                type="radio"
                name="service-option"
                className="hidden"
                checked={selectedOption === option}
                readOnly
              />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedOption === option ? "border-green-500" : "border-gray-400"}`}
              >
                {selectedOption === option && (
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                )}
              </div>
              <span className="ml-3 text-gray-800">{option}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={dontShowAgain}
              onChange={() => setDontShowAgain(!dontShowAgain)}
            />
            Không hiển thị lại nội dung này
          </label>
          <button
            className="rounded-lg bg-green-500 px-6 py-2 text-white hover:bg-green-600"
            onClick={() => setShowModal(false)}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedServiceModal;
