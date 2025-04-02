import {  useContext, useEffect, useState } from "react";
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
import logo from "../../../../public/logoanhiu1.png";
import {
 
  Briefcase,

  FileText,
 
  Heart,
  Lock,
  LogOut,
  Signpost,
} from "lucide-react";
import { StoreContext } from "../../../Context/StoreProvider";
import DonationCard from "../../../Components/DonationCard";
import { PostContext } from "../../../Context/PostProvider";

function HeaderMenuBottom() {
  const [isShowUserMenu, setShowUserMenu] = useState<boolean>(false);
  const data: { name: string; id: number }[] = [
    { id: 3, name: "Giới Thiệu" },
    { name: "Tuyển dụng", id: 1 },
    { name: "Bài đăng", id: 2 },
    { id: 3, name: "Cửa hàng" },
  ];
  const menuChild: { name: string; id: number }[] = [
    { id: 4, name: "Bài đăng sẻ chia" },
    { name: "Bài đăng hoàn vốn", id: 5 },
  ];
  const MenuUser: { name: string; id: number; icon: any }[] = [
    { id: 1, name: "CV của tôi", icon: <FileText /> },
    { id: 2, name: "Nạp tiền vào hệ thống", icon: <FileText /> },
    { id: 3, name: "Việc làm đã lưu", icon: <Heart /> },
    { id: 4, name: "Bài đăng hoàn vốn", icon: <Signpost /> },
    { id: 5, name: "Việc làm đã ứng tuyển", icon: <Briefcase /> },
    { id: 13, name: "Đổi mật khẩu", icon: <Lock /> },
    { id: 14, name: "Đăng xuất", icon: <LogOut /> },
  ];
  const [isShowQr, setShowQr] = useState<boolean>(false);
  const token = Cookies.get("token");
  const menuContext = useContext(MenuContext);

  if (!menuContext) return;

  const navigate = useNavigate();
  const handleReuturnPostJob = () => {
    navigate("/app/register");
  };
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { handleLogout, userInfo,  setIdUser } = storeContext;
  const postcontext = useContext(PostContext);
  if (!postcontext) {
    return;
  }
  const {  setTypePost, setFund } = postcontext;
  const handleClickMenuUser = (id: number) => {
    if (id === 14) {
      handleLogout?.();
    }
    if (id === 2) {
      setShowQr(true);
    }
    if (id === 4) {
      navigate("/paybackpost");
      setTypePost("paybackpost");
    }
  };
  const [hover, setHover] = useState<any>(false);

  const handleReturnComponent = (id: any) => {
    if (id === 1) {
      navigate("/post/job");
    }
    if (id === 2) {
      navigate("/post");
    }
    if (id === 0) {
      navigate("/");
    }
    if (id === 3) {
      navigate("/app/hopeshop");
    }
    if (id === 4) {
      setTypePost("post");
    }
    if (id === 5) {
      setTypePost("postVolunn");
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setFund(userInfo?.fund);
    setIdUser(userInfo?.id);
  }, []);
  return (
    <div className="flex h-[62px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex items-center justify-between sm:gap-0">
          <div className="flex items-center justify-center gap-6">
            <span
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} className="h-[58px] w-[50px] cursor-pointer" />
            </span>

            <div
              className="lgg:flex hidden gap-2"
              onMouseLeave={() => setHover("")}
            >
              {data.map((item, k) => (
                <div
                  key={k}
                  onClick={() => handleReturnComponent(k)}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHover(k)}
                >
                  <h1 className="text-[16px] font-medium">{item.name}</h1>

                  {item.name !== "Bài đăng" && (
                    <>
                      <div
                        className={`absolute bottom-0 left-0 h-[3px] transform rounded-4xl bg-[#00b14f] transition-all duration-450 ${
                          hover === k ? "w-full scale-x-50" : "w-0 scale-x-0"
                        }`}
                      ></div>
                    </>
                  )}
                  {item.name === "Bài đăng" && (
                    <>
                      <div
                        className={` bg-[#fff] shadow-2xl transition-all duration-500  h-auto w-[200px] pl-4 p-2 rounded-2xl absolute flex flex-col gap-2 
                          ${hover === k ? "opacity-[100%]" : "opacity-0 "}
                          
                          `}
                      >
                        {menuChild.map((i, k) => (
                          <div
                            key={k}
                            className="text-md relative "
                            onClick={() => handleReturnComponent(i.id)}
                          >
                            {" "}
                            {i.name}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
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
                              {userInfo?.profile.fullName}
                            </p>
                            <p className="text-[14px]">
                              Mã ứng viên:{" "}
                              <span className="font-medium">
                                {userInfo?.id}
                              </span>
                            </p>
                            <p>
                              {" "}
                              Số tiền:{" "}
                              {userInfo?.fund
                                ? userInfo?.fund.toLocaleString()
                                : 0}
                              đ
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
                            className="flex h-[60px] w-full cursor-pointer items-center rounded-md bg-[#e1e1e1] pt-3 pb-3 pl-3"
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

      <div className="">
        <DonationCard isOpen={isShowQr} onClose={() => setShowQr(false)} />
      </div>
    </div>
  );
}

export default HeaderMenuBottom;
