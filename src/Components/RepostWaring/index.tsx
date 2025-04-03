import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import Api from "../../Services/PostApi";
import { toast } from "react-toastify";

const ReportWarning = ({ productId }: { productId: any }) => {
  const [open, setOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const handleReport = () => {
    Api.ReportPosrtVolunn(productId, reportReason)
      .then((res) => {
        console.log(res.data.result);
        setOpen(false);
        toast.success("Báo cáo thanh cong!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setOpen(false);
      });
  };

  return (
    <div>
      <button
        className=" flex items-center justify-center text-red-600 "
        onClick={() => setOpen(true)}
      >
        <CiWarning size={20} />
      </button>
      {open && (
        <div className="">
          <div className="fixed inset-0 opacity-50 flex items-center justify-center bg-black bg-opacity-50 z-[99]"></div>
          <div className="fixed inset-0 flex items-center justify-center z-[999] ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold text-center text-red-600">
                Xác nhận báo cáo
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Bạn có chắc chắn muốn báo cáo bài viết này không?
              </p>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Lý do báo cáo
                </label>
                <textarea
                  className="w-full border p-2 mt-1 rounded"
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  placeholder="Nhập lý do..."
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="px-4 py-2 border rounded"
                  onClick={() => setOpen(false)}
                >
                  Hủy
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleReport}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportWarning;
