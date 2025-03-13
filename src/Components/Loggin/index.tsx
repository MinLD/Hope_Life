import { FaFacebookF } from "react-icons/fa";
import * as Yup from "yup";
import InputBox from "./Component/inputBox";
import MyButton from "../Button";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import { GetInfo, Register, SignIn } from "../../Apis/AuthService";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { StoreContext } from "../../Context/StoreProvider";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../Context/MenuProvider";
import LoadingTextCommon from "../LoaddingCommon";
import { i } from "framer-motion/client";
function MyLogIn() {
  const [isloading, setLoading] = useState<boolean>(false);
  const menuContext = useContext(MenuContext);
  if (!menuContext) return null;
  const { isType, setIsType } = menuContext;

  const storeContext = useContext(StoreContext);
  const navigate = useNavigate();
  if (!storeContext) return null;
  const { setUserInfo } = storeContext;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordrl: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email is Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is Required"),
      ...(isType === "Register" && {
        passwordrl: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is Required"),
      }),
    }),

    onSubmit: async (values) => {
      const { email: username, password } = values;
      console.log("1");
      if (isType === "Login") {
        console.log("2");
        setLoading(true);
        await SignIn(username, password)
          .then((res) => {
            const { id, token, refreshToken } = res.data;
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("id", id);
            toast.success("Login Success");
            GetInfo(id).then((res) => setUserInfo?.(res.data));
            formik.resetForm();
            navigate("/");
            setLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setLoading(false);
          });
      }
      if (isType === "Register") {
        if (formik.values.password !== formik.values.passwordrl) {
          toast.error("Hai mat khau khong khop nhau");
          return;
        }
        setLoading(true);
        await Register(username, password)
          .then((res) => {
            toast.success(res.data.message);

            setIsType("Login");
            setLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setLoading(false);
          });
      }
    },
  });
  console.log(isType);

  return (
    <div className="s:min-w-[400px] h-auto w-full max-w-full min-w-[300px] rounded-lg pt-5 pb-10">
      <h1 className="pb-10 text-center text-[30px] font-bold text-[#0b4d8d]">
        {isType === "Register" ? "Đăng ký" : "Đăng nhập"}
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-5 pb-10">
          {/* {isType === "Register" && (
            <>
              <InputBox type="text" placeholder="Họ và tên" />
              <InputBox type="text" placeholder="Số điện thoại" />
            </>
          )} */}
          <InputBox
            type="text"
            placeholder="Email"
            id={"email"}
            Formik={formik}
            lable="email *"
            name="email"
          />
          <InputBox
            type="Password"
            placeholder="password"
            id="password"
            lable="password *"
            Formik={formik}
            name="password"
          />
          {isType === "Register" && (
            <>
              <InputBox
                type="Password"
                placeholder="Nhập lại password"
                id="passwordrl"
                lable="password *"
                Formik={formik}
                name="passwordrl"
              />
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
          <div>
            <MyButton
              type="submit"
              content={
                isType === "Login" ? (
                  <div className="flex items-center gap-2">
                    {isloading && LoadingTextCommon()} Đăng nhập
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {isloading && LoadingTextCommon()} Đăng Ký
                  </div>
                )
              }
              isColor="bg-[#0b4d8d]"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <p className="text-[15px]">
                {isType === "Login"
                  ? " Bạn chưa có tài khoản?"
                  : "Bạn đã có tài khoản?"}
              </p>
              <p className="text-[15px] text-[#0b4d8d] hover:cursor-pointer">
                {isType === "Login" ? (
                  <span onClick={() => setIsType("Register")}>
                    {" "}
                    Đăng ký ngay
                  </span>
                ) : (
                  <span onClick={() => setIsType("Login")}>
                    {" "}
                    Đăng nhập ngay
                  </span>
                )}
              </p>
            </div>
            <p className="text-[15px] text-[#0b4d8d]">
              {isType === "Login" ? " Quên mật khẩu?" : ""}
            </p>
          </div>
        </div>
      </form>
      {isType === "Login" && (
        <div className="flex flex-col gap-5 pt-5">
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-gray-300"></div>
            <p className="text-[15px] whitespace-nowrap text-gray-500">
              Đăng nhập với
            </p>
            <div className="h-[1px] flex-1 bg-gray-300"></div>
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
