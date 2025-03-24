import { useContext} from "react";
import { CgMenuGridO, CgMenuRound } from "react-icons/cg";
import { MenuContext } from "../../Context/MenuProvider";
import { TbMenuDeep } from "react-icons/tb";

import { LucideIcon } from "lucide-react";
import JobPostingForm from "../../ComponentsDashBoard/Components/JobPostingForm";
import { StoreContext } from "../../Context/StoreProvider";
import logo from "../../assets/logoanhiu1.png"
type props = {
  MenuItem?: {
    id?: string;
    title?: any;
    icon?: LucideIcon;
    badge?: string;
  }[];
};

function HeaderDashBoard({ MenuItem = [] }: props) {
  const storeContext = useContext(StoreContext);
  if (!storeContext || !storeContext.handleLogout) return;
  const { handleLogout } = storeContext;
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { setIsOpenMenu, isOpenMenu } = menuContext;
  const { setIsOpenSibar, isOpenSibar, setIsOpen, setIsType } = menuContext;
  const handlOpenSibar = () => {
    setIsOpenSibar(!isOpenSibar);
  };
  const handleShowMenuMobile = () => {
    setIsType("MenuDashBoard");
    setIsOpen(true);
  };

  const handleReturnComponents = (e?: any) => {
    if (e === "Đăng tin") {
      setIsOpenMenu(!isOpenMenu);
      return <JobPostingForm />;
    }
    if (e === "Đăng xuất") {
      handleLogout();
    }
  };
  return (
    <div className="flex h-[65px] w-full items-center justify-between bg-[#212f3f] px-4 text-[#fff]">
      <div className="flex items-center gap-1">
        <div onClick={handlOpenSibar} className="cursor-pointer">
          {isOpenSibar ? (
            <>
              <TbMenuDeep size={30} />
            </>
          ) : (
            <>
              <CgMenuGridO size={30} />
            </>
          )}
        </div>
     <div>
      <img src={logo} alt="" className="w-[50px] h-[55px]" />
     </div>
      </div>
      <div onClick={handleShowMenuMobile} className="md:hidden">
        <CgMenuRound size={30} />
      </div>

      <div className="hidden items-center gap-2 text-white shadow-2xl md:flex">
        {MenuItem.map((i, k) => (
          <div
            onClick={() => {
              handleReturnComponents(i.title);
            }}
            key={k}
            className={`relative flex cursor-pointer items-center gap-2 rounded-full bg-gray-700 p-2 px-3 transition-all hover:bg-gray-600`}
          >
            {i.icon && <i.icon className="h-5 w-5" />}
            <span className="text-[14px]">
              {k === 8 ? <i.title /> : i.title}
            </span>
            {i.badge && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {i.badge}
              </span>
            )}
          </div>
        ))}
        {isOpenMenu && (
          <div className="absolute top-15 right-40 h-auto w-[500px]">
            <JobPostingForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderDashBoard;
