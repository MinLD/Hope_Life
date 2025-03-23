import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

interface Donor {
  name: string;
  amount: number;
}

interface DonationProps {
  name?: string;
  age?: number;
  location?: string;
  story?: string;
  qrValue?: string;
  accountNumber?: string;
  contact?: string;
  image?: string;
  donors?: Donor[];
  isOpen: boolean;
  onClose: () => void;
}

const DonationCard: React.FC<DonationProps> = ({
  name = "Nguyễn Văn A",
  age = 45,
  location = "Hà Nội, Việt Nam",
  story = "Anh Nguyễn Văn A là một lao động chính trong gia đình có 3 con nhỏ. Không may, anh gặp tai nạn lao động nghiêm trọng khiến gia đình rơi vào hoàn cảnh khó khăn. Hiện anh đang rất cần sự giúp đỡ để có thể tiếp tục chữa trị và ổn định cuộc sống.",
  qrValue = "https://banking.example.com/donate",
  accountNumber = "0123456789 - Ngân hàng Vietcombank",
  contact = "Số điện thoại: 0987 654 321",
  image = "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Nhat_Minh__2.jpg",
  donors = [
    { name: "Trần B", amount: 500000 },
    { name: "Lê C", amount: 200000 },
    { name: "Nguyễn D", amount: 1000000 },
  ],
  isOpen,
  onClose,
}) => {
  const [refundInfo, setRefundInfo] = useState({
    name: "",
    amount: "",
    reason: "",
  });
  const [isRefundOpen, setIsRefundOpen] = useState(false);

  const handleRefundSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Yêu cầu hoàn tiền:", refundInfo);
    setIsRefundOpen(false);
  };

  const totalDonated = donors.reduce((sum, donor) => sum + donor.amount, 0);
  useEffect(() => {
    if (isOpen || isRefundOpen) {
      document.body.style.overflow = "hidden"; // Ngăn cuộn khi mở popup
    } else {
      document.body.style.overflow = "auto"; // Cho phép cuộn khi đóng popup
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset khi component unmount
    };
  }, [isOpen, isRefundOpen]);

  return (
    <>
      {isOpen && (
        <div onClick={onClose}>
          <div
            className="bg-opacity-50 fixed inset-0 z-[9999999] flex items-center justify-center bg-black opacity-70"
            onClick={onClose}
          ></div>
          <div className="bg-opacity-50 fixed inset-0 z-[9999999] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative max-h-[90vh] w-96 overflow-y-auto rounded-lg bg-white p-6 shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute top-0 right-4 text-[64px] text-[#c5c5c5]"
              >
                ×
              </button>
              <img
                src={image}
                alt={name}
                className="mb-4 h-60 w-full rounded-lg object-cover"
              />
              <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
                Ủng hộ cho {name}
              </h2>
              <p className="text-md text-center text-gray-600">
                Tuổi: {age} | Địa điểm: {location}
              </p>
              <p className="mt-4 text-justify leading-relaxed text-gray-700">
                {story}
              </p>
              <div className="mt-6 mb-4 flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-md">
                <QRCode value={qrValue} size={150} className="mb-4" />
                <p className="text-center text-sm text-gray-600">
                  Quét mã QR để quyên góp
                </p>
                <a
                  href={qrValue}
                  target="_blank"
                  className="mt-2 text-blue-500 underline"
                >
                  Hoặc bấm vào đây để chuyển khoản
                </a>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-700">
                  Số tài khoản:{" "}
                  <span className="text-blue-600">{accountNumber}</span>
                </p>
                <p className="text-md mt-2 text-gray-600">{contact}</p>
              </div>
              <div className="mt-6 rounded-lg bg-gray-100 p-4 shadow-md">
                <h3 className="text-xl font-bold text-gray-800">
                  Tổng số tiền đã quyên góp:{" "}
                  <span className="text-green-600">
                    {totalDonated.toLocaleString()} VNĐ
                  </span>
                </h3>
                <h4 className="mt-3 text-lg font-semibold text-gray-700">
                  Danh sách người quyên góp:
                </h4>
                <ul className="mt-2">
                  {donors.map((donor, index) => (
                    <li key={index} className="text-gray-600">
                      {donor.name}:{" "}
                      <span className="text-blue-600">
                        {donor.amount.toLocaleString()} VNĐ
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setIsRefundOpen(true)}
                className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Yêu cầu hoàn tiền
              </button>
            </motion.div>
          </div>
        </div>
      )}
      {isRefundOpen && (
        <div>
          <div
            className="bg-opacity-50 fixed inset-0 z-[9999999] flex items-center justify-center bg-black opacity-70"
            onClick={onClose}
          ></div>
          <div className="bg-opacity-50 fixed inset-0 z-[9999999] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-96 rounded-lg bg-white p-6 shadow-2xl"
            >
              <h2 className="mb-4 text-center text-2xl font-bold">
                Yêu cầu hoàn tiền
              </h2>
              <form onSubmit={handleRefundSubmit}>
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="mb-2 w-full rounded border p-2"
                  required
                  value={refundInfo.name}
                  onChange={(e) =>
                    setRefundInfo({ ...refundInfo, name: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Số tiền muốn hoàn"
                  className="mb-2 w-full rounded border p-2"
                  required
                  value={refundInfo.amount}
                  onChange={(e) =>
                    setRefundInfo({ ...refundInfo, amount: e.target.value })
                  }
                />
                <textarea
                  placeholder="Lý do hoàn tiền"
                  className="mb-2 w-full rounded border p-2"
                  required
                  value={refundInfo.reason}
                  onChange={(e) =>
                    setRefundInfo({ ...refundInfo, reason: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full rounded bg-blue-600 py-2 text-white"
                >
                  Gửi yêu cầu
                </button>
              </form>
              <button
                onClick={() => setIsRefundOpen(false)}
                className="mt-4 block w-full text-center text-red-500"
              >
                Hủy bỏ
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationCard;
