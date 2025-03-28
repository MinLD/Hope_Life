import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";

import { useState } from "react";
import BuyNowShop from "../BuyNowShop";
import CartSlider from "../CartSlider";
const product = {
  name: "Bộ Sưu Tập Lót Ly Biểu Tượng Việt Nam",
  price: "295.000đ",
  description:
    "*Mô tả: Bộ sưu tập lót ly gợi nhắc một Việt Nam giàu văn hóa qua những hình ảnh thân thuộc: từ khung cửa sắt, phiên chợ đông, món ăn đường phố đến các biểu tượng ở lễ hội truyền thống. Mỗi chiếc lót ly bắt mắt được in kỹ thuật cao trên chất liệu gốm thấm hút nhanh và dễ dàng vệ sinh. Đế gỗ bần bám sát và không gây trầy xước các bề mặt. Một món quà tinh tế và hữu dụng cho ngôi nhà của bạn cũng như những người thân yêu.",
  details: [
    { label: "Chất liệu", value: "gốm" },
    { label: "Kiểu dáng", value: "tròn" },
    { label: "Set", value: "4 chiếc/bộ" },
    { label: "Kích thước", value: "Đường kính: 10cm; độ dày: 1 cm" },
    { label: "Set", value: "4 chiếc/bộ" },
    { label: "Set", value: "4 chiếc/bộ" },
  ],
  images: [
    "https://thecrafthouse.vn/cdn/shop/files/co_vua_3_fdd3fd2748264a49aff7cde5b6163109.jpg?v=1738702106&width=800",
    "https://thecrafthouse.vn/cdn/shop/files/co_vua_2_705162962f4b4bd5bfe1b17368fb8bf7.jpg?v=1738702106&width=800",
    "https://thecrafthouse.vn/cdn/shop/files/696752715_5875570497106654312_o_db2771ba7e0541b2aab211422f723579_large_9dc9666662ab44eb9f07969fe4624de1.jpg?v=1738702106&width=400",
    "https://thecrafthouse.vn/cdn/shop/files/800086138_8714373522407495303_o_9c9ac5cf2fe54fb3ba10a0e4e59b3695_large_413a8bff09cd439f8caf18c9e645890b.jpg?v=1738702106&width=400",
    "https://thecrafthouse.vn/cdn/shop/files/MM_GoA_Luxury_1_min.jpg?v=1741836643&width=800",
    "https://thecrafthouse.vn/cdn/shop/files/MM_GoA_Luxury_2_min.jpg?v=1741836643&width=800",
  ],
};
type ProductFormData = {
  name: string | null;
  seller_id: string;
  price: string;
  description: string;
  categoryId: string;
  inventory: string;
  images: {
    url: string;
  }[];
  weight: string;
};

function DetailProducts() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const [formData] = useState<ProductFormData[]>([
    {
      name: "Cờ Vua Luxury Thủ Công",
      seller_id: "01",
      price: "4.506.000₫",
      description:
        "*Mô tả: Cờ vua là một trò chơi không hề xa lạ với tất cả chúng ta và chúng tôi đã biến hóa bộ cơ vua thông thường lên 1 phiên bản vô cùng cao cấp và mới lạ.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/Maztermind-web02.jpg?v=1738702106&width=800",
        },
      ],
      weight: "còn 20",
    },
    {
      name: "Cờ Vua Regaly Thủ Công",
      seller_id: "01",
      price: "6.100.000₫",
      description:
        "**Mô tả: Bộ Cờ Vua Regal hội tụ đầy đủ các yếu tố giải trí, nghệ thuật, sang trọng giúp nâng tầm không gian sống của người sở hữu. Những quân cờ tối giản kết hợp cùng phong cách cổ điển sẽ biến không gian sống của bạn trở nên sang trọng và tinh tế hơn bao giờ hết. Mỗi quân cờ trong bộ cờ vua Regal đều là một tác phẩm nghệ thuật độc đáo, được chế tác tinh xảo bởi bàn tay tài hoa của 10 nghệ nhân lành nghề. Qua 19 công đoạn tỉ mỉ, bộ cờ mang đến một vẻ đẹp thanh lịch và cuốn hút, khẳng định cá tính riêng của người sở hữu. Nếu bạn đang phân vân tìm quà tặng cho bạn bè hoặc người thân yêu thích nghệ thuật, thì Bộ Cờ Vua Regal là sự lựa chọn phù hợp dành riêng cho bạn.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/1_c0a97aec87d1444da37faa14a6c8ba0d.jpg?v=1738702145&width=800",
        },
      ],
      weight: "còn 20",
    },
    {
      name: "Bộ Sưu Tập Móc Khoá Da Thú Cưng Chó",
      seller_id: "01",
      price: "100.000₫",
      description:
        "**Mô tả: Bộ Cờ Vua Regal hội tụ đầy đủ các yếu tố giải trí, nghệ thuật, sang trọng giúp nâng tầm không gian sống của người sở hữu. Những quân cờ tối giản kết hợp cùng phong cách cổ điển sẽ biến không gian sống của bạn trở nên sang trọng và tinh tế hơn bao giờ hết. Mỗi quân cờ trong bộ cờ vua Regal đều là một tác phẩm nghệ thuật độc đáo, được chế tác tinh xảo bởi bàn tay tài hoa của 10 nghệ nhân lành nghề. Qua 19 công đoạn tỉ mỉ, bộ cờ mang đến một vẻ đẹp thanh lịch và cuốn hút, khẳng định cá tính riêng của người sở hữu. Nếu bạn đang phân vân tìm quà tặng cho bạn bè hoặc người thân yêu thích nghệ thuật, thì Bộ Cờ Vua Regal là sự lựa chọn phù hợp dành riêng cho bạn.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/Bulldog_1.png?v=1738686117&width=500",
        },
      ],
      weight: "còn 20",
    },
  ]);
  return (
    <HomePagesHopeShop>
      <div className="w-full shadow-md mt-35  px-[10vw]">
        <div className="mx-auto md:flex-row flex  gap-8 flex-col">
          <div className="flex flex-col gap-5">
            {/* Main Image */}
            <div className="w-full flex justify-center">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-[1000px] max-h-[600px] object-cover rounded-lg"
              />
            </div>

            {/* Image Slider Below Main Image */}
            <div className="w-full flex justify-center overflow-x-auto">
              <div className="flex gap-2">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Coaster preview"
                    className={`w-16 h-16 cursor-pointer rounded-lg border-2 ${
                      selectedImage === img
                        ? "border-gray-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <span className="text-xl text-red-500 font-semibold">
              {product.price}
            </span>
            <p className="text-gray-600">{product.description}</p>

            <ul className="text-gray-800">
              <h3 className="text-lg font-bold">*Thông tin sản phẩm:</h3>
              {product.details.map((detail, index) => (
                <li key={index}>
                  {detail.label}: {detail.value}
                </li>
              ))}
            </ul>
            <BuyNowShop />
          </div>
        </div>
        <div>
          {" "}
          <h2 className="text-3xl font-medium ">You may also like</h2>
          <CartSlider title="" data={formData} />
        </div>
      </div>
    </HomePagesHopeShop>
  );
}

export default DetailProducts;
