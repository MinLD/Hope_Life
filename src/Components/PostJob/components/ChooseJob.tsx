import { useState } from "react";
import MyButton from "../../Button";
import { FaBell } from "react-icons/fa";

function ChooseJob() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="relative z-999">
          <div className="bg-opacity-50 fixed inset-0 bg-black opacity-[50%]"></div>
          <div className="fixed top-1/2 left-1/2 flex h-auto w-auto -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded-3xl bg-[#fff] p-5">
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl font-medium text-[#333]">Chào bạn</p>
              <div className="flex items-center gap-2">
                <p className="text-md text-[#c5c5c5]">
                  Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!
                </p>
                <FaBell className="text-2xl text-amber-300" />
              </div>
            </div>
            <div className="border-b border-[#e1e1e1]"></div>
            <div className="flex flex-col items-center">
              <p className="text-[14px]">
                Để tối ưu tốt nhất cho trải nghiệm của bạn với HOPE, vui lòng
                lựa chọn nhóm phù hợp nhất với bạn.
              </p>

              <div className="relative z-2 max-h-[400px] max-w-full">
                <div className={`flex h-auto w-full justify-between gap-20`}>
                  <div className="flex w-1/2 flex-col items-center gap-4">
                    <img
                      src="https://tuyendung.topcv.vn/app/_nuxt/img/bussiness.efbec2d.png"
                      alt=""
                    />
                    <div
                      className="w-[100%] text-[12px] mdd:text-[14px] lg:text-[18px]"
                      onClick={() => setIsOpen(false)}
                    >
                      {" "}
                      <MyButton
                        content={"Tôi là nhà tuyển dụng"}
                        isColor="bg-[#00b14f]"
                      />
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-col items-center gap-4">
                    <img
                      src="https://tuyendung.topcv.vn/app/_nuxt/img/student.c1c39ee.png"
                      alt=""
                    />
                    <div className="w-[100%] text-[12px] mdd:text-[14px] lg:text-[18px]">
                      <MyButton
                        content={"Tôi là ứng viên tìm việc"}
                        isColor="bg-[#00b14f]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChooseJob;
