import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Context/MenuProvider";
import { FaRegUser } from "react-icons/fa";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type LayoutProps = {
  nameUser: string;
  role: string;
  dataMenu?: {
    id?: string;
    title?: any;
    icon?: LucideIcon;
    badge?: string;
  }[];
};

function MenuSibar({ dataMenu = [], nameUser, role }: LayoutProps) {
  const menuContext = useContext(MenuContext);
  const navigate = useNavigate();

  if (!menuContext) return null; // Tránh lỗi khi menuContext không tồn tại

  const { isOpenSibar, setIsType, isType } = menuContext;

  // Lấy dữ liệu từ localStorage
  const [clickMe, setClickMe] = useState<number>(() => {
    return parseInt(localStorage.getItem("clickMe") || "0", 10);
  });

  // Xử lý sự kiện click vào menu
  const handleClickMe = async (index: number, id: string) => {
    if (id === "Logout") {
      Cookies.remove("token");
      localStorage.removeItem("isType");
      localStorage.removeItem("clickMe");

      await new Promise((resolve) => setTimeout(resolve, 100)); // Chờ cập nhật state
      navigate("/");
      window.location.reload();
      return;
    }

    if (clickMe !== index) {
      setClickMe(index);
    }
    setIsType(id);
  };

  // Lưu clickMe vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem("clickMe", clickMe.toString());
  }, [clickMe]);

  // Lưu isType vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem("isType", isType);
  }, [isType]);

  return (
    <div
      className={`flex h-auto flex-col gap-4 bg-white p-2 shadow-2xl transition-all duration-500 ease-in-out ${
        isOpenSibar ? "w-[300px]" : "w-[50px]"
      }`}
    >
      {/* Hiển thị thông tin user */}
      <div className="flex items-center gap-2">
        <FaRegUser size={25} />
        <div className={`${isOpenSibar ? "" : "hidden"} text-sm font-medium`}>
          <p>{nameUser}</p>
          <p className="text-[12px]">{role}</p>
          <p className="text-[12px]">
            Tài khoản xác thực: <span className="text-green-500"> Cấp 1/3</span>
          </p>
        </div>
      </div>

      {/* Hiển thị menu */}
      <div className="flex flex-col gap-4">
        <div className="h-[1px] w-full bg-gray-200"></div>
        {dataMenu.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center gap-2 ${
              index === clickMe ? "text-green-600" : ""
            }`}
            onClick={() => handleClickMe(index, item.id || "")}
          >
            <div>{item.icon && <item.icon />}</div>
            <div className={`${isOpenSibar ? "" : "hidden"}`}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSibar;
