interface JobProps {
  logo: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  description: string;
  benefits: string;
  suitableForDisability: string;
  jobType: string | null;
  requirements: string;
}

const DetailsJob = ({
  logo,
  title,
  company,
  salary,
  location,
  description,
  benefits,
  suitableForDisability,
  jobType,
  requirements,
}: JobProps) => {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl bg-white p-4 shadow-md">
      <div className="flex gap-3">
        <img
          src={logo}
          alt="Company Logo"
          className="h-24 w-24 rounded-md object-cover"
        />
        <div>
          <h3 className="text-[15px] font-bold">{title}</h3>
          <p className="text-[12px] font-semibold text-gray-500">{company}</p>
          <p className="font-semibold text-green-600">{salary}$</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
        <span className="line-clamp-1 max-w-[100px]">📍 {location}</span>
        <span>📆 1 năm</span>
        <span>⏳ Còn 21 ngày</span>
      </div>
      <div className="mt-2 h-[1px] w-full bg-[#e1e1e1]"></div>
      <div className="max-h-[200px] overflow-y-scroll space-y-4">
        {description && (
          <div>
            <h4 className="text-md font-bold text-green-700">
              Mô tả công việc
            </h4>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {description}
            </p>
          </div>
        )}
        {jobType && (
          <div>
            <h4 className="text-md font-bold text-green-700">Loại công việc</h4>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{jobType}</p>
          </div>
        )}
        <div>
          <h4 className="text-md font-bold text-green-700">Yêu cầu</h4>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {requirements}
          </p>
        </div>
        <div>
          <h4 className="text-md font-bold text-green-700">Quyền lợi</h4>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {benefits}
          </p>
        </div>
        <div>
          <h4 className="text-md font-bold text-green-700">
            Phù hợp cho những người
          </h4>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {suitableForDisability}
          </p>
        </div>
        <div>
          <h4 className="text-md font-bold text-green-700">
            Địa điểm làm việc
          </h4>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {location}
          </p>
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
