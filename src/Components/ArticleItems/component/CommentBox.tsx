import { useContext, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineGif } from "react-icons/hi2";
import { IoSaveOutline } from "react-icons/io5";
import { PiImagesSquareThin } from "react-icons/pi";
import AddImages from "./AddImages";
import { PostContext } from "../../../Context/PostProvider";
type Props = {
  onClick: () => void;
  isShowComnent: boolean;
  setShowComnent?: (value: boolean) => void;
  handleShowComnent?: () => void;
};
function CommentBox({
  onClick,
  isShowComnent,
  setShowComnent,
  handleShowComnent,
}: Props) {
  const [text, setText] = useState("");
  const [isFileImages, setIsFileImages] = useState<string[]>([]);
  const postcontext = useContext(PostContext);
  const [isShowAddImage, setShowAddImage] = useState(false);
  if (!postcontext) {
    console.error("PostContext is not available");
    return null;
  }
  const { PostProducts, setPostProdcts } = postcontext;

  const handleAddPostNew = () => {
    if (!setPostProdcts) {
      console.error("setPostProdcts is not defined");
      return;
    }

    const newPost = {
      id: Date.now(), // Dùng timestamp để tạo id duy nhất
      label: text.trim(),
      image: isFileImages.map((src) => ({ src })),
    };

    console.log(newPost);
    setPostProdcts([newPost, ...PostProducts]);
    setText(""); // Xóa input sau khi đăng
    setIsFileImages([]); // Xóa hình ảnh sau khi đăng
    setShowComnent && setShowComnent(false);
    handleShowComnent && handleShowComnent();
  };
  return (
    <div className="relative">
      {/* Lớp phủ màn hình (overlay) */}

      <div
        className="bg-opacity-50 fixed inset-0 z-[1000] bg-black opacity-[60%]"
        onClick={onClick}
      ></div>

      {/* Popup Login/Register */}
      <div
        className={`fixed z-[1001] h-auto w-[80%] overflow-y-auto bg-[#fff] p-4 transition-all duration-500 md:w-[50%] lg:w-[40%] ${
          isShowComnent
            ? "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-100 rounded-2xl opacity-100 shadow-2xl"
            : "pointer-events-none top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-1 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e1e1e1] pb-4">
          <div>Cancel</div>
          <h2 className="font-semibold">New Post</h2>
          <div className="flex gap-2 text-2xl">
            <IoSaveOutline className="text-xl text-gray-600" />
            <CiCircleMore />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <FaUserCircle className="text-4xl text-gray-400" />
          <div>
            <p className="font-semibold">dodangminhluan</p>
            <p className="text-sm text-gray-400">What's new?</p>
          </div>
        </div>

        {/* Input Box */}
        <div className="mt-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="max-h-[100px] min-h-[40px] w-full resize-none overflow-y-auto border-none outline-none focus:ring-0"
            placeholder="Write a comment..."
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement; // Ép kiểu
              target.style.height = "40px"; // Giữ chiều cao ban đầu
              target.style.height = target.scrollHeight + "px"; // Mở rộng xuống dưới
            }}
          />
        </div>

        <div className="flex flex-col gap-10">
          {isShowAddImage && (
            <div className="flex h-auto w-full flex-wrap gap-[10px]">
              <div className="w-[salce(100%/1-10px)]">
                <AddImages
                  SetIsFileImages={setIsFileImages}
                  setShowAddImage={setShowAddImage}
                />
              </div>
            </div>
          )}
          {/* Icons */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3 text-gray-500">
              <PiImagesSquareThin
                className="cursor-pointer text-2xl"
                onClick={() => setShowAddImage(true)}
              />
              <HiOutlineGif className="cursor-pointer text-2xl" />
            </div>
            <button
              className={`rounded-lg px-4 ${
                text.trim()
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
              disabled={!text.trim()}
              onClick={handleAddPostNew}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
