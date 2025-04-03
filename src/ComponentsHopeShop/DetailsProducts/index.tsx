import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";

import { useState } from "react";

import { useLocation } from "react-router-dom";
import BuyNowShop from "../BuyNowShop";

// type ProductFormData = {
//   name: string | null;
//   seller_id: string;
//   price: string;
//   description: string;
//   categoryId: string;
//   inventory: string;
//   images: {
//     url: string;
//   }[];
//   weight: string;
// };

function DetailProducts() {
  const location = useLocation();
  console.log(location.state);
  const [selectedImage, setSelectedImage] = useState(
    location.state.images[0].url
  );
  console.log(location.state.id);
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
                {location.state.images.map((i: any, index: number) => (
                  <img
                    key={index}
                    src={i.url}
                    alt="Coaster preview"
                    className={`w-16 h-16 cursor-pointer rounded-lg border-2 ${
                      selectedImage === i.url
                        ? "border-gray-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(i.url)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{location.state.name}</h1>
            <span className="text-xl text-red-500 font-semibold">
              {location.state.price?.toLocaleString("vi-VN")}đ
            </span>
            <h3 className="text-lg font-bold">*Mô tả sản phẩm:</h3>
            <p className="text-gray-600">{location.state.description}</p>

            <ul className="text-gray-800">
              <h3 className="text-lg font-bold">*Thông tin sản phẩm:</h3>
              <pre>{location.state.infomation}</pre>
            </ul>
            <BuyNowShop
              id={location.state.id}
              image={location.state.images}
              name={location.state.name}
              price={location.state.price}
            />
          </div>
        </div>
      </div>
    </HomePagesHopeShop>
  );
}

export default DetailProducts;
