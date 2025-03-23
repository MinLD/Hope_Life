import { useContext, useState } from "react";
import dataMenu from "../../../ComponentsDashBoard/Contants/index";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { StoreContext } from "../../../Context/StoreProvider";
function MenuDashBoard() {
  const [isShowMenu] = useState<number | null>(null);
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { handleLogout } = storeContext;
  const handleRenderComponents = (i: string) => {
    if (i === "Đăng xuất") {
      handleLogout?.();
    }
  };
  return (
    <div className="flex flex-col gap-3 p-5">
      {dataMenu.headerMenu.map((i, k) => (
        <div
          className="rounded-2xl border border-[#e1e1e1] p-2"
          onClick={() => handleRenderComponents(i.title)}
        >
          <div className="flex cursor-pointer justify-between text-[16px] font-medium text-[#00c951] hover:text-[#1890ff]">
            <p className="cursor-pointer">{i.title}</p>
            <p className="text-2xl font-bold">
              {isShowMenu === k ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuDashBoard;
