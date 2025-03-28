// import logo from "../../assets/logo2anhiu.png";

function BannerHopeShop() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-20">
      {/* Ảnh nền */}
      <img
        src="https://thecrafthouse.vn/cdn/shop/files/craftsmanship-2-3200x1600.jpg?v=1737199914&width=2000"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Logo */}
      {/* <div className="absolute top-30 left-1/2 -translate-x-1/2">
        <img src={logo} alt="Logo" className="w-20 sm:w-24 md:w-28" />
      </div> */}

      {/* Text chính */}
      <p className="absolute top-[60%] font-bold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-white left-1/2 -translate-x-1/2 text-center">
        Mang đến những món quà nghệ thuật
      </p>
    </div>
  );
}

export default BannerHopeShop;
