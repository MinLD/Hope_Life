import { IoIosSearch } from "react-icons/io";
import MyLayout from "../../Layout/MyLayOut";
import { TiShoppingCart } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2anhiu.png";
function HeaderHopeShop() {
  //   const data: { string: string; id: number }[] = [
  //     { string: "string", id: 1 },
  //     { string: "string", id: 1 },
  //     { string: "string", id: 1 },
  //   ];
  const navigate = useNavigate();
  const handleReuturnShopJob = () => {
    navigate("/shop/register/jobshop");
  };
  return (
    <div className="flex h-[60px] w-full items-center justify-center bg-[#fff] shadow-2xl">
      <MyLayout>
        <div className="flex w-full items-center justify-between gap-2">
          <div>
            <img src={logo} alt="" className="w-[80px] h-[60px] " />
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
          <div className="s:flex hidden flex-col gap-1">
            <p className="text-[11px] text-[#c5c5c5]">
              Bạn muốn đăng ký người bán hàng?
            </p>
            <div
              className="flex cursor-pointer items-center gap-1 text-[14px] hover:text-[#00b14f]"
              onClick={handleReuturnShopJob}
            >
              <p className="text-[14px] font-medium">Đăng ký ngay</p>
              <MdKeyboardDoubleArrowRight size={20} />
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
