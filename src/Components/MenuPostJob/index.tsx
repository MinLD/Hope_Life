import { useState } from "react";
import MyLayout from "../../Layout/MyLayOut";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Filter,
} from "lucide-react";
import { FaCheck } from "react-icons/fa";
type Props = {
  ElementTotols: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isPage: number;
};
function MenuPostJob({ ElementTotols, setPage, isPage }: Props) {
  const menuSeach: { id: number; name: string }[] = [
    {
      id: 0,
      name: "Địa điểm",
    },
    {
      id: 1,
      name: "Mức lương",
    },
    {
      id: 2,
      name: "Kinh nghiệm",
    },
    {
      id: 3,
      name: "Ngành nghề",
    },
  ];
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isName, setName] = useState<string>("Địa điểm");
  const [isRender, setRender] = useState<number>(0);
  const hadleActive = (id: number, name: string) => {
    setName(name);
    setRender(id);
  };
  return (
    <MyLayout>
      <div className="flex flex-col gap-2 py-2">
        <div className="s:flex-row flex justify-between py-2 flex-col">
          {/* Tiêu đề */}
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-green-600">
              Việc làm tốt nhất
            </h2>
            <div className="h-7 w-[1px] bg-[#333]"></div>
            <span className="flex flex-col text-xs text-gray-500 items-center">
              Đề xuất bởi{" "}
              <strong className="text-black">
                H O<span className="text-green-500"> P E</span>
              </strong>
            </span>
          </div>

          {/* Điều hướng */}
          <div className=" flex items-center gap-2">
            <a href="#" className="text-sm text-black underline">
              Xem tất cả
            </a>
            <div className="flex items-center gap-4">
              <button
                className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
                onClick={() => setPage(isPage - 1)}
                disabled={isPage === 1}
              >
                <ChevronLeft size={16} />
              </button>

              <button
                className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
                onClick={() => setPage(isPage + 1)}
                disabled={isPage === Math.ceil(ElementTotols / 12)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        {/* Bộ lọc */}
        <div className="relative flex items-center gap-4 max-w-[260px]   z-[9]">
          <div
            className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-sm cursor-pointer "
            onClick={() => setIsShow(!isShow)}
          >
            {/* Icon Filter */}
            <Filter size={18} className="text-gray-400" />

            {/* Text */}
            <span className="text-gray-400">Lọc theo:</span>
            <span className="font-medium text-gray-700">{isName}</span>

            {/* Dropdown Icon */}
            {isShow ? (
              <ChevronUp size={18} className="ml-auto text-gray-500" />
            ) : (
              <ChevronDown size={18} className="ml-auto text-gray-500" />
            )}
          </div>
          {isShow && (
            <>
              <div className="left-0  absolute w-full top-12 h-auto bg-[#fff] rounded-2xl shadow-2xl">
                {menuSeach.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-2 px-5 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => hadleActive(item.id, item.name)}
                  >
                    <span
                      className={`${isRender === index && "text-green-600"} font-medium text-gray-700`}
                    >
                      {item.name}
                    </span>
                    {isRender === index ? (
                      <FaCheck className="text-green-600" />
                    ) : null}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </MyLayout>
  );
}

export default MenuPostJob;
