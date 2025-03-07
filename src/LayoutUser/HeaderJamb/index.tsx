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
  const { scrollDriction, scrollPosition } = useScrollHandling();
  return (
    <div
      className={`fixed flex h-[100vh] w-auto flex-col gap-25 r-5 transition-all duration-500 ${scrollPosition >= 99 ? "left-0" : "left-[-50px]"}`}
    >
      <div>logo</div>
      <div className="flex flex-col gap-10">
        {icons.slice(0, 5).map((item, k) => {
          return (
            <div key={k} className="text-3xl">
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-10">
        {icons.slice(5).map((item) => {
          return (
            <div key={item.id} className="text-3xl">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderJamb;
