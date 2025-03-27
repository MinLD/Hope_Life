import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ProductFormData = {
  name: string | null;
  key: number;
  price: string;
  description?: string;

  inventory?: string;
  images: {
    url: string;
  }[];
  setShowBuyNow: (value: number) => void;
};
function CartProduct({
  name,
  price,
  images,
  setShowBuyNow,
  key,
}: ProductFormData) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="h-[100%] w-[100%] overflow-hidden rounded-lg  border-gray-200 bg-white p-2"
        onMouseLeave={() => setIsShow(false)}
      >
        {/* Ảnh sản phẩm với hiệu ứng zoom */}
        <div
          className="relative overflow-hidden rounded-lg"
          onMouseEnter={() => setIsShow(true)}
        >
          <img
            onClick={() => navigate(`/hopeshop/${"1"}`)}
            src={images[0].url}
            alt=""
            className="h-[65%] w-full rounded-lg object-cover transition-transform duration-300 ease-in-out scale-70 hover:scale-105"
          />

          <div
            className={`cursor-pointer border-2 border-[#272727] hover:bg-transparent hover:text-[#272727] flex items-center justify-center absolute bg-[#272727] w-[100px] h-[40px] rounded-s transition-all duration-800 ease-in-out right-3 text-[#fff] font-medium ${
              isShow ? "bottom-5 opacity-100" : "bottom-[-50px] opacity-0"
            }`}
            onClick={() => setShowBuyNow(key)}
          >
            +Quickadd
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex h-[35%] w-full flex-col gap-1 px-1 pt-1">
          <p className="text-[15px] font-bold line-clamp-1">{name}</p>

          {/* Đánh giá */}
          <p className="text-xs text-gray-600">4.5⭐ | 120 đánh giá</p>

          {/* Giá tiền */}
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-bold text-red-500">{price}</p>
            <p className="text-[12px] text-gray-500 line-through">1235Đ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
