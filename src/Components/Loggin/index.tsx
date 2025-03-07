import { FaFacebookF } from "react-icons/fa";

import InputBox from "./Component/inputBox";
import MyButton from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MyLogIn() {
  const [isType, setIsType] = useState<string>("Login");
  const navigate = useNavigate();
  const handleReturnToHome = () => {
    navigate("/Home");
    window.location.reload();
  };
  return (
    <div className="h-auto max-w-[100%] rounded-lg bg-[#fff] px-10 pt-5 pb-10">
      <h1 className="pb-10 text-center text-[30px] font-bold text-[#0b4d8d]">
        {isType === "Register" ? "Đăng ký" : "Đăng nhập"}
      </h1>
      <div className="flex flex-col gap-5 pb-10">
        {isType === "Register" && (
          <>
            <InputBox type="text" placeholder="Họ và tên" />
            <InputBox type="text" placeholder="Số điện thoại" />
          </>
        )}
        <InputBox type="email" placeholder="Email" />
        <InputBox type="Password" placeholder="password" />
        {isType === "Register" && (
          <>
            <InputBox type="Password" placeholder="Nhập lại password" />
          </>
        )}

        {isType === "Login" && (
          <div className="flex gap-1">
            <InputBox type="checkbox" />
            <label htmlFor="">Ghi nhớ mật khẩu</label>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div onClick={() => handleReturnToHome()}>
          <MyButton
            content={isType === "Login" ? "Đăng nhập" : "Đăng ký"}
            isColor="bg-[#0b4d8d]"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <p>
              {isType === "Login"
                ? " Bạn chưa có tài khoản?"
                : "Bạn đã có tài khoản?"}
            </p>
            <p className="text-[#0b4d8d] hover:cursor-pointer">
              {isType === "Login" ? (
                <span onClick={() => setIsType("Register")}> Đăng ký ngay</span>
              ) : (
                <span onClick={() => setIsType("Login")}> Đăng nhập ngay</span>
              )}
            </p>
          </div>
          <p className="text-[#0b4d8d]">
            {isType === "Login" ? " Quên mật khẩu?" : ""}
          </p>
        </div>
      </div>
      {isType === "Login" && (
        <div className="flex flex-col gap-5 pt-5">
          <div className="flex items-center gap-2">
            <div className="h-px w-full bg-gray-300"></div>
            <p className="w-[300px] text-gray-500">Đăng nhập với</p>
            <div className="h-px w-full bg-gray-300"></div>
          </div>

          <div className="flex justify-between gap-2">
            <MyButton
              content={
                <div className="flex items-center gap-2 text-[#fff]">
                  <FaFacebookF size={15} />
                  <p>FACEBOOK</p>
                </div>
              }
              isColor="bg-[#0b4d8d]"
            />
            <button className="flex h-[35px] w-full max-w-full min-w-[106px] cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-none bg-[#33333] p-2 font-medium transition hover:bg-orange-100 active:scale-95">
              <img
                src="https://elearning.iigvietnam.com/images/icons/Google.svg"
                alt=""
              />{" "}
              GOOGLE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyLogIn;
