import { IoIosClose } from "react-icons/io";

import Cart from "../CartItem";
import { SideBarContext } from "../../Context/SideBarProvider";
import { useContext, useEffect } from "react";

function SideBar() {
  const sideBarContext = useContext(SideBarContext);
  if (!sideBarContext) return null;
  const { setIsOpenSideBar, isOpenSideBar } = sideBarContext;
  useEffect(() => {
    if (isOpenSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenSideBar]);
  return (
    <>
      {isOpenSideBar && (
        <div className="fixed top-0 z-[99999999] left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]"></div>
      )}
      <div
        className={`  w-full  md:w-3/4 lg:w-2/4 fixed top-0 z-[99999999]   mx-auto h-screen p-3 transition-all duration-600 ease-in-out ${isOpenSideBar ? "right-0" : "right-[-800px]"}`}
      >
        <div className="bg-white w-full h-full shadow-2xl rounded-2xl flex flex-col">
          <div className=" p-7">
            <header className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <p className="text-2xl font-medium">Cart</p>
                <div className="w-3 h-3 bg-[#272727] text-[#fff] flex items-center justify-center rounded-full p-3">
                  3
                </div>
              </div>
              <div
                onClick={() => setIsOpenSideBar(false)}
                className="cursor-pointer"
              >
                <IoIosClose size={50} />
              </div>
            </header>
          </div>
          <div className="max-h-[470px] overflow-y-scroll">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>

          <footer className="mt-auto w-full h-[140px] border-t px-7 border-gray-300">
            <div className="mt-4 font-semibold text-lg flex justify-between items-center">
              <p>Total:</p> <p>180.000 VND</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-yellow-500 text-white py-2 px-4 rounded flex-1 hover:bg-yellow-600">
                View cart
              </button>
              <button className="bg-black text-white py-2 px-4 rounded flex-1 hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default SideBar;
