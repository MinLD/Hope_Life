import { useContext, useState } from "react";
import { MenuContext } from "../../Context/MenuProvider";

import { FaRegUser } from "react-icons/fa";
import { LucideIcon } from "lucide-react";

type layoutProps = {
  nameUser: string;
  role: string;
  dataMenu?: {
    id?: string;
    title?: any;
    icon?: LucideIcon;
    badge?: string;
  }[];
};

function MenuSibar({ dataMenu = [], nameUser, role }: layoutProps) {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isOpenSibar, setIsType } = menuContext;
  const [ClickMe, setClickMe] = useState<Number>(0);
  const handleClickMe = (k: number, i: string) => {
    setClickMe(k);
    setIsType(i);
  };

  return (
    <div
      className={`flex h-auto flex-col gap-4 bg-[#fff] p-2 shadow-2xl transition-all duration-500 ease-in-out ${isOpenSibar ? "w-[300px]" : "w-[50px]"}`}
    >
      <div className="flex items-center gap-2">
        <FaRegUser size={25} />
        <div className={`${isOpenSibar ? "" : "hidden"} text-sm font-medium`}>
          <p>{nameUser}</p>
          <p className="text-[12px]">{role}</p>
          <p className="text-[12px]">
            Tài khoản xác thực:<span className="text-[#16b741]"> Cấp 1/3</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-[1px] w-full bg-[#e1e1e1]"></div>
        {dataMenu.map((i, k) => (
          <div
            key={k}
            className={`flex items-center gap-2 ${k === ClickMe && "text-[#00b14f]"} cursor-pointer`}
            onClick={() => handleClickMe(k, i.id || "")}
          >
            <div>{i.icon && <i.icon />}</div>
            <div className={`${isOpenSibar ? "" : "hidden"}`}>{i.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSibar;
