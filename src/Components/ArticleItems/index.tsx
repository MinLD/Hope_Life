import { useContext, useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import TextBox from "./component/textBox";

import SliderCommon from "../SliderCommon";
import { PostContext } from "../../Context/PostProvider";
import DonationPostVolun from "../DonatePostVolun";
import ReportWarning from "../RepostWaring";

interface Post {
  id: any;
  title?: string;
  location?: string;
  images: { url: string }[];
  content: string;
  fund?: any;
  user: {
    profile: {
      fullName: string;
    };
  };

  setOpen: () => void | any;
}
function ArticleItems({
  id,
  fund,
  images,
  content,
  user,

  title,
  location,
}: Post) {
  const postcontext = useContext(PostContext);
  if (!postcontext) return;
  const { isTypePost } = postcontext;
  // const [IsHeart, setHeart] = useState<boolean>(false);
  // const [isShowComnent, setShowComnent] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any | null | []>(null);
  const [isShowDonate, setShowDonate] = useState<boolean>(false);
  // const handleHeart = () => {
  //   setHeart(!IsHeart);
  // };
  // const handleShowComnent = () => {
  //   setShowComnent(!isShowComnent);
  //   if (isShowComnent) {
  //     document.body.classList.remove("overflow-hidden");
  //   } else if (isShowComnent === false) {
  //     document.body.classList.add("overflow-hidden");
  //   }
  // };
  const text: string =
    content?.length > 300 ? content.slice(0, 300) + "..." : content;
  const handleShowImage = (src: any) => {
    setSelectedImage(src);

    document.body.classList.add("overflow-hidden"); // Chặn cuộn trang khi mở ảnh
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden"); // Gỡ bỏ chặn cuộn khi đóng ảnh
  };

  return (
    <div>
      <div className="flex flex-col gap-2 pb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FaUserCircle className="h-[25px] w-[25px]" />
              <h1 className="text-lg  font-medium">
                {user?.profile?.fullName || "Ẩn danh"}
              </h1>
            </div>
          </div>
          <div className="">
            <ReportWarning productId={id} />
          </div>
        </div>
        <h3 className="font-medium uppercase text-xl">{title && title}</h3>
        <h4 className="text-[#272727] text-s">
          {location && `Địa điểm: ${location}`}
        </h4>
        <pre className="mt-[-20px]">
          {" "}
          <TextBox text={text} />
        </pre>

        <div className="h-auto w-auto">
          {images.length >= 3 ? (
            <div onClick={() => handleShowImage(images)}>
              <SliderCommon slidesToShow={3} BoxImg={images} type="images" />
            </div>
          ) : (
            <div className="flex-wrap gap-[10px] flex">
              {Array.isArray(images) && images.length > 0
                ? images.map((item, index) => (
                    <div className="w-[calc(50%-10px)]" key={index}>
                      <img
                        src={item?.url?.replace("http://", "https://")}
                        alt={`Hình ảnh ${index}`}
                        className="h-auto w-full cursor-pointer rounded-[10px] object-cover"
                        onClick={() => handleShowImage(images)}
                      />
                    </div>
                  ))
                : ""}
            </div>
          )}
        </div>
        {/* <div className="flex items-center gap-4 text-xl">
          <div
            className={`flex items-center gap-2 rounded-2xl p-2 hover:bg-[#e1e1e1] ${IsHeart && "text-red-600"}`}
          >
            <div className="text-xl hover:cursor-pointer" onClick={handleHeart}>
              <CiHeart />
            </div>
            <p>1.4K</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl p-2 hover:bg-[#e1e1e1]">
            <div
              onClick={handleShowComnent}
              className="text-xl hover:cursor-pointer"
            >
              <FaRegComment />
            </div>
            <p>300</p>
          </div>
        </div> */}

        <div className="h-[1px] w-full bg-[#e1e1e1]"></div>
      </div>
      {/* Hiển thị ảnh đã chọn */}
      {selectedImage && (
        <div
          onClick={handleCloseImage}
          className="bg-opacity-[20%] fixed inset-0 z-[99999999] flex items-center justify-center bg-black"
        >
          <div className="relative w-[80%]">
            <button
              className="absolute top-0 right-0 z-[999999] cursor-pointer text-6xl text-[#333] hover:text-red-500"
              onClick={handleCloseImage}
            >
              <IoIosClose />
            </button>
            <div className="">
              {selectedImage.length > 1 ? (
                <SliderCommon
                  slidesToShow={1}
                  BoxImg={selectedImage}
                  type="imagesZoom"
                />
              ) : (
                <div className="flex items-center justify-center">
                  <img
                    src={selectedImage[0].url}
                    alt=""
                    className="s:h-[70vh] h-[80vw] w-[90%]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {(isTypePost === "postVolunn" || isTypePost === "paybackpost") && (
        <>
          <button
            onClick={() => setShowDonate(!isShowDonate)}
            className="mb-10 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition"
          >
            {isTypePost === "postVolunn"
              ? "Đóng góp"
              : "Xem Danh sách người quyên góp"}
          </button>
          {isShowDonate && (
            <DonationPostVolun
              id={id}
              onClose={() => setShowDonate(false)}
              fund={fund}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ArticleItems;
