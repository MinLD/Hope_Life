export default function ContractAgreement() {
  // const handleAgreement = () => {
  //   if (agreed) {
  //     toast.success(
  //       "Bạn đã chấp nhận hợp đồng. Hành vi vi phạm có thể dẫn đến hậu quả pháp lý nghiêm trọng.",
  //     );
  //     setIsApproved(true);
  //   } else {
  //     toast.warning(
  //       "Bạn bắt buộc phải đồng ý với hợp đồng trước khi sử dụng dịch vụ.",
  //     );
  //   }
  // };

  return (
    <div className="s:max-w-lg relative h-auto w-full max-w-[80%] rounded-xl bg-white p-6 shadow-lg sm:max-w-lg">
      <h2 className="mb-4 font-semibold text-red-600 md:text-2xl">
        HỢP ĐỒNG RÀNG BUỘC PHÁP LÝ
      </h2>
      <div className="h-64 max-h-[200px] overflow-y-auto rounded-md border bg-gray-50 p-4 text-gray-800">
        <p className="font-bold md:text-lg">CẢNH BÁO:</p>
        <p>
          1. Khi chấp nhận hợp đồng này, bạn hoàn toàn chịu trách nhiệm pháp lý
          về mọi nội dung đăng tải.
        </p>
        <p>
          2. Nếu phát hiện hành vi lừa đảo, vi phạm quy định, bạn có thể bị
          kiện, chịu mức phạt theo quy định pháp luật.
        </p>
        <p>
          3. Chúng tôi có quyền cung cấp thông tin của bạn cho cơ quan chức năng
          khi cần thiết.
        </p>
        <p>
          4. Mọi hành vi vi phạm sẽ bị xử lý nghiêm khắc, có thể dẫn đến khóa
          tài khoản vĩnh viễn, truy tố hình sự.
        </p>
        <p>
          5. Việc nhấn "Đồng ý" đồng nghĩa với việc bạn chấp nhận mọi điều khoản
          và hậu quả nếu vi phạm.
        </p>
      </div>
      <div className="mt-4 flex items-center">
        {/* <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 cursor-pointer"
        /> */}
        {/* <label
          htmlFor="agree"
          className="ml-2 font-bold text-red-600 md:text-sm"
        >
          Tôi hiểu rõ và cam kết tuân thủ nghiêm ngặt hợp đồng này.
        </label> */}
      </div>
      {/* <button className="mt-4 w-full cursor-pointer rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800">
        Xác Nhận và Tiếp Tục
      </button> */}
      {/* <div
        className="absolute top-0 right-3 cursor-pointer"
        onClick={() => setClose(false)}
      >
        <IoIosClose size={40} />
      </div> */}
    </div>
  );
}
