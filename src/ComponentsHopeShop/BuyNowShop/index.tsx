import { useState } from "react";
import { IoIosClose } from "react-icons/io";

type Product = {
  name: string;
  price: string;
  image: string;
  designs: string[];
};
type prop = {
  close: () => void;
};
function BuyNowShop({ close }: prop) {
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
          <button
            className="text-gray-500 hover:text-black text-xl cursor-pointer"
            onClick={close}
          >
            <IoIosClose size={30}/>
          </button>
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

        {/* Nút hành động */}
        <div className="flex gap-2 mt-5">
          <button className="flex-1 bg-yellow-400 text-white font-semibold py-2 rounded-lg">
            Add to cart
          </button>
          <button className="flex-1 bg-black text-white font-semibold py-2 rounded-lg">
            Buy it now
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyNowShop;
