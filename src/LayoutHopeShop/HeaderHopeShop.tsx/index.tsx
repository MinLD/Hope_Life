import { IoIosSearch } from "react-icons/io";
import MyLayout from "../../Layout/MyLayOut";
import { TiShoppingCart } from "react-icons/ti";

function HeaderHopeShop() {
  //   const data: { string: string; id: number }[] = [
  //     { string: "string", id: 1 },
  //     { string: "string", id: 1 },
  //     { string: "string", id: 1 },
  //   ];
  return (
    <div className="flex h-[60px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex w-full items-center justify-between gap-2  ">
          {/* Logo */}
          <div className="s:flex-row flex flex-col space-x-1">
            <div>
              <span className="text-xl font-bold text-gray-900 md:text-3xl">
                H O
              </span>
              <span className="text-xl font-bold text-green-500 md:text-3xl">
                P E
              </span>
            </div>
            <span className="text-xl font-bold text-green-950 md:text-3xl">
              Shop
            </span>
          </div>

          <div className="w-1/3 max-w-[400px] flex-1">
            <div className="relative">
              <input
                type="text"
                className="h-[40px] w-full rounded-lg border border-[#00b14f] pr-4 pl-10 font-bold text-[#141514] outline-none"
                placeholder="Tìm Kiếm"
              />
              <div className="absolute top-1/2 left-3 -translate-y-1/2">
                <IoIosSearch size={24} className="text-[#00b14f]" />
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <TiShoppingCart size={28} className="text-gray-800" />
          </div>
        </div>
      </MyLayout>
    </div>
  );
}

export default HeaderHopeShop;
