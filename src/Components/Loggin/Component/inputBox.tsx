import { useState } from "react";

type layoutProps = {
  type: string;
  placeholder?: string;
  id?: string;
  lable?: string;
  Formik?: any;
  name?: string;
  value?: string;
};
function InputBox({ type, placeholder, id = "", Formik, name }: layoutProps) {
  const isErr = Formik?.touched[id] && Formik.errors[id];
  const messageErr = Formik?.errors[id];
  const [isShow] = useState<string>("Password");
  return (
    <div>
      <div className="relative">
        <input
          type={type === "Password" ? isShow : type}
          placeholder={placeholder}
          className="w-full rounded-lg border pt-2 pb-2 pl-4"
          onBlur={Formik?.handleBlur}
          onChange={Formik?.handleChange}
          value={Formik?.values[id] || ""}
          name={name}
        />
        {/* {type === "Password" && (
          <div className="absolute top-1/2 right-3 -translate-y-[50%] transform">
            {isShow === "Password" ? (
              <span
                className="cursor-pointer"
                onClick={() => setIsShow("text")}
              >
                <FaRegEye />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setIsShow("Password")}
              >
                <FaRegEyeSlash />
              </span>
            )}
          </div>
        )} */}
      </div>
      {isErr && <p className="text-red-500">*{messageErr}</p>}
    </div>
  );
}

export default InputBox;
