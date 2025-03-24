import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaUserCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import TextBox from "./component/textBox";
import CommentBox from "./component/CommentBox";
import SliderCommon from "../SliderCommon";
import MyButton from "../Button";
interface Post {
  images: { url: string }[];
  content: string;
  user: {
    profile: {
      fullName: string;
    };
  };

  setOpen: () => void | any;
}
function ArticleItems({ images, content, user, setOpen }: Post) {
  const [IsHeart, setHeart] = useState<boolean>(false);
  const [isShowComnent, setShowComnent] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any | null | []>(null);
  const handleHeart = () => {
    setHeart(!IsHeart);
  };
  const handleShowComnent = () => {
    setShowComnent(!isShowComnent);
    if (isShowComnent) {
      document.body.classList.remove("overflow-hidden");
    } else if (isShowComnent === false) {
      document.body.classList.add("overflow-hidden");
    }
  };
  const text: string =
    content.length > 300 ? content.slice(0, 300) + "..." : content;
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
              <h1 className="text-sm font-medium">
                {user?.profile?.fullName || "Ẩn danh"}
              </h1>
            </div>
            <div className="text-[14px] text-[#c5c5c5]">5h</div>
          </div>
        </div>

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
            <div className="flex-wrap gap-[8px]">
              {Array.isArray(images) && images.length > 0
                ? images.map((item, index) => (
                    <img
                      src={item?.url?.replace("http://", "https://")}
                      alt={`Hình ảnh ${index}`}
                      className="h-auto w-[calc(100%/2-8px)] cursor-pointer rounded-[10px] object-cover"
                      key={index}
                      onClick={() => handleShowImage(images)}
                    />
                  ))
                : ""}
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 text-xl">
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
        </div>
        <div onClick={() => setOpen()} className="max-w-[100px]">
          <MyButton content={"Giúp đỡ họ"} type="button" isColor="bg-[#333]" />
        </div>

        <div className="h-[1px] w-full bg-[#e1e1e1]"></div>
        {isShowComnent && (
          <CommentBox
            onClick={handleShowComnent}
            isShowComnent={isShowComnent}
            setShowComnent={setShowComnent}
          />
        )}
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
    </div>
  );
}

export default ArticleItems;
