import MyLogIn from "../../Components/Loggin";
import SliderCommon from "../../Components/SliderCommon";
import MyLayout from "../../Layout/MyLayOut";
import br from "../../assets/image.png";
function Logginbox() {
  const data: {
    id: number;
    src: string;
  }[] = [
    {
      id: 1,
      src: "https://tuyendung.topcv.vn/app/_nuxt/img/banner-02.3506b83.png",
    },
    {
      id: 2,
      src: "https://tuyendung.topcv.vn/app/_nuxt/img/banner-02.3506b83.png",
    },
  ];

  return (
    <div className="flex h-[100vh]">
      <div className="w-full overflow-auto p-10 shadow-2xl lg:w-[50%]">
        <MyLogIn />
      </div>
      {/* Cột bên trái - Giới thiệu */}

      <div className="hidden w-[50%] flex-col items-center justify-center bg-[url('https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092SVn/background-gach-dep_015106164.jpg')] p-10 text-center lg:flex">
        <div className="rounded-2xl bg-amber-50 p-5 opacity-[100%] shadow-2xl">
          <div className="flex items-center justify-center">
            <span className="text-5xl font-bold text-[#333]">H O </span>
            <span className="text-5xl font-bold text-green-500">P E</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Kết nối yêu thương
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Hỗ trợ những người có hoàn cảnh khó khăn, kết nối cơ hội việc làm và
            bán sản phẩm thủ công.
          </p>
          <p className="mt-2 text-base text-gray-500">
            "Hành động nhỏ, ý nghĩa lớn – Cùng nhau tạo nên thay đổi!"
          </p>
        </div>
      </div>

      {/* Cột bên phải - Đăng nhập */}
    </div>
  );
}

export default Logginbox;
