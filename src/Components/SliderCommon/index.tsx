import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.css";
import MarketIntroduction from "../MarketIntroduction";

type LayoutProps = {
  BoxImg: { url?: string; title?: string; id?: number; lable?: string }[];
  slidesToShow: number;
  dots?: boolean;
  type?: string;
};

function SliderCommon({ BoxImg, slidesToShow, dots, type }: LayoutProps) {
  const settings = {
    arrows: false, // Ẩn mũi tên điều hướng
    centerMode: true, // Căn giữa item
    centerPadding: "0px", // Tránh padding dư thừa
    dots: dots || false, // Đặt giá trị mặc định là false nếu không truyền
    infinite: true, // Lặp vô hạn
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000, // Giảm thời gian autoplay xuống để tăng trải nghiệm người dùng
    rtl: false, // Nếu bạn muốn xoay từ phải qua trái, hãy để true
  };
  const handleReturnComponent = (item: any) => {
    switch (type) {
      case "MarketIntroduction":
        return (
          <MarketIntroduction
            id={item.id}
            src={item.url}
            title={item.title}
            lable={item.lable}
          />
        );
      case "images":
        return (
          <div className="flex flex-col items-center justify-center">
            <img
              src={item.url}
              alt=""
              className="h-[25vh] min-h-[20vh] w-[98%] object-cover"
            />
          </div>
        );
      case "imagesZoom":
        return (
          <div className="flex flex-col items-center justify-center">
            <img src={item.url} alt="" className="h-[70vh] w-[70%]" />
          </div>
        );

      default:
        return (
          <div className="relative">
            <img
              src={item.url}
              alt=""
              className="mx-auto h-[100vh] w-full object-cover"
            />
            <div className="absolute top-30 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center">
              <p className="text-2xl font-bold text-[#fff]">
                Track your funnel with{" "}
                <span className="text-[#00FF00]">Report</span>
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center">
              <div className="flex flex-col items-center gap-2 text-2xl font-bold text-[#fff]">
                <div className="flex items-center space-x-2 font-bold">
                  <span className="text-2xl font-bold text-amber-50">H</span>
                  <span className="text-2xl font-bold text-amber-50">O</span>
                  <span className="text-2xl font-bold text-green-500">P</span>
                  <span className="text-2xl font-bold text-green-500">E</span>
                </div>
                <p className="text-[12px] font-bold">
                  Tiếp lợi thế nổi thành công
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Slider {...settings}>
      {BoxImg.map((item, k) => (
        <div key={k} className="flex justify-center">
          {handleReturnComponent(item)}
        </div>
      ))}
    </Slider>
  );
}

export default SliderCommon;
