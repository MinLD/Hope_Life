import { AnyActionArg } from "react";
import { CiHeart } from "react-icons/ci";

interface JobProps {
  logo: string;
  title: string;
  company: string;
  salary: string;
  location: string | AnyActionArg;
}
// interface JobPost {
//   id: number;
//   title: string;
//   description: string;
//   requirements: string;
//   responsibilities: string;
//   benefits: string;
//   suitableForDisability: string;
//   salaryMin: number;
//   salaryMax: number;
//   location: string;
//   jobType: string | null;
//   applicationDeadline: string;
//   employer: Employer;
// }

export const JobCard: React.FC<JobProps> = ({
  logo,
  title,
  company,
  salary,
  location,
}) => {
  return (
    <div className="relative flex cursor-pointer items-center gap-3 rounded-lg p-4 shadow-md transition hover:border hover:border-[#00b14f] hover:shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="rounded-lg border border-[#e1e1e1]">
            <img
              src={logo}
              alt="Chưa cập nhật"
              className="h-15 w-15 rounded-lg "
            />
          </div>
          <div className="flex flex-1 flex-col">
            <a href="#" className="line-clamp-2 font-semibold hover:underline">
              {title}
            </a>
            <p className="line-clamp-1 text-[12px] text-blue-600">{company}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-2">
            <span className="rounded-md bg-green-200 px-3 py-1 text-sm font-semibold text-green-700 line-clamp-1">
              ${salary}
            </span>
            <span className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 line-clamp-1 max-w-[100px]">
              {location}
            </span>
          </div>
          <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border font-bold text-green-500 hover:bg-green-100">
            <CiHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
