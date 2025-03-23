import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Services/ApiAdmin";
import { JobCard } from "../../../Components/JobCart";
import MyButton from "../../../Components/Button";
import { toast } from "react-toastify";

type Company = {
  id: number;
  name: string | null;
  description: string | null;
  industry: string | null;
  website: string | null;
  email: string | null;
  address: string | null;
  size: string | null;
  phoneNumber: string | null;
  logo: {
    url: string;
  };
  taxCode: string | null;
};

const RecruiterManagement = () => {
  const [page, setPage] = useState(1);
  const [company, setCompany] = useState<Company[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const pageSize = 5; // Số lượng item mỗi trang
  const totalPages = Math.ceil(totalElements / pageSize); // Tính tổng số trang
  const [isLoadding, setLoading] = useState(false);
  const handleGetAllPostJob = async (page: number) => {
    setLoading(true);
    await ApiAdmin.GetAllPostJobNoneActive(page, pageSize)
      .then((res) => {
        setTotalElements(res.data.result.totalElements);
        setCompany(res.data.result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response.data);
        setLoading(false);
      });
  };

  const handleActiveCompany = (id: number) => {
    ApiAdmin.ActivePostJob(id)
      .then(() => {
        toast.success("Kiểm duyệt Công ty!");
        handleGetAllPostJob(page); // Load lại dữ liệu sau khi duyệt
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const handleDeleteCompany = (id: number) => {
    ApiAdmin.DeactivePostJob(id)
      .then(() => {
        toast.success("Xóa Công ty!");
        handleGetAllPostJob(page); // Load lại dữ liệu sau khi xóa
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  // Gọi API mỗi khi `page` thay đổi
  useEffect(() => {
    handleGetAllPostJob(page);
  }, [page]);

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Nhà tuyển dụng</h2>

      {/* Thanh tìm kiếm và thêm công ty */}
      <div className="mb-3 flex items-center gap-2">
        <button className="flex items-center rounded bg-blue-500 px-4 py-2 text-white">
          <FaPlus className="mr-2" /> Thêm Công Ty
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm Công ty"
            className="w-full rounded-xl border p-2"
          />
        </div>
      </div>

      {/* Danh sách công ty */}
      <div>
        {!isLoadding ? (
          <>
            {company.map((i) => (
              <div key={i.id}>
                <div className="relative mt-10 max-w-2xl">
                  <JobCard
                    company={i.name || ""}
                    logo={i.logo?.url}
                    location={i.address || ""}
                    locationsCount=""
                    salary={i.industry || ""}
                    title={i.description || ""}
                  />
                </div>
                <div className="mt-5 flex max-w-sm flex-col gap-2">
                  <div onClick={() => handleDeleteCompany(i.id)}>
                    <MyButton content={"Xóa"} isColor="bg-[#333]" />
                  </div>

                  <div onClick={() => handleActiveCompany(i.id)}>
                    <MyButton content={"Duyệt"} isColor="bg-[#333]" />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}

        {/* Phân trang */}
        <div className="flex items-center justify-center gap-4 rounded-lg p-4">
          <button
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-gray-300 disabled:opacity-50"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Trang trước
          </button>

          <span className="text-lg font-medium">
            Trang {page} / {totalPages}
          </span>

          <button
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Trang sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterManagement;
