type prop = { title: string; price: string; description: string };
const JobPlanCard = ({ title, price, description }: prop) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-green-600">{price} VND</p>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex gap-3 flex-col">
        <button className="flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2 text-green-600">
          🛒 Thêm vào giỏ
        </button>
        <button className="rounded-lg bg-green-600 px-6 py-2 text-white">
          Mua ngay
        </button>
      </div>
    </div>
  );
};

const BuyService = () => {
  const plans = [
    {
      title: "TOP MAX TRIAL",
      price: "2,887,500",
      description:
        "Trải nghiệm đăng tin tuyển dụng hiệu quả với vị trí nổi bật trong Việc làm tốt nhất kết hợp cùng các dịch vụ cao cấp, giá dùng thử hấp dẫn.",
    },
    {
      title: "TOP PRO TRIAL",
      price: "2,448,000",
      description:
        "Trải nghiệm đăng tin tuyển dụng tối ưu với vị trí ưu tiên trong Việc làm hấp dẫn kết hợp cùng các dịch vụ cao cấp, giá dùng thử hấp dẫn.",
    },
    {
      title: "TOP ECO PLUS TRIAL",
      price: "2,112,000",
      description:
        "Trải nghiệm đăng tin tuyển dụng tiết kiệm với vị trí hiển thị trong Đề xuất việc làm liên quan kết hợp cùng các dịch vụ khác, giá dùng thử hấp dẫn.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-bold text-green-600">TOP JOBS TRIAL</h2>
        <h1 className="mt-2 text-2xl font-bold">ĐĂNG TIN TUYỂN DỤNG</h1>
        <p className="mt-2 text-gray-600">
          Trải nghiệm cộng hưởng sức mạnh công nghệ tạo ra hiệu quả đột phá cho
          tin tuyển dụng của Doanh nghiệp với chi phí tối ưu.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <JobPlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyService;
