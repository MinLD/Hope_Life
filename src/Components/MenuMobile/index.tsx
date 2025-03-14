import { useContext } from "react";

import { MenuContext } from "../../Context/MenuProvider";

import MenuHeader from "./Components/MenuHeader";
import MenuDashBoard from "./Components/MenuDashBoard";

function MenuMobile() {
  //   ${isOpen ? "left-0 opacity-100" : "left-[-2500px] opacity-0"}
  // const menu: {
  //   name: string;
  //   id: number;
  // }[] = [
  //   { name: "Trang Chủ", id: 1 },
  //   { name: "Giới thiệu", id: 1 },
  //   { name: "Liên hệ", id: 2 },
  //   { name: "Ứng tuyển", id: 2 },
  //   { name: "Giúp đỡ", id: 2 },
  //   { name: "Khó khăn", id: 2 },
  // ];

  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { setIsOpen, isOpen, isType } = menuContext;
  // const handleRenderComponents = (i: string) => {
  //   if (i === "Giới thiệu") {
  //     navigate("/Gioi-Thieu");
  //     setIsOpen(false);
  //   }
  //   if (i === "Trang Chủ") {
  //     navigate("/");
  //     setIsOpen(false);
  //   }
  //   if (i === "/app/register") {
  //     navigate("/app/register");
  //   }
  // };
  return (
    <div>
      {isOpen === true && (
        <div className="fixed top-0 left-0 z-9999 h-full w-full bg-[#000] opacity-30"></div>
      )}

      <div
        className={`s:w-[50vw] fixed top-0 right-0 z-9999 h-screen w-[80vw] bg-[#fff] transition-all duration-600 ${isOpen ? "left-0 opacity-100" : "left-[-2500px] opacity-0"}`}
      >
        <div className="flex w-full justify-between bg-[#fff] p-2 px-7 pb-3">
          <div className="flex space-x-2 pl-3">
            <span className="text-3xl font-bold text-gray-900">H</span>
            <span className="text-3xl font-bold text-gray-900">O</span>
            <span className="text-3xl font-bold text-green-500">P</span>
            <span className="text-3xl font-bold text-green-500">E</span>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer p-2 shadow-2xl"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_29269_350)">
                <path
                  d="M7.09939 6.00981L11.772 1.3371C12.076 1.03316 12.076 0.541733 11.772 0.237793C11.468 -0.0661469 10.9766 -0.0661469 10.6726 0.237793L5.99994 4.9105L1.32737 0.237793C1.02329 -0.0661469 0.532002 -0.0661469 0.228062 0.237793C-0.0760207 0.541733 -0.0760207 1.03316 0.228062 1.3371L4.90063 6.00981L0.228062 10.6825C-0.0760207 10.9865 -0.0760207 11.4779 0.228062 11.7818C0.379534 11.9334 0.578697 12.0096 0.777717 12.0096C0.976737 12.0096 1.17576 11.9334 1.32737 11.7818L5.99994 7.10912L10.6726 11.7818C10.8243 11.9334 11.0233 12.0096 11.2223 12.0096C11.4213 12.0096 11.6203 11.9334 11.772 11.7818C12.076 11.4779 12.076 10.9865 11.772 10.6825L7.09939 6.00981Z"
                  fill="#BBBBBB"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_29269_350">
                  <rect width="12" height="12" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="h-1 w-full border-b-1 border-[#e1e1e1]"></div>

        {/* menu */}
        {isType === "MenuHeader/" ? (
          <MenuHeader />
        ) : isType === "MenuDashBoard" ? (
          <MenuDashBoard />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
