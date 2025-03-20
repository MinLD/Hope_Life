import { useState } from "react";
import { JobCard } from "../../Components/JobCart";
import DetailsJob from "../../Components/JobCart/Component/DetailsJob";
import MenuPostJob from "../../Components/MenuPostJob";
import BannerPostJob from "../../Components/SliderPostJob";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../../LayoutUser/MainHomePages";
import HeaderJamb from "../../LayoutUser/HeaderJamb";
import HopeJobListing from "../../Components/HopeJobListing";

function HomePostJob() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);

  const jobList = [
    {
      id: 1,
      company: "Kỹ Sư Thiết Kế Hệ Thống Phòng Cháy Chữa Cháy",
      location: "Bình Dương",
      locationsCount: "1000",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "2000-3000$",
      title:
        "Kỹ Sư Thiết Kế Hệ Thống Phòng Cháy Chữa Cháy- Thu Nhập Từ 10 Triệu Trở Lên- Tại Bắc Ninh",
    },
    {
      id: 2,
      company: "Kỹ Sư Điện - Cơ Khí",
      location: "Hà Nội",
      locationsCount: "500",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1500-2500$",
      title: "Kỹ Sư Điện - Cơ Khí Lương Cao Tại Hà Nội",
    },
    {
      id: 3,
      company: "Chuyên Viên IT - Lập Trình Web",
      location: "TP.HCM",
      locationsCount: "300",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1000-2000$",
      title: "Chuyên Viên IT - Lập Trình Web",
    },
    {
      id: 4,
      company: "Chuyên Viên IT - Lập Trình Web",
      location: "TP.HCM",
      locationsCount: "300",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1000-2000$",
      title: "Chuyên Viên IT - Lập Trình Web",
    },
    {
      id: 5,
      company: "Chuyên Viên IT - Lập Trình Web",
      location: "TP.HCM",
      locationsCount: "300",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1000-2000$",
      title: "Chuyên Viên IT - Lập Trình Web",
    },
    {
      id: 6,
      company: "Chuyên Viên IT - Lập Trình Web",
      location: "TP.HCM",
      locationsCount: "300",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1000-2000$",
      title: "Chuyên Viên IT - Lập Trình Web",
    },
    {
      id: 7,
      company: "Chuyên Viên IT - Lập Trình Web",
      location: "TP.HCM",
      locationsCount: "300",
      logo: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/67d3f1a82ce141741943208.jpg",
      salary: "1000-2000$",
      title: "Chuyên Viên IT - Lập Trình Web",
    },
  ];

  return (
    <MainHomePages>
      <HeaderJamb />
      <BannerPostJob />
      <MenuPostJob />
      <MyLayout>
        <div
          className="flex w-full flex-wrap gap-[10px]"
          onMouseLeave={() => setHoveredJob(null)}
        >
          {jobList.map((job) => (
            <div
              key={job.id}
              className="relative w-[calc(100%/1-10px)] md:w-[calc(100%/2-10px)] xl:w-[calc(100%/3-10px)]"
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <JobCard
                company={job.company}
                location={job.location}
                locationsCount={job.locationsCount}
                logo={job.logo}
                salary={job.salary}
                title={job.title}
              />
              {hoveredJob === job.id && (
                <div className="absolute top-0 right-0 z-10">
                  <DetailsJob />
                </div>
              )}
            </div>
          ))}
        </div>
        <HopeJobListing />
      </MyLayout>
    </MainHomePages>
  );
}

export default HomePostJob;
