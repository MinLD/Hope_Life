import { Info } from "lucide-react";
import MyButton from "../../Components/Button";

export default function ServiceSelection() {
  return (
    <div className="min-h-screen">
      {/* Thông báo quan trọng */}
      <div className="mb-6 border-l-4 rounded-2xl border-blue-500 bg-blue-100 p-4 text-blue-700">
        <div className="flex items-center">
          <Info className="mr-2" />
          <div>
            <p className="font-semibold">Lưu ý quan trọng</p>
            <p>
              Nhằm tránh rủi ro mạo danh và lừa đảo, TopCV khuyến nghị Quý khách
              hàng không chuyển khoản vào bất cứ tài khoản cá nhân nào và chỉ
              thực hiện thanh toán vào các tài khoản chính thức của chúng tôi.
            </p>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-col items-center rounded-lg bg-white p-10 shadow-lg">
        <img
          src="https://tuyendung.topcv.vn/app/_nuxt/img/invoice_service_empty.25af6a6.png"
          alt="Services"
          className="mb-4 w-2/3"
        />
        <p className="text-xl text-gray-600">
          Bạn chưa có dịch vụ nào trong tài khoản
        </p>
        <MyButton
          content={" Thêm dịch vụ"}
          isColor="bg-[#0d7153] "
          isWidth="w-[30%]"
        ></MyButton>
      </div>
    </div>
  );
}
