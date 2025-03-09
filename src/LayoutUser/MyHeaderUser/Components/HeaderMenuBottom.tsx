import { CircleUserRound } from "lucide-react";
import { useContext } from "react";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { MenuContext } from "../../../Context/MenuProvider";
import { useNavigate } from "react-router-dom";
import MyLayout from "../../../Layout/MyLayOut";

function HeaderMenuBottom() {
  const data: { name: string; id: number }[] = [
    { name: "Ứng tuyển", id: 1 },
    { name: "Giúp đỡ", id: 1 },
    { name: "Khó khăn", id: 1 },
  ];
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isWindowSize } = menuContext;
  const navigate = useNavigate();
  const handleReuturnPostJob = () => {
    navigate("/app/register");
  };
  return (
    <div className="flex h-[72px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-3xl font-bold text-gray-900">H O</span>
              <span className="text-xl sm:text-3xl font-bold text-green-500">P E</span>
            </div>

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

          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#c5c5c5]">
                Bạn là nhà tuyển dụng?
              </p>
              <div
                className="flex cursor-pointer items-center gap-1 text-[14px] hover:text-[#00b14f]"
                onClick={handleReuturnPostJob}
              >
                <p className="text-md font-medium">Đăng tuyển ngay</p>
                <MdKeyboardDoubleArrowRight size={20} />
              </div>
            </div>
            <div className="flex h-[30px] w-[1px] items-center border-[1px] border-[#e1e1e1]"></div>
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
          </div>
        </div>
      </MyLayout>
    </div>
  );
}

export default HeaderMenuBottom;
