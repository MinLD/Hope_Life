const UserProfileDashboard = () => {
  return (
    <div className="mx-auto mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Hồ sơ người dùng */}
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="text-xl font-semibold">Đỗ Đặng Minh Luân</h2>
            <p className="text-sm text-gray-500">Mã NTD: 716013</p>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <p className="text-gray-600">dodangminhluan@gmail.com</p>
              <span className="text-gray-400">|</span>
              <p className="text-gray-600">0888125640</p>
            </div>
          </div>
        </div>
        <div className="mt-4 inline-block rounded-lg bg-green-100 p-3 text-sm font-semibold text-green-700">
          MEMBER - Hạng khách hàng
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Điểm xét hạng</h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">0 TP</span>
            <p className="text-sm text-red-500">
              Bạn cần đạt tối thiểu cấp độ xác thực 2 để xét hạng
            </p>
          </div>
          <button className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white">
            Xác thực ngay
          </button>
        </div>
      </div>

      {/* Top Point & Credit */}
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold">Top Point (TP)</h3>
        <div className="mt-2 rounded-lg bg-gradient-to-b from-green-400 to-[#0d7153] p-4 text-white">
          <p>Điểm tích lũy đổi quà</p>
          <p className="text-2xl font-bold">0 TP</p>
          <button className="mt-2 rounded-lg bg-white px-4 py-2 text-green-600">
            Đổi quà
          </button>
        </div>

        <h3 className="mt-6 text-lg font-semibold">Credit (CP)</h3>
        <div className="mt-2 flex justify-between rounded-lg bg-gray-100 p-4">
          <div>
            <p className="text-sm text-gray-500">Chính</p>
            <p className="text-lg font-bold">0 CP</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Khuyến mãi</p>
            <p className="text-lg font-bold">0 CP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
