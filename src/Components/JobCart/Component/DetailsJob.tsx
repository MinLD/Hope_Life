const DetailsJob = () => {
  return (
    <div className="w-full max-w-xl rounded-xl bg-white p-4 shadow-md">
      <div className="flex gap-3">
        <img
          src="https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg"
          alt="Company Logo"
          className="h-24 w-24 rounded-md object-cover"
        />
        <div>
          <h3 className="text-[15px] font-bold">
            Nhân Viên Kỹ Thuật (Nhận Việc Ngay - Thu Nhập Cao)
          </h3>
          <p className="text-[12px] font-semibold text-gray-500">
            CÔNG TY CỔ PHẦN DINH DƯỠNG NUTRICARE
          </p>
          <p className="font-semibold text-green-600">9 - 12 triệu</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
        <span>📍 Bắc Ninh</span>
        <span>📆 1 năm</span>
        <span>⏳ Còn 21 ngày</span>
      </div>
      <div className="mt-2 h-[1px] w-full bg-[#e1e1e1]"></div>
      <div className="max-h-[200px] overflow-y-scroll">
        <div className="mt-4">
          <h4 className="text-md font-bold text-green-700">Mô tả công việc</h4>
          <ul className="list-inside list-disc text-sm text-gray-700">
            <li>Vận hành máy, thực hiện kế hoạch sản xuất trong ca</li>
            <li>Theo dõi, kiểm tra tình trạng máy móc, thay nguyên liệu</li>
            <li>Đáp ứng và đảm bảo tiến độ sản xuất</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-bold text-green-700">Quyền lợi</h4>
          <ul className="list-inside list-disc text-sm text-gray-700">
            <li>Mức lương: 9 - 12 triệu/tháng</li>
            <li>Xét tăng lương 2 lần/năm</li>
            <li>Thưởng Lễ, Tết</li>
            <li>Khám sức khoẻ định kỳ</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-bold text-green-700">
            Thời gian làm việc
          </h4>
          <ul className="list-inside list-disc text-sm text-gray-700">
            <li>Thứ 2 - Thứ 6 (từ 08:30 đến 17:30)</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-bold text-green-700">
            Địa điểm làm việc
          </h4>
          <ul className="list-inside list-disc text-sm text-gray-700">
            <li>
              {" "}
              Hà Nội: 541 Vũ Tông Phan, phường Khương Đình, quận Thanh Xuân,
              Thanh Xuân
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button className="flex-1 rounded-md bg-green-500 py-2 font-semibold text-white">
          Ứng tuyển
        </button>
        <button className="flex-1 rounded-md border border-green-500 py-2 font-semibold text-green-500">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default DetailsJob;
