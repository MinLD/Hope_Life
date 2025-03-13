import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useScrollHandling from "../../Hook";
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuProvider";
function HeaderJamb() {
  const icons: { name: any; id: number }[] = [
    { name: <AiFillHome />, id: 1 },
    { name: <CiSearch />, id: 1 },
    { name: <IoIosAddCircle />, id: 1 },
    { name: <FaHeart />, id: 1 },
    { name: <CiUser />, id: 1 },
    { name: <HiOutlineMenuAlt3 />, id: 5 },
  ];
  const { scrollPosition } = useScrollHandling();
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { setIsOpen } = menuContext;

  const handleReturnMenu = (id: number) => {
    if (id === 5) {
      setIsOpen(true);
    }
  };
  return (
    <div
      className={`s:flex fixed top-[30%] hidden h-[100vh] w-auto flex-col gap-2 pr-5 pl-2 transition-all duration-500 ${scrollPosition >= 99 ? "left-0" : "left-[-50px]"}`}
    >
      {" "}
      <div className="hidden flex-col space-x-2 pl-3">
        <span className="text-3xl font-bold text-gray-900">H</span>
        <span className="text-3xl font-bold text-gray-900">O</span>
        <span className="text-3xl font-bold text-green-500">P</span>
        <span className="text-3xl font-bold text-green-500">E</span>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          {icons.slice(0, 5).map((item, k) => {
            return (
              <div key={k} className="text-4xl">
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-10">
          {icons.slice(5).map((item, k) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer text-4xl"
                onClick={() => handleReturnMenu(item.id)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderJamb;
