import { useContext, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineGif } from "react-icons/hi2";
import { IoSaveOutline } from "react-icons/io5";
import { PiImagesSquareThin } from "react-icons/pi";
import AddImages from "./AddImages";
import { PostContext } from "../../../Context/PostProvider";
// import { form, title } from "framer-motion/m";

import { toast } from "react-toastify";
import apiPost from "../../../Services/PostApi";
import { StoreContext } from "../../../Context/StoreProvider";
type Props = {
  isShowComment: boolean;
  setShowComment: (value: boolean) => void;
  isWhatPost: string;
  setIsWhatPost: (value: string) => void;
};
function CommentBox({
  isShowComment,
  setShowComment,
  isWhatPost,
  setIsWhatPost,
}: Props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [stk, setStk] = useState("");
  const [bankname, setBankname] = useState("");
  const [isFileImages, setIsFileImages] = useState<File[]>([]);
  const postcontext = useContext(PostContext);
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    return null;
  }
  const { userInfo } = storeContext;
  const [isShowAddImage, setShowAddImage] = useState(false);
  if (!postcontext) {
    return null;
  }
  // const { PostProducts, setPostProdcts } = postcontext;

  const handleAddPostNew = async () => {
    const formData = new FormData();

    formData.append("content", text);
    formData.append("title", title);
    if (isWhatPost === "post") {
      if (isFileImages.length > 0) {
        isFileImages.forEach((file) => {
          formData.append("images", file);
        });
      }
      apiPost
        .Post(formData)
        .then((re) => {
          console.log(re?.data?.result);
          toast.success("Đăng bài viết thành công");
        })
        .catch((err) => {
          console.log(err?.response);
          toast.error(
            err?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!"
          );
        });
    } else if (isWhatPost === "postVolunn") {
      isFileImages.forEach((file) => {
        formData.append("files", file);
      });
      formData.append("stk", stk);
      formData.append("bankName", bankname);
      formData.append("location", location);
      apiPost
        .postVolunn(formData)
        .then((re) => {
          console.log(re.data.result);
          toast.success("Đăng bài viet thành công");
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            err?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!"
          );
        });
    }
    setText(""); // Xóa input sau khi đăng
    setIsFileImages([]); // Xóa hình ảnh sau khi đăng
    setShowComment && setShowComment(false);
    setIsWhatPost("");
  };
  console.log(isWhatPost);
  return (
    <div className="relative">
      {/* Lớp phủ màn hình (overlay) */}

      <div className="bg-opacity-50 fixed inset-0 z-[1000] bg-black opacity-[60%]"></div>

      {/* Popup Login/Register */}
      <div
        className={`fixed z-[1001] h-auto w-[95%] overflow-y-auto bg-[#fff] p-4 shadow-2xl transition-all duration-500 md:w-[50%] lg:w-[40%] ${
          isShowComment
            ? "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-100 rounded-2xl opacity-100 shadow-2xl"
            : "pointer-events-none top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-1 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e1e1e1] pb-4">
          <div
            onClick={() => {
              setShowComment && setShowComment(false);
              setIsWhatPost("");
            }}
          >
            Cancel
          </div>
          <h2 className="font-semibold">New Post</h2>
          <div className="flex gap-2 text-2xl">
            <IoSaveOutline className="text-xl text-gray-600" />
            <CiCircleMore />
          </div>
        </div>
        {/* ---- */}
        <div className="mt-4 flex items-center gap-2">
          <FaUserCircle className="text-4xl text-gray-400" />
          <div>
            <p className="font-semibold">{userInfo?.profile.fullName}</p>
            <p className="text-sm text-gray-400">What's new?</p>
          </div>
        </div>
        {isWhatPost === "postVolunn" && (
          <>
            <div className="">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title :"
                className="max-h-[100px] min-h-[40px] w-full resize-none overflow-y-auto border-none outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Địa điểm :"
                className="max-h-[100px] min-h-[40px] w-full resize-none overflow-y-auto border-none outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                onChange={(e) => setStk(e.target.value)}
                type="text"
                placeholder="Số tài khoản :"
                className=" max-h-[100px] min-h-[40px] w-full resize-none overflow-y-auto border-none outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                onChange={(e) => setBankname(e.target.value)}
                type="text"
                placeholder="Tên ngân hàng :"
                className="max-h-[100px] min-h-[40px] w-full resize-none overflow-y-auto border-none outline-none focus:ring-0"
              />
            </div>
          </>
        )}
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

        <div className="flex flex-col gap-10 overflow-y-scroll max-h-[200px]">
          {isShowAddImage && (
            <div className="flex h-auto w-full flex-wrap gap-[10px]">
              <div className="w-[salce(100%/1-10px)]">
                <AddImages
                  setIsFileImages={setIsFileImages}
                  setShowAddImage={setShowAddImage}
                />
              </div>
            </div>
          )}
        </div>
        {/* Icons */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-3 text-gray-500">
            <PiImagesSquareThin
              className="cursor-pointer text-2xl"
              onClick={() => setShowAddImage(true)}
            />
            <HiOutlineGif className="cursor-pointer text-2xl" />
          </div>
          <button
            className={`rounded-lg px-4 text-center text-xl font-bold ${
              text.trim()
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-500"
            }`}
            disabled={!text.trim()}
            onClick={handleAddPostNew}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
