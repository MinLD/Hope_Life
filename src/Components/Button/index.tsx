import { JSX, ReactNode } from "react";

import cls from "classnames";
type layoutProps = {
  content: string | ReactNode | JSX.Element;
  isWidth?: string;
  isColor?: string;
};
function MyButton({ content, isWidth, isColor }: layoutProps): JSX.Element {
  return (
    <button
      className={cls(
        "flex h-[35px] max-w-full min-w-[106px] cursor-pointer items-center justify-center rounded-md border-none p-2 font-medium text-[#fff] transition hover:bg-orange-100 active:scale-95",

        isColor ? isColor : "bg-[#f38120]",
        isWidth ? isWidth : "w-full",
      )}
    >
      {content}
    </button>
  );
}

export default MyButton;
