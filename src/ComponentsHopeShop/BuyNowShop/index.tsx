import { useContext, useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { SideBarContext } from "../../Context/SideBarProvider";
import SideBar from "../SlideBar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Services/PostApi";
type Product = {
  id: number;
  name: string;
  price: number;
  image: { url: string }[];
  close?: () => void | "";
};

function BuyNowShop({ close, name, price, image, id }: Product) {
  const navigate = useNavigate();
  const sideBarContext = useContext(SideBarContext);
  if (!sideBarContext) return null;
  // const { setIsOpenSideBar } = sideBarContext;

  const [selectedDesign, setSelectedDesign] = useState<string>();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedDesign) {
      toast.warning("Vui lòng chọn thiết kế");
      return;
    }
    api
      .Cart(id, quantity)
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(selectedDesign);
    console.log(quantity);
    // setIsOpenSideBar(true);
    // close && close();
  };
  return (
    <>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center gap-3">
            <img
              src={image[0].url}
              alt=""
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-red-500 text-lg font-bold">
                {price?.toLocaleString()} đ
              </p>
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
          <p className="text-gray-700 mb-2 ">Thiết kế:</p>
          <div className="grid grid-cols-4 gap-2">
            {image.map((i, k) => (
              <button
                className={`border rounded-lg  text-sm max-w-[80px] ${
                  selectedDesign === i.url ? "border-red-500" : ""
                }`}
                key={k}
                onClick={() => setSelectedDesign(i.url)}
              >
                <img
                  src={i.url}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-700 mt-4 mb-2">Quantity:</p>
        </div>
        <div className="flex gap-2 p-2 border-[#e1e1e1] border-2 justify-between items-center max-w-[150px]">
          <div
            onClick={() => setQuantity(quantity + 1)}
            className="cursor-pointer"
          >
            <IoIosAdd size={30} />
          </div>
          <div>{quantity}</div>
          <div
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="cursor-pointer"
          >
            <TfiLayoutLineSolid size={20} />
          </div>
        </div>
        {/* Nút hành động */}
        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 bg-yellow-400 text-white font-semibold   p-4 rounded-lg cursor-pointer hover:text-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            onClick={() => {
              navigate("/checkout");
              close && close();
            }}
            className="flex-1 bg-black text-white font-semibold  rounded-lg p-4 cursor-pointer hover:text-black hover:bg-transparent hover:border hover:border-black"
          >
            Buy it now
          </button>
        </div>
      </div>
      <SideBar />
    </>
  );
}

export default BuyNowShop;
