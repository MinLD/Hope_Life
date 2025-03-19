import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function HeaderJamb() {
  const icons: { name: any; id: number }[] = [
    { name: <CiSearch />, id: 1 },
    { name: <IoIosAddCircle />, id: 1 },
    { name: <FaHeart />, id: 1 },
    { name: <FaBagShopping />, id: 1 },
  ];
  const navigate = useNavigate();

  // const menuContext = useContext(MenuContext);
  // if (!menuContext) return;
  // const { setIsOpen } = menuContext;

  const handleReturnMenu = (id: number) => {
    if (id === 3) {
      navigate("/app/hopeshop");
    }
  };
  return (
    <div
      className={`fixed bottom-0 z-[9] flex h-[40px] w-full items-center justify-center gap-10 bg-[#fff] pl-1 shadow-2xl transition-all duration-500 md:top-[0] md:h-[100vh] md:w-auto md:flex-col md:bg-[#fff] md:shadow-none`}
    >
      <div className="flex items-center justify-between gap-10 md:flex-col">
        {icons.map((item, k) => {
          return (
            <div
              key={k}
              className="cursor-pointer text-3xl md:text-3xl"
              onClick={() => handleReturnMenu(k)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderJamb;
