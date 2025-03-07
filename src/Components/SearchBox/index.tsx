import { IoIosArrowDown } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";

function SearchBox() {
  return (
    <div className="pb-2">
      <div className="flex gap-2 pt-10 pb-2">
        <div className="bg-amber-10 w-50% flex h-auto gap-2">
          <div className="flex items-center gap-1">
            <IoFilterOutline /> Lọc theo:
          </div>
          <div className="flex items-center gap-3">
            Địa điểm
            <IoIosArrowDown />
          </div>
        </div>
        <div className="w-50% h-auto">
          <input
            type="text"
            className="rounded-2xl border p-2"
            placeholder="tìm kiếm..."
          />
        </div>
      </div>
      <div className="flex h-auto w-full items-center gap-2 rounded-lg border border-[#82afed] bg-[#f0f6ff] p-2">
        {" "}
        <FaLightbulb className="text-[#1a6fe6]" />
        <p className="text-md">
          {" "}
          <b>Gợi ý:</b> Di chuột vào tiêu đề việc làm để xem thêm thông tin chi
          tiết
        </p>
      </div>
    </div>
  );
}

export default SearchBox;
