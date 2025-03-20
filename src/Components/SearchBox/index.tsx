import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function SearchBox() {
  const [isShowNati, setIsShowNati] = useState(true);
  return (
    <div className="max-w-[100%] p-2 pt-10">
      <div className="relative max-w-[70%] sm:hidden">
        <input
          type="text"
          className="w-full rounded-2xl border border-[#e1e1e1] p-2 shadow-2xl outline-none"
          placeholder="Tìm kiếm..."
        />
        <div className="absolute top-1/2 right-3 -translate-y-[50%] transform text-2xl">
          <CiSearch />
        </div>
      </div>
      <div className="flex gap-2 pt-2 pb-2">
        <div className="bg-amber-10 w-50% flex h-auto gap-2">
          <div className="flex items-center gap-1">
            <IoFilterOutline /> Lọc theo:
          </div>
          <div className="flex items-center gap-3">
            Địa điểm
            <IoIosArrowDown />
          </div>
        </div>
        <div className="hidden h-auto w-auto sm:flex">
          <input
            type="text"
            className="rounded-2xl border p-2"
            placeholder="tìm kiếm..."
          />
        </div>
      </div>
      {isShowNati && (
        <div className="relative h-auto w-full rounded-lg border border-[#82afed] bg-[#f0f6ff] p-2">
          {" "}
          <p className="text-md flex gap-2 flex-col mddd:flex-row">
            {" "}
            <div className="flex items-center gap-1">
              {" "}
              <FaLightbulb className="text-[#1a6fe6]" />
              <b>Gợi ý:</b>
            </div>
            <span>
              {" "}
              bạn có thể kéo sang trái để xem hết hình ảnh, hoặc bấm trực tiếp
              vào ảnh để xem rõ hơn!!!
            </span>
          </p>
          <div className="cursor-pointer absolute top-0 right-4" onClick={() => setIsShowNati(false)}>
            <IoIosClose size={30} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
