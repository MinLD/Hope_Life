import MyLayout from "../../Layout/MyLayOut";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

import { IoIosArrowDown } from "react-icons/io";
import { CircleUserRound } from "lucide-react";
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuProvider";
function UserHeader() {
  const data: { name: string; id: number }[] = [
    { name: "Tuyển dụng", id: 1 },
    { name: "Ứng tuyển", id: 1 },
    { name: "Giúp đỡ", id: 1 },
    { name: "Khó khăn", id: 1 },
  ];
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isWindowSize } = menuContext;
  
  return (
    <div className="flex h-[72px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-10">
            <img
              src="https://static.topcv.vn/v4/image/logo/topcv-logo-6.png"
              alt=""
              className="h-[72px] w-[172px]"
            />
            {isWindowSize.width >= 1026 && (
              <div className="flex gap-5">
                {data.map((item) => (
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#bef0d78b]">
              <span className="z-30 text-[27px] text-[#00b14f]">
                <IoIosNotifications />
              </span>
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#bef0d78b]">
              <span className="z-30 text-[27px] text-[#00b14f]">
                <TiMessages />
              </span>
            </div>
            <div className="flex h-[40px] w-[60px] items-center justify-center gap-1 rounded-full bg-[#f2f7f5]">
              <span className="text-[30px] font-bold">
                <CircleUserRound />
              </span>
              <div className="text-[15px] text-[#00b14f]">
                <IoIosArrowDown />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </MyLayout>
    </div>
  );
}

export default UserHeader;
