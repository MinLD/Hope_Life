import { IoIosArrowDown } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
function SearchBox() {
  return (
    <div className="max-w-[80%] p-2 pt-35">
      <div className="relative sm:hidden">
        <input
          type="text"
          className="w-full rounded-2xl border border-[#e1e1e1] p-2 shadow-2xl outline-none"
          placeholder="Tìm kiếm..."
        />
        <div className="absolute top-1/2 right-3 -translate-y-[50%] transform text-3xl">
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
      <div className="hidden h-auto w-full items-center gap-2 rounded-lg border border-[#82afed] bg-[#f0f6ff] p-2 lg:flex">
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
