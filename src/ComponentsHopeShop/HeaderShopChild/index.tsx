import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
function HeaderShopChild() {
  const dataHeader = [
    { id: 0, name: "Hotline: 0918 607 139" },
    { id: 1, name: "Email: hopevn@gmail.com" },
    { id: 2, name: "Miễn phí vận chuyển cho hóa đơn trên 500.000đ" },
  ];

  const [index, setIndex] = useState(0);

  const prevText = () => {
    setIndex((prev) => (prev === 0 ? dataHeader.length - 1 : prev - 1));
  };

  const nextText = () => {
    setIndex((prev) => (prev + 1) % dataHeader.length);
  };
  return (
    <>
      {/* Header chạy chữ */}
      <div className="top-0 w-full h-[40px] bg-[#00b14f] flex items-center justify-center">
        <div className="flex items-center justify-between gap-5 sm:gap-20 text-white font-medium w-3xl">
          <IoIosArrowBack
            size={20}
            className="cursor-pointer"
            onClick={prevText}
          />
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-lg"
            >
              {dataHeader[index].name}
            </motion.p>
          </AnimatePresence>
          <IoIosArrowForward
            size={20}
            className="cursor-pointer"
            onClick={nextText}
          />
        </div>
      </div>
    </>
  );
}

export default HeaderShopChild;
