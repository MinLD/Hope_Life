import { useContext, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotifications,
} from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { MenuContext } from "../../../Context/MenuProvider";
import { useNavigate } from "react-router-dom";
import MyLayout from "../../../Layout/MyLayOut";
import { FaRegUser } from "react-icons/fa";
import Cookies from "js-cookie";
import {
  Bell,
  Briefcase,
  Eye,
  FileText,
  Gift,
  Heart,
  Lock,
  LogOut,
  Mail,
  Pencil,
  Rocket,
  Settings,
  Shield,
} from "lucide-react";
import { StoreContext } from "../../../Context/StoreProvider";

function HeaderMenuBottom() {
  const [isShowUserMenu, setShowUserMenu] = useState<boolean>(false);
  const data: { name: string; id: number }[] = [
    { name: "Ứng tuyển", id: 1 },
    { name: "Giúp đỡ", id: 1 },
    { name: "Khó khăn", id: 1 },
  ];
  const MenuUser: { name: string; id: number; icon: any }[] = [
    { id: 1, name: "CV của tôi", icon: <FileText /> },
    { id: 2, name: "Cover Letter của tôi", icon: <FileText /> },
    { id: 3, name: "Việc làm đã lưu", icon: <Heart /> },
    { id: 4, name: "Việc làm đã ứng tuyển", icon: <Briefcase /> },
    { id: 5, name: "Cài đặt thông tin cá nhân", icon: <Pencil /> },
    { id: 6, name: "Nâng cấp tài khoản VIP", icon: <Rocket /> },
    { id: 7, name: "Kích hoạt quà tặng", icon: <Gift /> },
    { id: 8, name: "Nhà tuyển dụng xem hồ sơ", icon: <Eye /> },
    { id: 9, name: "Cài đặt gợi ý việc làm", icon: <Settings /> },
    { id: 10, name: "Cài đặt thông báo việc làm", icon: <Bell /> },
    { id: 11, name: "Cài đặt nhận email", icon: <Mail /> },
    { id: 12, name: "Cài đặt bảo mật", icon: <Shield /> },
    { id: 13, name: "Đổi mật khẩu", icon: <Lock /> },
    { id: 14, name: "Đăng xuất", icon: <LogOut /> },
  ];
  const token = Cookies.get("token");
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;

  const navigate = useNavigate();
  const handleReuturnPostJob = () => {
    navigate("/app/register");
  };
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { handleLogout, userInfo } = storeContext;
  const handleClickMenuUser = (id: number) => {
    if (id === 14) {
      handleLogout?.();
    }
  };
  const handleReturnComponent = (id: any) => {
    if (id === 0) {
      navigate("/post/job");
    }
  };

  return (
    <div className="flex h-[62px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex items-center justify-between sm:gap-0">
          <div className="flex items-center justify-center gap-6 lg:gap-15 xl:gap-20">
            <div className="flex items-center space-x-2">
              <span className="s:text-3xl text-2xl font-bold text-gray-900">
                H O
              </span>
              <span className="s:text-3xl text-2xl font-bold text-green-500">
                P E
              </span>
            </div>

            <div className="hidden gap-5 lg:flex">
              {data.map((item, k) => (
                <div key={k} onClick={() => handleReturnComponent(k)}>
                  <h1 className="text-[16px] font-medium">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>

          <div
            onMouseLeave={() => setShowUserMenu(false)}
            className="flex items-center gap-4"
          >
            <div className="s:flex hidden flex-col gap-1">
              <p className="text-[11px] text-[#c5c5c5]">
                Bạn là nhà tuyển dụng?
              </p>
              <div
                className="flex cursor-pointer items-center gap-1 text-[14px] hover:text-[#00b14f]"
                onClick={handleReuturnPostJob}
              >
                <p className="text-[14px] font-medium">Đăng tuyển ngay</p>
                <MdKeyboardDoubleArrowRight size={20} />
              </div>
            </div>
            {token ? (
              <>
                <div className="hidden h-[30px] w-[1px] items-center border-[1px] border-[#e1e1e1] lg:flex"></div>
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
                <div
                  onClick={() => setShowUserMenu(!isShowUserMenu)}
                  onMouseEnter={() => setShowUserMenu(true)}
                  className={`relative z-[999] flex h-[41px] w-[60px] items-center justify-center gap-1 rounded-full bg-[#f2f7f5]`}
                >
                  <span className="text-[20px] font-bold">
                    <FaRegUser />
                  </span>
                  <div className="text-[15px] text-[#00b14f]">
                    {isShowUserMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>

                  {isShowUserMenu && (
                    <div
                      className={`s:w-[400px] absolute top-10 right-0 flex h-screen w-[300px] flex-col gap-4 bg-[#fff] p-5 pb-15 shadow-2xl`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <div>
                            {" "}
                            <span className="font-bold">
                              <FaRegUser size={30} />
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[16px] font-medium text-[#00b14f]">
                              {userInfo?.fullName}
                            </p>
                            <p className="text-[14px]">
                              Mã ứng viên:{" "}
                              <span className="font-medium">
                                {userInfo?.id}
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="pl-10 text-[14px]"></p>
                      </div>
                      <div className="border-b-[1px] border-[#e1e1e1] pt-1"></div>
                      <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth pb-25">
                        {MenuUser.map((item, k) => (
                          <div
                            key={k}
                            className="flex h-[60px] w-full items-center rounded-md bg-[#e1e1e1] pt-3 pb-3 pl-3"
                            onClick={() => handleClickMenuUser(item.id)}
                          >
                            <span className="text-[20px] text-[#00b14f]">
                              {item.icon}
                            </span>
                            <p className="pl-3 text-[14px] font-medium">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </MyLayout>
    </div>
  );
}

export default HeaderMenuBottom;
