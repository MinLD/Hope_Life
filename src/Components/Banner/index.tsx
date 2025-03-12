import { useContext, useEffect, useRef } from "react";
import Typed from "typed.js";

import { MenuContext } from "../../Context/MenuProvider";
import { Heart, Users, HelpingHand } from "lucide-react";

import bn2 from "../../assets/hãy vẽ cho tôi niềm hi vọng 09-03-2025 at 22-01-35.jpeg";
function Banner() {
  const textRef = useRef(null);
  const menuContext = useContext(MenuContext);
  if (!menuContext) return null;

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Hãy cùng nhau lan tỏa hy vọng!",
        "Giúp đỡ những người khó khăn!",
        "Mỗi hành động nhỏ mang đến sự thay đổi lớn!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="relative flex h-[340px] min-h-[300px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      {/* <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video> */}
      {/* https://www.nghilucsong.net/wp-content/uploads/2020/12/trung-tam-nghi-luc-song-top-banner3.jpg */}
      <img
        className="absolute top-0 h-[300px] w-full object-cover"
        src={bn2}
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 h-[300px] bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute z-10 mt-[-90px] flex flex-col items-center px-4 text-center text-white">
        <div className="flex flex-col items-center">
          <div>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="21.693 67.788 156.613 72.155"
              viewBox="21.693 67.788 156.613 72.155"
              height="70"
              width="70"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
            >
              <defs></defs>
              <g>
                <path
                  d="M166.431 97.193c-10.137 5.609-7.844.007-22.373-3.92-6.584-1.78-13.622-2.266-20.348-1.025-2.253.415-5.969 2.054-5.913 4.773.136 6.578 19.959 11.059 34.042 7.304-11.747 5.005-24.534 8.665-36.686 9.096-4.161.147-4.036-5.16-4.38-8.068-2.686-22.676-14.233-33.554-19.077-31.73-2.335.88-2.872 3.909-2.848 6.404.114 11.767 11.345 27.586 18.633 33.852-10.166-.455-18.415-1.536-27.109-4.09a134.374 134.374 0 0 1-10.75-3.677c-3.838-1.49-6.615-4.271-7.129-8.354-1.837-14.6-12.801-35.748-19.74-28.5-1.691 1.766-1.362 4.65-.583 6.97 2.573 7.652 9.143 19.286 14.732 25.269-7.481-1.758-17.981-1.816-24.472-.414-12.448 2.689-10.681 11.451-4.516 13.791 9.91 3.761 28.015-6.621 30.833-7.542 3.905-1.277 7.996-.075 11.601 1.358 8.116 3.226 16.642 5.409 25.282 6.657-8.128.361-16.148 1.682-23.109 3.441-4.92 1.243-20.74 6.718-18.382 14.265.714 2.285 3.26 3.413 5.588 3.968 15.82 3.776 32.031-6.147 45.713-16.034 1.476-1.066 3.152-2.908 4.893-3.473 3.517-1.141 7.231-1.389 10.848-1.78 10.534-1.139 20.781-3.815 30.648-7.571-7.665 5.354-13.808 12.879-17.436 21.5-.728 1.729-1.367 3.559-1.261 5.431.106 1.873 1.117 3.803 2.86 4.493 2.387.945 4.979-.669 6.924-2.346 15.925-13.728 17.621-28.268 18.691-31.09 1.072-2.828 4.587-4.33 7.046-5.606a174.634 174.634 0 0 0 9.653-5.382c-3.57-2.267-8.173-.019-11.875 2.03z"
                  fill="#133C2B"
                  data-color="1"
                ></path>
                <path
                  d="M84.647 89.579c-1.855-3.726-6.619-5.712-10.571-4.405-3.952 1.307-6.593 5.74-5.862 9.838.323 1.809 1.241 3.517 2.615 4.737 7.318 6.502 18.268-1.232 13.818-10.17zm-13.13 2.317c-.226-1.719 1.823-3.461 3.252-3.997 1.669-.626 4.394-.414 4.51 1.718.072 1.337-.783 2.386-1.856 3.072-1.464.937-5.556 1.865-5.906-.793zM22.349 84.42c-.806 1.984-.871 4.207-.185 6.105 1.442 3.982 6.409 5.999 10.522 4.273 8.411-3.532 6.833-16.159-1.919-16.194-3.481-.014-7.052 2.453-8.418 5.816zm6.16 2.522c-1.402 1.103-3.999 1.889-4.706-.39-.394-1.27.58-3.308 1.431-4.218 1.151-1.23 2.751-1.584 3.874-1.112 2.342.983.773 4.641-.599 5.72zm90.627 35.499c-5.94-1.266-11.584 5.57-10.006 11.128 2.668 9.399 19.273 8.327 17.532-2.72-.627-3.981-3.491-7.547-7.526-8.408zm2.013 13.146c-.664 2.224-4.745 2.655-6.561 1.488-4.702-3.027 1.39-7.336 5.197-4.79 1.061.709 1.728 2.08 1.364 3.302z"
                  fill="#D44325"
                  data-color="2"
                ></path>
              </g>
            </svg>
          </div>
          <h1 className="text-lg font-bold drop-shadow-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Chung tay trao yêu thương và Thắp sáng hy vọng
          </h1>
          <p className="text-md mt-4 font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            <span ref={textRef}></span>
          </p>
          <p className="text-md mt-4 font-semibold sm:text-2xl md:text-2xl lg:text-3xl">
            Ngày 04 tháng 04 Năm 2025
          </p>

          <button className="md:text-lg mt-2 rounded-lg bg-yellow-500 px-2 py-2 text-[12px] font-bold shadow-lg transition hover:bg-yellow-600">
            Tham gia ngay
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="bg-opacity-30 absolute bottom-0 w-full bg-white py-4 text-center text-gray-100 backdrop-blur-md">
        <p className="text-[10px] sm:text-lg">
          Cùng nhau tạo nên những điều tốt đẹp!
        </p>
      </div> */}
      <div className="md:w-[70%] lg:w-[60%] absolute bottom-[4px] left-1/2 z-20 flex h-[70px] w-[85%] -translate-x-1/2 transform items-center justify-center rounded-lg bg-[#fdf1e3] p-2 shadow-lg">
        <div className="flex items-center gap-2 text-center">
          <div className="flex flex-col items-center">
            <Heart className="text-red-500" size={25} />
            <p className="s:text-[10px] text-[8px] font-semibold text-gray-700 sm:text-[12px]">
              Giúp đỡ người khó khăn
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-blue-500" size={25} />
            <p className="s:text-[10px] text-[8px] font-semibold text-gray-700 sm:text-[12px]">
              Hỗ trợ trẻ em mồ côi
            </p>
          </div>
          <div className="flex flex-col items-center">
            <HelpingHand className="text-green-500" size={25} />
            <p className="s:text-[10px] text-[8px] font-semibold text-gray-700 sm:text-[12px]">
              Đồng hành cùng người khuyết tật
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
