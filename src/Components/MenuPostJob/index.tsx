import MyLayout from "../../Layout/MyLayOut";

import { ChevronDown, ChevronLeft, ChevronRight, Filter } from "lucide-react";

function MenuPostJob() {
  //   const locations = [
  //     "Ngẫu Nhiên",
  //     "Hà Nội",
  //     "Thành phố Hồ Chí Minh",
  //     "Miền Bắc",
  //     "Miền Nam",
  //   ];
  //   const [selected, setSelected] = useState("Ngẫu Nhiên");
  return (
    <MyLayout>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex items-center justify-between py-2">
          {/* Tiêu đề */}
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-green-600">
              Việc làm tốt nhất
            </h2>
            <div className="h-7 w-[1px] bg-[#333]"></div>
            <span className="flex flex-col text-xs text-gray-500">
              Đề xuất bởi{" "}
              <strong className="text-black">
                H O<span className="text-green-500"> P E</span>
              </strong>
            </span>
          </div>

          {/* Điều hướng */}
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm text-black underline">
              Xem tất cả
            </a>
            <button className="rounded-full border p-2 text-green-500 hover:bg-green-100">
              <ChevronLeft size={16} />
            </button>
            <button className="rounded-full border p-2 text-green-500 hover:bg-green-100">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        {/* Bộ lọc */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-sm">
            {/* Icon Filter */}
            <Filter size={18} className="text-gray-400" />

            {/* Text */}
            <span className="text-gray-400">Lọc theo:</span>
            <span className="font-medium text-gray-700">Địa điểm</span>

            {/* Dropdown Icon */}
            <ChevronDown size={18} className="ml-auto text-gray-500" />
          </div>
          <button className="rounded-full border p-2 text-green-500 hover:bg-green-100">
            <ChevronLeft size={16} />
          </button>
          {/* {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelected(loc)}
              className={`rounded-4xl px-4 py-3 text-sm ${
                selected === loc
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {loc}
            </button>
          ))} */}
          <button className="rounded-full border p-2 text-green-500 hover:bg-green-100">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </MyLayout>
  );
}

export default MenuPostJob;
