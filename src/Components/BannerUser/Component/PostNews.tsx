import { Camera, Smile, Video } from "lucide-react";
type Props = {
  onClick: () => void;
};
function PostNews({ onClick }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-lg p-4">
      <div className="flex gap-2">
        <img
          src="https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/453654638_1497123177844017_3448351565239802597_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hm9-cv1bMtAQ7kNvgEq7xiY&_nc_oc=AdgM370qIXnGJovPygypIWAe8yReJsBaZWT72S-JDABGocJGrFopfEgpfsPtRAeKm0X8k9aV2kfRMXB03cS8sVYH&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=A7xtAT0g-Gh6OY_EL9Dzov3&oh=00_AYAb7tVJ-_0sQdc9NvWQAt6b4xJ6xQS-Bjc8CcTngJlmRQ&oe=67CF1F79"
          alt=""
          className="h-[50px] w-[50px] rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind, Đỗ?"
          className="w-[100%] rounded-3xl pl-2 text-[#94979b] outline-none"
          onClick={onClick}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="text-[#f02849]" />
          <p className="text-[#94979b]">Live video</p>
        </div>
        <div className="flex items-center gap-2">
          <Camera className="text-[#45bb61]" />
          <p className="text-[#94979b]">Live video</p>
        </div>
        <div className="flex items-center gap-2">
          <Smile className="text-[#e7ad28]" />
          <p className="text-[#94979b]">Live video</p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] border-b-1 border-[#e1e1e1]"></div>
    </div>
  );
}

export default PostNews;
