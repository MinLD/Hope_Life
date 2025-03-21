import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Apis/ApiAdmin";
import { JobCard } from "../../../Components/JobCart";
import DetailsJob from "../../../Components/JobCart/Component/DetailsJob";
import MyButton from "../../../Components/Button";

// Định nghĩa kiểu dữ liệu cho user
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
  logo: string | null;
  taxCode: string | null;
  createdAt: string;
  updatedAt: string | null;
  active: boolean;
};
const RecruiterManagement = () => {
  const [company, setCompany] = useState<Company[]>([]);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const handleGetAllPostJob = () => {
    ApiAdmin.GetAllPostJobNoneActive()
      .then((res) => {
        console.log(res.data.result);
        setCompany(res.data.result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleActiveCompany = (id: any) => {
    ApiAdmin.ActivePostJob(id)
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
  console.log(company);

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Nhà tuyển dụng</h2>
      <div className="mb-3 flex items-center gap-2">
        <button className="flex items-center rounded bg-blue-500 px-4 py-2 text-white">
          <FaPlus className="mr-2" /> Thêm Công Ty
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm Công ty"
            className="rounded-xl border p-2"
          />
        </div>
      </div>
      <div>
        {company.map((i, k) => (
          <div key={k}>
            <div
              className="relative mt-10 max-w-2xl"
              onMouseEnter={() => setHoveredJob(k)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <JobCard
                company={
                  "Trưởng Phòng Kinh Doanh/ Sale Manager Tại Quận 12 (Mức Lương 20 - 30 Triệu)"
                }
                location={"Bình Dương"}
                locationsCount={""}
                logo={
                  "https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/cong-ty-tnhh-hong-dat-29b717c658624436693a9b2ac3b0aecf-66bc232ddfa4a.jpg"
                }
                salary={"10-20tr"}
                title={"Công ty TNHH Hồng Đạt"}
              />
              {hoveredJob === k && (
                <div className="absolute top-0 right-[20px] z-10">
                  <DetailsJob />
                </div>
              )}
            </div>
            <div className="mt-5 flex max-w-sm flex-col gap-2">
              {" "}
              <div>
                <MyButton content={"Xóa"} />
              </div>
              <div onClick={() => handleActiveCompany(i.id)}>
                <MyButton content={"Duyệt"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterManagement;
