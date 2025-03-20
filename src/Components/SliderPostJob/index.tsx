import React from "react";
import { Search, Menu } from "lucide-react";
import SliderCommon from "../SliderCommon";

const jobCategories = [
  "Kinh doanh/Bán hàng",
  "Marketing/PR/Quảng cáo",
  "Chăm sóc khách hàng (Customer Service)",
  "Nhân sự/Hành chính/Pháp chế",
  "Tài chính/Ngân hàng/Bảo hiểm",
  "Công nghệ Thông tin",
];

const bannerImage: { url: string }[] = [
  {
    url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/T2zQIzokLKfCxHEYvUax.jpg",
  },
  {
    url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/jYE0KTzA4brjKgy5zAMY.jpg",
  },
  {
    url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/jnXvK9j08bLS9Gn4ZEVI.jpg",
  },

  {
    url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/3bLRX7Dgav0tbp8fy8S4.jpg",
  },
];

const BannerPostJob: React.FC = () => {
  return (
    <div className="bg-[url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/section-header/header-bg.png')]  p-6 text-white">
      <h1 className="text-center text-xl font-bold">
        Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
      </h1>
      <p className="mt-2 text-center text-sm">
        Tiếp cận <span className="font-bold">40,000+</span> tin tuyển dụng việc
        làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam.
      </p>
      {/* Thanh tìm kiếm */}
      <div className="relative mx-auto mt-6 flex max-w-6xl items-center gap-3 rounded-full bg-white p-3">
        <button className="hidden items-center gap-2 rounded-md px-3 py-2 font-semibold text-gray-700 sm:flex">
          <Menu size={18} /> Danh mục Nghề
        </button>
        <input
          type="text"
          placeholder="Vị trí nghề nghiệp"
          className="line-clamp-1 flex-1 px-3 text-gray-700 outline-none"
        />
        <button className="absolute right-1 flex items-center gap-2 rounded-full bg-green-500 px-2 py-2 text-white transition hover:bg-green-600">
          <Search size={18} /> Tìm kiếm
        </button>
      </div>
      <div className="mx-auto mt-1 flex max-w-6xl gap-2">
        {/* Danh mục nghề */}
        <div className="mdd:flex mdd:flex-col mx-auto hidden h-auto w-[30%] rounded-2xl bg-white p-4 text-gray-700">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer border-b py-2 last:border-none hover:text-green-600"
            >
              {category}
            </div>
          ))}
        </div>
        {/* Banner hình ảnh */}
        <div className="mdd:w-[70%] mx-auto w-[100%] rounded-2xl">
          <SliderCommon BoxImg={bannerImage} slidesToShow={1} type="img" />
        </div>
      </div>
    </div>
  );
};

export default BannerPostJob;
