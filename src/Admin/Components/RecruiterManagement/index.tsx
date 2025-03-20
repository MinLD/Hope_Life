import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Apis/ApiAdmin";


// Định nghĩa kiểu dữ liệu cho user


const RecruiterManagement = () => {


  const handleGetAllPostJob = () => {
    ApiAdmin.GetAllPostJobNoneActive()
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    handleGetAllPostJob();
  }, []);

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Nhà tuyển dụng</h2>
      <div className="mb-3 flex items-center gap-2">
        <button className="flex items-center rounded bg-blue-500 px-4 py-2 text-white">
          <FaPlus className="mr-2" /> Thêm User
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng"
            className="rounded-xl border p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default RecruiterManagement;
