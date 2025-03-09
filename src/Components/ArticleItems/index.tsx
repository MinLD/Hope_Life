import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaUserCircle } from "react-icons/fa";

import TextBox from "./component/textBox";
import CommentBox from "./component/CommentBox";
type layoutProps = {
  name?: string;
  image?: { src?: string }[];

  label: string;
};

function ArticleItems({ image = [], label }: layoutProps) {
  const [IsHeart, setHeart] = useState<boolean>(false);
  const [isShowComnent, setShowComnent] = useState<boolean>(false);
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
  console.log(image);

  return (
    <div>
      <div className="flex flex-col gap-5 pb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FaUserCircle className="h-[25px] w-[25px]" />
              <h1 className="text-sm font-medium">Luân ĐỖ</h1>
            </div>
            <div className="text-[14px] text-[#c5c5c5]">5h</div>
          </div>
          <div>
            <svg
              aria-label="More options"
              className="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>More options</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>

        <TextBox text={label} />

        <div className="flex h-auto w-full flex-wrap gap-[8px]">
          {image.map((item, index) => (
            <img
              src={item.src}
              alt=""
              className="h-auto w-[calc(100%/2-8px)] rounded-[10px] object-cover"
              key={index}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 text-xl">
          <div
            className={`flex items-center gap-2 rounded-2xl p-2 hover:bg-[#e1e1e1] ${IsHeart && "text-red-600"}`}
          >
            <div
              className="text-3xl hover:cursor-pointer"
              onClick={handleHeart}
            >
              <CiHeart />
            </div>
            <p>1.4K</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl p-2 hover:bg-[#e1e1e1]">
            <div
              onClick={handleShowComnent}
              className="text-3xl hover:cursor-pointer"
            >
              <FaRegComment />
            </div>
            <p>300</p>
          </div>
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
    </div>
  );
}

export default ArticleItems;
