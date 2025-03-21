import { useContext } from "react";
import MenuSibar from "../../ComponentsDashBoard/SibarMenu";
import HeaderDashBoard from "../HeaderDashBoard";
import { MenuContext } from "../../Context/MenuProvider";
import dataMenuu, { MenuItem } from "../../ComponentsDashBoard/Contants/index";
type Props = {
  children: React.ReactNode;
};

function HomePagesDashBoard({ children }: Props) {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isType } = menuContext;
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <HeaderDashBoard MenuItem={dataMenuu.headerMenu as MenuItem[]} />
      <div className="flex flex-1 overflow-hidden">
        <MenuSibar
          nameUser="Luan DO"
          role="Employer"
          dataMenu={dataMenuu.sidebarMenu as any}
        />
        <div className="flex flex-1 flex-col">
          <div className="flex h-[50px] w-full items-center border-l-1 border-[#e1e1e1] p-2 font-bold shadow-2xl">
            {isType === "Login" ? "DashBoard" : isType}
          </div>
          <div className="flex-1 overflow-auto bg-gray-200 p-4 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagesDashBoard;
