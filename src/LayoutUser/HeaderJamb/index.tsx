import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useScrollHandling from "../../Hook";
function HeaderJamb() {
  const icons: { name: any; id: number }[] = [
    { name: <AiFillHome />, id: 1 },
    { name: <CiSearch />, id: 1 },
    { name: <IoIosAddCircle />, id: 1 },
    { name: <FaHeart />, id: 1 },
    { name: <CiUser />, id: 1 },
    { name: <HiOutlineMenuAlt3 />, id: 1 },
  ];
  const { scrollPosition } = useScrollHandling();
  return (
    <div
      className={`hidden fixed top-10 sm:flex h-[100vh] w-auto flex-col gap-2 pr-5 transition-all duration-500 ${scrollPosition >= 99 ? "left-0" : "left-[-50px]"}`}
    >
      {" "}
      <div className="flex flex-col space-x-2 pl-3">
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
          {icons.slice(5).map((item) => {
            return (
              <div key={item.id} className="text-4xl">
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
