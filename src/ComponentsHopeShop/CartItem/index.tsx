import React from "react";

const Cart: React.FC = () => {
  return (
    <div className="bg-white p-1 w-full mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between px-5">
          <img
            src="https://thecrafthouse.vn/cdn/shop/files/40_cd5906d31caa4f1b9b667f5278dcf013_7036e728-5691-4097-afbe-9641a8233604.png?v=1738574367&width=160"
            alt=""
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1 ml-4">
            <p className="text-sm font-medium mx-auto line-clamp-2">
              Bộ Sưu Tập Lót Ly Biểu Tượng Việt
            </p>
            <p className="text-red-500 font-semibold">295.000₫</p>
            <p className="text-gray-500">VIETNAM 3</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="border p-5 rounded-xl border-gray-300 w-3 h-3 flex items-center justify-center ">
              1
            </div>
            <button className="text-gray-500 text-sm hover:text-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
