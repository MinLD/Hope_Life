import MyLogIn from "../../Components/Loggin";
import bglout from "../../assets/bg-2.jpg";
import Cookies from "js-cookie";
function Logginbox() {
  const token = Cookies.get("token");
  return (
    <>
      {!token && (
        <div className="flex h-[100vh] opacity-90">
          <div className="relative w-full overflow-auto p-2 shadow-2xl lg:w-[50%]">
            <div className="absolute top-1/2 left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-[100%]">
              <MyLogIn />
            </div>
            <div
              style={{ backgroundImage: `url(${bglout})` }}
              className="absolute top-0 z-[99] h-screen w-full object-cover opacity-[40%]"
            ></div>
            {/* <div className="absolute top-0 h-1/2 w-full bg-[url(https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092SVn/background-gach-dep_015106164.jpg)] object-cover opacity-[100%]"></div> */}
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
                Hỗ trợ những người có hoàn cảnh khó khăn, kết nối cơ hội việc
                làm và bán sản phẩm thủ công.
              </p>
              <p className="mt-2 text-base text-gray-500">
                "Hành động nhỏ, ý nghĩa lớn – Cùng nhau tạo nên thay đổi!"
              </p>
            </div>
          </div>

          {/* Cột bên phải - Đăng nhập */}
        </div>
      )}
    </>
  );
}

export default Logginbox;
