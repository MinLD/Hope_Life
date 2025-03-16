import { FaShoppingBasket, FaShoppingCart, FaTimes } from "react-icons/fa";

import MyLayout from "../../Layout/MyLayOut";
import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";
import { BiHeadphone } from "react-icons/bi";
import { useState } from "react";

function DetailProducts() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const colors = [
    "https://via.placeholder.com/50/fff",
    "https://via.placeholder.com/50/eee",
    "https://via.placeholder.com/50/pink",
    "https://via.placeholder.com/50/red",
    "https://via.placeholder.com/50/black",
    "https://via.placeholder.com/50/blue",
  ];
  return (
    <HomePagesHopeShop>
      <MyLayout>
        <div className="w-full p-4 shadow-md">
          {/* Ảnh sản phẩm */}
          <div className="relative w-full">
            <img
              src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7e0aa90e60b64ddbaa5559b5a4486149~tplv-o3syd03w52-resize-jpeg:800:800.jpeg?dr=15584&from=1826719393&idc=maliva&ps=933b5bde&shcp=e1be8f53&shp=6ce186a1&t=555f072d" // Thay ảnh thật vào đây
              alt="Đầm nữ babydoll"
              className="w-full rounded-lg object-cover"
            />
            <span className="absolute right-2 bottom-2 rounded bg-gray-800 px-2 py-1 text-xs text-white">
              1/9
            </span>
          </div>

          {/* Giá sản phẩm */}
          <div className="mt-3 flex items-center gap-2">
            <p className="text-xl font-bold text-red-500">87.500đ</p>
            <p className="text-md text-gray-500 line-through">125.000đ</p>
            <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
              -30%
            </span>
          </div>

          {/* Nhãn Flash Sale */}
          <span className="text-md mt-2 inline-block rounded bg-red-500 px-3 py-1 text-white">
            Flash Sale
          </span>

          {/* Mô tả sản phẩm */}
          <p className="mt-2 line-clamp-2 text-lg text-gray-700">
            BARE_ Đầm ngắn nữ kiểu babydoll trễ vai tay bồng xòe thắt nơ 2 lớp
            cao cấp chất voan tơ - D03 Voi Women Dress Kem
          </p>

          {/* Thông tin bán hàng */}
          <p className="text-md mt-1 text-gray-500">
            Bán bởi <strong>BARETOPTOP</strong>
          </p>
          <p className="text-md text-gray-500">17,243 đã được bán</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            {/* Nút mua hàng */}
            <button className="mt-3 flex w-1/2 items-center justify-center gap-2 rounded-lg bg-[green] px-4 py-2 text-white shadow-md">
              <FaShoppingCart />
              Mua sắm
            </button>

            {/* Hỗ trợ khách hàng */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center">
                <FaShoppingBasket size={30} />
              </div>
              <div className="flex items-center gap-2">
                <BiHeadphone size={20} />
                <span>Hỗ trợ khách hàng</span>
              </div>
            </div>
          </div>
          {/* Nút chọn sản phẩm */}
          <div
            onClick={() => setIsShow(!isShow)}
            className="mt-3 flex w-full cursor-pointer items-center justify-between p-2 hover:bg-[#e1e1e1]"
          >
            <p className="text-lg font-semibold text-gray-900">Lựa chọn</p>
            <button className="text-md font-medium text-[#c5c5c5]">
              Chọn {">"}
            </button>
          </div>
        </div>

        <div className="w-full rounded-lg bg-white p-4 pt-3 shadow-md">
          {/* Thông tin thương hiệu */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <img
                src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/37f8b543169742feb2963b533e5b121e~tplv-o3syd03w52-resize-png:300:300.png?from=2422056039"
                alt="BARETOPTOP"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">BARETOPTOP</p>
                <p className="text-sm text-gray-500">226 mặt hàng</p>
              </div>
            </div>
            <button className="rounded border px-4 py-2 text-sm hover:bg-gray-100">
              Truy cập
            </button>
          </div>

          {/* Thông tin chi tiết sản phẩm */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Thông tin về sản phẩm này</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Khu vực xuất xứ: <strong>Việt Nam</strong>
              </li>
              <li>
                Đường viền cổ áo: <strong>Trễ vai</strong>
              </li>
              <li>
                Loại tay áo: <strong>Tay phồng</strong>
              </li>
              <li>
                Mẫu: <strong>Đơn giản</strong>
              </li>
              <li>
                Chất liệu: <strong>Voan</strong>
              </li>
              <li>
                Vừa vặn: <strong>A-line</strong>
              </li>
              <li>
                Chiều dài váy: <strong>Midi</strong>
              </li>
              <li>
                Chiều dài tay áo: <strong>Dài tay</strong>
              </li>
              <li>
                Trang trí: <strong>Nơ</strong>
              </li>
              <li>
                Hướng dẫn giặt: <strong>Máy có thể giặt được</strong>
              </li>
              <li>
                Mùa: <strong>Mùa thu</strong>
              </li>
            </ul>
          </div>

          {/* Mô tả sản phẩm */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Mô tả sản phẩm</h3>
          </div>
        </div>

        {isShow && (
          <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
            <div className="w-[95%] max-w-[500px] rounded-lg bg-white p-4 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Product"
                    className="h-12 w-12 rounded"
                  />
                  <div>
                    <p className="text-lg font-bold text-red-500">87.500đ</p>
                    <p className="text-sm text-gray-500 line-through">
                      125.000đ
                    </p>
                    <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                      -30%
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsShow(false)}>
                  <FaTimes className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              {/* Chọn màu sắc */}
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-900">Màu sắc</p>
                <div className="mt-2 flex gap-2">
                  {colors.map((color, index) => (
                    <img
                      key={index}
                      src={color}
                      alt={`Color ${index}`}
                      className={`h-12 w-12 cursor-pointer rounded border-2 ${
                        selectedColor === index
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedColor(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Chọn số lượng */}
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-900">Số lượng</p>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    className="h-8 w-8 rounded border border-gray-400 text-xl"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-lg">{quantity}</span>
                  <button
                    className="h-8 w-8 rounded border border-gray-400 text-xl"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Nút mua hàng */}
              <button className="mt-4 w-full rounded-lg bg-red-500 py-3 text-white">
                Mua sắm trong ứng dụng ngay bây giờ
              </button>
            </div>
          </div>
        )}
      </MyLayout>
    </HomePagesHopeShop>
  );
}

export default DetailProducts;
