import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MarketIntroduction from "../MarketIntroduction";

type LayoutProps = {
  BoxImg: { src?: string; title?: string; id?: number; lable?: string }[];
  slidesToShow: number;
  dots?: boolean;
  type?: string;
};

function SliderCommon({ BoxImg, slidesToShow, dots, type }: LayoutProps) {
  const settings = {
    centerMode: true, // Căn giữa item
    centerPadding: "0px", // Tránh padding dư thừa
    dots: dots || false, // Đặt giá trị mặc định là false nếu không truyền
    infinite: true, // Lặp vô hạn
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Giảm thời gian autoplay xuống để tăng trải nghiệm người dùng
    rtl: false, // Nếu bạn muốn xoay từ phải qua trái, hãy để true
  };
  const handleReturnComponent = (item: any) => {
    switch (type) {
      case "MarketIntroduction":
        return (
          <MarketIntroduction
            id={item.id}
            src={item.src}
            title={item.title}
            lable={item.lable}
          />
        );
      default:
        return (
          <img
            src={item.src}
            alt=""
            className="mx-auto h-auto w-full object-cover"
          />
        );
    }
  };

  return (
    <Slider {...settings}>
      {BoxImg.map((item, k) => (
        <div key={k} className="flex justify-center">{handleReturnComponent(item)}</div>
      ))}
    </Slider>
  );
}

export default SliderCommon;
