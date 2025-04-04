import { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../../Context/MenuProvider";
import { PostContext } from "../../../Context/PostProvider";
function MenuHeader() {
  const postContext = useContext(PostContext);
  if (!postContext) return;
  const { setTypePost } = postContext;
  const [isShowMenu] = useState<number | null>(null);

  //   ${isOpen ? "left-0 opacity-100" : "left-[-2500px] opacity-0"}
  const menu: {
    name: string;
    id: number;
  }[] = [
    { name: "Giới thiệu", id: 1 },
    { name: "Tuyển dụng", id: 2 },
    { name: "Bài đăng sẻ chia", id: 2 },
    { name: "Bài đăng hoàn vốn", id: 2 },
    { name: "Cửa hàng", id: 2 },
  ];
  const navigate = useNavigate();
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { setIsOpen } = menuContext;
  const handleRenderComponents = (i: string) => {
    if (i === "Giới thiệu") {
      navigate("/");
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
    if (i === "Cửa hàng") {
      navigate("/app/hopeshop");
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
    if (i === "Bài đăng sẻ chia") {
      setTypePost("post");
      navigate("/post");
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
    if (i === "Bài đăng hoàn vốn") {
      setTypePost("postVolunn");
      navigate("/post");
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
    if (i === "/app/register") {
      navigate("/app/register");
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
    if (i === "Tuyển dụng") {
      navigate("/post/job");
      setIsOpen(false);
    }
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col gap-3 p-5">
      {menu.map((i, k) => (
        <div className="rounded-2xl border border-[#e1e1e1] p-2" key={k}>
          <div
            onClick={() => handleRenderComponents(i.name)}
            className="flex cursor-pointer justify-between text-[16px] font-medium text-[#00c951] hover:text-[#1890ff]"
          >
            <p className="cursor-pointer">{i.name}</p>
            {i.name !== "Giới thiệu" && i.name !== "Trang Chủ" && (
              <p className="text-2xl font-bold">
                {isShowMenu === k ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </p>
            )}
          </div>
        </div>
      ))}
      <p className="font-medium text-[#333]">Dành cho nhà tuyển dụng</p>
      <div className="">
        <div className="rounded-2xl border border-[#e1e1e1] p-2">
          <div
            onClick={() => handleRenderComponents("/app/register")}
            className="flex cursor-pointer justify-between text-[16px] font-medium text-[#00c951] hover:text-[#1890ff]"
          >
            <p className="cursor-pointer">Đăng tin tuyển dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
