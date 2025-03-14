import { CheckCircle, ArrowRight } from "lucide-react";

function DashBoardTProfile() {
  const tasks = [
    { id: 1, title: "Xác thực số điện thoại", completed: false },
    { id: 2, title: "Cập nhật thông tin công ty", completed: true },
    { id: 3, title: "Cập nhật Giấy đăng ký doanh nghiệp", completed: false },
    {
      id: 4,
      title: "Đăng tin tuyển dụng đầu tiên",
      completed: false,
      countdown: "02:05:06",
    },
  ];

  const exploreOptions = [
    {
      id: 1,
      title: "Đăng tin tuyển dụng",
      button: "Thử ngay",
      src: "https://tuyendung.topcv.vn/app/_nuxt/img/feeds.991a200.svg",
    },
    {
      id: 2,
      title: "Tìm kiếm CV",
      button: "Thử ngay",
      src: "https://tuyendung.topcv.vn/app/_nuxt/img/search.61ebf35.svg",
    },
    {
      id: 3,
      title: "Mua dịch vụ",
      button: "Thử ngay",
      src: "https://tuyendung.topcv.vn/app/_nuxt/img/services.54b4a22.svg",
    },
  ];
  return (
    <>
      {/* Header */}
      <div className="rounded-xl bg-white p-5 shadow-md">
        <h2 className="flex flex-col text-lg font-semibold text-gray-700">
          Xin chào,{" "}
          <span className="font-bold text-green-600">Đỗ Đăng Minh Luân</span>
        </h2>
        <p className="mt-1 text-gray-500">
          Hãy thực hiện các bước sau để gia tăng tính bảo mật cho tài khoản của
          bạn và nhận ngay{" "}
          <span className="font-semibold text-green-600">+8 Top Points</span>
        </p>

        {/* Progress & Tasks */}
        <div className="mt-4 flex flex-col items-center gap-2 space-x-3 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              0%
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between rounded-lg border p-3 ${
                  task.completed
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="h-5 w-5"
                  />
                  <span className="text-sm">{task.title}</span>
                </div>
                {task.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <ArrowRight className="text-gray-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Khám phá */}
      <div className="mt-6 rounded-xl bg-[#fff] p-5 shadow-md">
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-green-500" />
          <h2 className="text-lg font-semibold text-gray-700">
            Khám phá HopePost dành cho nhà tuyển dụng
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {exploreOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between rounded-xl border bg-[#fff] px-1 py-2"
            >
              <div>
                <img
                  src={option.src}
                  alt=""
                  className="h-auto w-auto object-cover"
                />
              </div>
              <div className="text-center">
                {" "}
                <h3 className="font-semibold text-gray-700">{option.title}</h3>
                <button className="mt-2 rounded-full bg-green-500 px-4 py-1 text-white hover:bg-green-600">
                  {option.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoardTProfile;
