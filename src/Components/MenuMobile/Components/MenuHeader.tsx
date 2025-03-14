import { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../../Context/MenuProvider";
function MenuHeader() {
  const [isShowMenu] = useState<number | null>(null);

  //   ${isOpen ? "left-0 opacity-100" : "left-[-2500px] opacity-0"}
  const menu: {
    name: string;
    id: number;
  }[] = [
    { name: "Trang Chủ", id: 1 },
    { name: "Giới thiệu", id: 1 },
    { name: "Liên hệ", id: 2 },
    { name: "Ứng tuyển", id: 2 },
    { name: "Giúp đỡ", id: 2 },
    { name: "Khó khăn", id: 2 },
  ];
  const navigate = useNavigate();
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { setIsOpen, isOpen, isType } = menuContext;
  const handleRenderComponents = (i: string) => {
    if (i === "Giới thiệu") {
      navigate("/Gioi-Thieu");
      setIsOpen(false);
    }
    if (i === "Trang Chủ") {
      navigate("/");
      setIsOpen(false);
    }
    if (i === "/app/register") {
      navigate("/app/register");
    }
  };
  return (
    <div className="flex flex-col gap-3 p-5">
      {menu.map((i, k) => (
        <div className="rounded-2xl border border-[#e1e1e1] p-2" key={k}>
          <div
            onClick={() => handleRenderComponents(i.name)}
            className="flex cursor-pointer justify-between text-[16px] font-medium text-[#00c951] hover:text-[#1890ff]"
          >
            <p className="cursor-pointer">{i.name}</p>
            {i.name !== "Giới thiệu" && i.name !== "Trang Chủ" && (
              <p className="text-2xl font-bold">
                {isShowMenu === k ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </p>
            )}
          </div>
        </div>
      ))}
      <p className="font-medium text-[#333]">Dành cho nhà tuyển dụng</p>
      <div className="">
        <div className="rounded-2xl border border-[#e1e1e1] p-2">
          <div
            onClick={() => handleRenderComponents("/app/register")}
            className="flex cursor-pointer justify-between text-[16px] font-medium text-[#00c951] hover:text-[#1890ff]"
          >
            <p className="cursor-pointer">Đăng tin tuyển dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
