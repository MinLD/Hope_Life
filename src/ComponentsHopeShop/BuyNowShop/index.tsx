import { useContext, useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { SideBarContext } from "../../Context/SideBarProvider";
import SideBar from "../SlideBar";
type Product = {
  name: string;
  price: string;
  image: string;
  designs: string[];
};
type prop = {
  close?: () => void | "";
};
function BuyNowShop({ close }: prop) {
  const sideBarContext = useContext(SideBarContext);
  if (!sideBarContext) return null;
  const { setIsOpenSideBar } = sideBarContext;
  const product: Product = {
    name: "Bộ Sưu Tập Lót Ly Gạch Hoa Cổ Điển",
    price: "295.000₫",
    image:
      "https://thecrafthouse.vn/cdn/shop/files/387ad9b5fd0c43a885d7592931931219.png?v=1741943403&width=160", // Thay bằng link ảnh thật
    designs: [
      "Gạch Hoa CS-GH1",
      "Gạch Hoa CS-GH2",
      "Gạch Hoa CS-GH3",
      "Gạch Hoa CS-GH4",
      "Gạch Hoa CS-GH5",
    ],
  };
  const [selectedDesign, setSelectedDesign] = useState(product.designs[0]);
  return (
    <>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-red-500 text-lg font-bold">{product.price}</p>
            </div>
          </div>
          {close && (
            <>
              <button
                className="text-gray-500 hover:text-black text-xl cursor-pointer"
                onClick={close}
              >
                <IoIosClose size={30} />
              </button>
            </>
          )}
        </div>

        {/* Chọn thiết kế */}
        <div className="mt-4">
          <p className="text-gray-700 mb-2">
            Thiết kế: <span className="font-semibold">{selectedDesign}</span>
          </p>
          <div className="grid grid-cols-2 gap-2">
            {product.designs.map((design) => (
              <button
                key={design}
                className={`border rounded-lg px-3 py-2 text-sm ${selectedDesign === design ? "border-black font-bold" : "border-gray-300"}`}
                onClick={() => setSelectedDesign(design)}
              >
                {design}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-700 mt-4 mb-2">Quantity:</p>
        </div>
        <div className="flex gap-2 p-2 border-[#e1e1e1] border-2 justify-between items-center max-w-[150px]">
          <div>
            <IoIosAdd size={30} />
          </div>
          <div>1</div>
          <div>
            <TfiLayoutLineSolid size={20} />
          </div>
        </div>
        {/* Nút hành động */}
        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 bg-yellow-400 text-white font-semibold   p-4 rounded-lg cursor-pointer hover:text-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500"
            onClick={() => {
              setIsOpenSideBar(true);
              close && close();
            }}
          >
            Add to cart
          </button>
          <button className="flex-1 bg-black text-white font-semibold  rounded-lg p-4 cursor-pointer hover:text-black hover:bg-transparent hover:border hover:border-black">
            Buy it now
          </button>
        </div>
      </div>
      <SideBar />
    </>
  );
}

export default BuyNowShop;
