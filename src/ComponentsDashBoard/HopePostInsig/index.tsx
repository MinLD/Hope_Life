import { useState } from "react";
import SuggestedServiceModal from "./Components/SuggestedServiceModal";

export default function HopeInsights() {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <div className="">
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mb-6 flex justify-center">
          <img
            src="https://tuyendung.topcv.vn/app/_nuxt/img/no-right-to-see.e537843.jpg"
            alt="TopCV Insights"
            className="w-2/3"
          />
        </div>
        <h2 className="text-lg font-bold text-green-600">HopePost Insights</h2>
        <p className="mt-2 text-gray-700">
          <strong>HopePost Insights</strong> cung cấp những bí kíp, thông tin
          hữu ích về Xu hướng thị trường tuyển dụng, Hành vi tìm việc của ứng
          viên,... giúp bạn có thêm góc nhìn, góp phần nâng cao hiệu quả tuyển
          dụng.
        </p>
        <p className="mt-2 text-gray-700">
          Mua dịch vụ ngay để khám phá tính năng ưu việt và cập nhật thông tin
          tức thì cùng HopePost!
        </p>
        <button
          onClick={() => setShow(!isShow)}
          className="mt-4 rounded-lg bg-green-600 px-6 py-2 font-semibold text-white shadow-md hover:bg-green-700"
        >
          Mua dịch vụ ngay
        </button>
      </div>
      {isShow && (
        <>
          <SuggestedServiceModal />
        </>
      )}
    </div>
  );
}
