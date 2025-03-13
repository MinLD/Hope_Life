import { JSX, ReactNode } from "react";

import cls from "classnames";
type layoutProps = {
  content: string | ReactNode | JSX.Element;
  isWidth?: string;
  isColor?: string;
  type?: "submit" | "reset" | "button";
};
function MyButton({
  content,
  isWidth,
  isColor,
  type,
}: layoutProps): JSX.Element {
  return (
    <button
      className={cls(
        "flex h-auto max-w-full min-w-[100px] cursor-pointer items-center justify-center rounded-md border-none p-2 font-medium text-[#fff] transition hover:bg-[#79c776] active:scale-95",

        isColor ? isColor : "bg-[#f38120]",
        isWidth ? isWidth : "w-full",
      )}
      type={type}
    >
      {content}
    </button>
  );
}

export default MyButton;
