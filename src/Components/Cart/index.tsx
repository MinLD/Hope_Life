import { useState } from "react";
type Props = {
  id: number;
  src: string;
  title: string;
};
function CartItems({ id, title, src }: Props) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="relative h-auto w-[95%] cursor-pointer rounded-lg transition-all duration-500 hover:scale-110"
      onMouseLeave={() => setIsShow(false)}
    >
      <img
        src={src}
        alt=""
        className={`h-auto w-full rounded-lg shadow-md transition-transform duration-300 ease-in-out "${isShow ? "scale-90" : "scale-100"}`}
        onMouseEnter={() => setIsShow(true)}
      />
      <div
        className={`absolute top-0 left-0 flex h-full w-[0px] items-center justify-center rounded-lg bg-[#3333] transition-all duration-500 ${isShow && "w-full"}`}
      >
        <p
          className={`text-center text-[12px] font-medium text-white opacity-0 transition-all duration-500 ${isShow && "opacity-100"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default CartItems;
