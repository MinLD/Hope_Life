import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { addHours, format, parseISO } from "date-fns";

import api from "../../Services/PostApi";
import { toast } from "react-toastify";
import { PostContext } from "../../Context/PostProvider";
import MyButton from "../Button";
import ApiAdmin from "../../Services/ApiAdmin";
type UserDonor = {
  donatedAt: string;
  donatedMoney: number;
  id: string;
  postId: string;
  postTitle: string;
  userEmail: string;
  userId: string;
  userName: string;
};

type Props = {
  onClose: (value: any) => void;
  fund: any;
  id?: any;
};
export default function DonationPostVolun({ onClose, fund, id }: Props) {
  const postcontext = useContext(PostContext);
  if (!postcontext) {
    return;
  }
  const { isFund, isTypePost } = postcontext;
  const MAX_DONATION = fund;
  const [togleAmout, setTogleAmout] = useState<number>(0);
  const [amount, setAmount] = useState<number | any>(0);
  const [donors, setDonors] = useState<UserDonor[]>([]);
  const convertToVietnamTime = (dateString: string) => {
    const utcDate = parseISO(dateString); // Chuyển từ chuỗi ISO sang Date
    const vietnamDate = addHours(utcDate, 7); // Cộng thêm 7 tiếng nếu dữ liệu gốc ở UTC
    return format(vietnamDate, "HH:mm:ss dd/MM/yyyy");
  };
  const handleActivePost = (id: any) => {
    ApiAdmin.RestorePostVolunn(id)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Đã gửi yêu cầu hoàn vốn bài viet!");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response?.data?.message || "Có lỗi xảy ra");
      });
  };
  const handleDonatePost = () => {
    if (amount > isFund) {
      toast.success("Bạn không đủ tiền để ủng hộ!");
      return;
    }
    // if (amount <= 1000) {
    //   toast.warning("Số tiền ủng hộ phải lớn hơn 1.000đ");
    //   return;
    // }
    api
      .DonatePostVolunn(id, amount)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Ủng hộ thành công");
        handleGetAllUserDonate();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response?.data?.message || "Có lỗi xảy ra");
      });
  };

  const handleGetAllUserDonate = () => {
    api
      .GetAlldonatePostVolunn(id)
      .then((res) => {
        console.log(res.data.result);
        setDonors(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAllUserDonate();
  }, []);

  useEffect(() => {
    setTogleAmout(donors.reduce((acc, item) => acc + item.donatedMoney, 0));
  }, [donors]);

  return (
    <div>
      <div
        onClick={() => onClose(false)}
        className=" fixed w-full min-h-screen bg-black top-1/2 left-1/2 transform -translate-x-1/2
      -translate-y-1/2 z-[9999] opacity-50"
      ></div>
      <div
        className="z-[9999] w-full s:max-w-[700px] rounded-2xl  flex flex-col items-center px-1   space-y-10 py-5 fixed bg-[#fff] shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2
      -translate-y-1/2
    "
      >
        {isTypePost === "postVolunn" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="p-1 bg-white">
              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Nhập số tiền"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="p-3 border rounded-lg w-full"
                />
                <button
                  onClick={handleDonatePost}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
                >
                  Xác Nhận Ủng Hộ
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="p-6 w-full ">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Danh Sách Ủng Hộ
            </h2>
            <ul className="mt-4 space-y-2 overflow-y-scroll max-h-[300px]">
              {donors.map((donor, index) => {
                return (
                  <div key={index} className="mb-3">
                    <span>STT: {index + 1}</span>
                    <li className="flex justify-between bg-gray-100 p-3 rounded-lg flex-col s:flex-row ">
                      <span>{convertToVietnamTime(donor.donatedAt)}</span>
                      <span>{donor.userEmail || "Không có email"}</span>
                      <span className="font-bold text-blue-600">
                        {donor?.donatedMoney?.toLocaleString() || "0"} VND
                      </span>
                    </li>
                  </div>
                );
              })}
              {donors.length === 0 && <>hãy là người ủng hộ đầu tiên!</>}
            </ul>
            <div className="mt-6">
              <div className="text-center mt-2 font-bold text-lg text-gray-800">
                {togleAmout?.toLocaleString()} VND /{" "}
                {MAX_DONATION?.toLocaleString()} VND
              </div>
            </div>
          </div>
          {isTypePost === "paybackpost" && (
            <div className="" onClick={() => handleActivePost(id)}>
              <MyButton content={"Yêu cầu hoàn vốn"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
