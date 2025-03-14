export default function CVManagement() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-4 shadow-md md:grid-cols-2">
        <input
          type="text"
          placeholder="Tìm kiếm tên, email, số điện thoại"
          className="rounded border border-gray-300 p-2"
        />
        <select className="rounded border border-gray-300 p-2">
          <option>Chọn chiến dịch tuyển dụng</option>
          <option>Chiến dịch A</option>
          <option>Chiến dịch B</option>
        </select>
        <select className="rounded border border-gray-300 p-2">
          <option>Nhập trạng thái CV</option>
          <option>Đang xử lý</option>
          <option>Đã duyệt</option>
        </select>
        <select className="rounded border border-gray-300 p-2">
          <option>Tất cả thời gian</option>
          <option>Tuần này</option>
          <option>Tháng này</option>
        </select>
      </div>

      <div className="mddd:flex-row mt-4 flex flex-col items-center justify-between gap-2 rounded-lg bg-green-100 p-3 text-green-700">
        <span>
          Đồng bộ hồ sơ ứng viên từ các website tuyển dụng, gửi email tự động,
          đặt lịch phỏng vấn.
        </span>
        <button className="rounded border border-green-600 bg-white px-3 py-2 text-green-600">
          Đăng ký ngay
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
        <img
          src="https://tuyendung.topcv.vn/app/_nuxt/img/empty.73d75f4.png"
          alt="No CV"
          className="h-32 w-32"
        />
        <p className="mt-4 text-gray-500">Bạn không có CV</p>
        <button className="mt-4 rounded bg-green-600 px-4 py-2 text-white">
          Thêm dịch vụ
        </button>
      </div>
    </div>
  );
}
