import { useState } from "react";

export default function ProductFilter() {
  const [inStock, setInStock] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);

  const [selectedRating, ] = useState(null);

  const categories = [
    "Thời trang",
    "Đồ gia dụng",
    "Phụ kiện",
    "Thủ công mỹ nghệ",
  ];

  return (
    <div className="w-80 p-5 bg-white  rounded-lg ">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="2" y1="14" x2="6" y2="14" />
          <line x1="10" y1="8" x2="14" y2="8" />
          <line x1="18" y1="16" x2="22" y2="16" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-800">Bộ lọc sản phẩm</h3>
      </div>

      <hr className="mb-3" />

      {/* Bộ lọc giá */}
      <div className="mb-5">
        <h4 className="text-sm font-medium text-gray-800">Khoảng giá</h4>

        <div className="flex justify-between mt-2 text-sm">
          <input
            type="number"
            className="w-24 border rounded p-1 text-center"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <span>đến</span>
          <input
            type="number"
            className="w-24 border rounded p-1 text-center"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <hr className="mb-3" />

      {/* Bộ lọc danh mục */}
      <div className="mb-5">
        <h4 className="text-sm font-medium text-gray-800">Danh mục</h4>
        <div className="mt-2 space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {category}
            </label>
          ))}
        </div>
      </div>

      <hr className="mb-3" />

      {/* Bộ lọc đánh giá */}
      <div className="mb-5">
        <h4 className="text-sm font-medium text-gray-800">Đánh giá</h4>
        <div className="mt-2 space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input type="radio" checked={selectedRating === stars} readOnly />
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={i < stars ? "text-yellow-500" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      <hr className="mb-3" />

      {/* Bộ lọc còn hàng */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">Còn hàng</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-black"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-all peer-checked:left-6"></div>
        </label>
      </div>

      {/* Nút áp dụng */}
      <button className="w-full mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Áp dụng bộ lọc
      </button>
    </div>
  );
}
