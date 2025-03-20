import { CiHeart } from "react-icons/ci";

interface JobProps {
  logo: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  locationsCount: string;
}

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
          <div className="rounded-xl border border-[#e1e1e1]">
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 w-20 self-start rounded-xl object-contain"
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
            <span className="rounded-md bg-green-200 px-3 py-1 text-sm font-semibold text-green-700">
              {salary}
            </span>
            <span className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
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
