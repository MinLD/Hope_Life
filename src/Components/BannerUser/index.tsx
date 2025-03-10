
import SliderCommon from "../SliderCommon";



function BannerUser() {
  const data: {
    id: number;
    src: string;
  }[] = [
    { id: 1, src: "https://static.topcv.vn/v4/image/logo/topcv-logo-6.png" },
    { id: 1, src: "https://static.topcv.vn/v4/image/logo/topcv-logo-6.png" },
    { id: 1, src: "https://static.topcv.vn/v4/image/logo/topcv-logo-6.png" },
    { id: 1, src: "https://static.topcv.vn/v4/image/logo/topcv-logo-6.png" },
  ];
  return (
    <div className="w-full h-auto">
      <SliderCommon BoxImg={data} slidesToShow={1} dots={true} />
    </div>
  );
}

export default BannerUser;
