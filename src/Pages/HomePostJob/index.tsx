import { useEffect, useState } from "react";
import { JobCard } from "../../Components/JobCart";
import DetailsJob from "../../Components/JobCart/Component/DetailsJob";
import MenuPostJob from "../../Components/MenuPostJob";
import BannerPostJob from "../../Components/SliderPostJob";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../../LayoutUser/MainHomePages";

import HopeJobListing from "../../Components/HopeJobListing";
import api from "../../Services/PostApi";
import {  ChevronLeft, ChevronRight,  } from "lucide-react";
import SliderCommon from "../../Components/SliderCommon";

interface Company {
  id: number;
  name: string;
  description: string;
  industry: string;
  email: string;
  address: string;
  size: string | null;
  phoneNumber: string;
  logo: { url: string };
  taxCode: string | null;
  website: string | null;
}

interface Profile {
  id: number;
  fullName: string;
  gender: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  bio: string;
  disabilityType: string;
  disabilityDescription: string;
  dob: string | null;
  profilePicture: string | null;
  company: Company;
}

interface Employer {
  id: string;
  email: string;
  phone: string;
  accepted: boolean;
  otp: string | null;
  otpExpiryDate: string | null;
  profile: Profile;
}

interface JobPost {
  id: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  suitableForDisability: string;
  salaryMin: number;
  salaryMax: number;
  location: string;
  jobType: string | null;
  applicationDeadline: string;
  employer: Employer;
}
export type { JobPost, Company, Profile, Employer };
function HomePostJob() {
  const [isAllPost, setAllPost] = useState<JobPost[]>([]);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const dataImg: { url: string }[] = [
    {
      url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/IyMGOSTnSRAaeWzzhk7F.jpg",
    },
    {
      url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/uKeSTbMoI0W2H5S8npD0.jpg",
    },
    {
      url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/IyMGOSTnSRAaeWzzhk7F.jpg",
    },
    {
      url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/vItITnbXaDdn3wK50HAh.jpg",
    },
    {
      url: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/IyMGOSTnSRAaeWzzhk7F.jpg",
    },
  ];
  const [isElementTotal, setTotalElements] = useState<number>(0);
  const [isPage, setPage] = useState<number>(1);
  const GetAllPostJob = () => {
    api
      .getAllPost(isPage)
      .then((res) => {
        console.log(res.data.result);
        setTotalElements(res.data.result.totalElements);

        setAllPost(res.data.result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetAllPostJob();
  }, [isPage]);

  return (
    <MainHomePages>
      <BannerPostJob />
      <MenuPostJob
        setPage={setPage}
        ElementTotols={isElementTotal}
        isPage={isPage}
      />
      <MyLayout>
        <div
          className="flex w-full flex-wrap gap-[20px]"
          onMouseLeave={() => setHoveredJob(null)}
        >
          {isAllPost.map((i, k) => (
            <div
              key={k}
              className="relative w-[calc(100%/1-20px)] md:w-[calc(100%/2-20px)] xl:w-[calc(100%/3-20px)]"
              onMouseEnter={() => setHoveredJob(k)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <JobCard
                company={i?.employer?.profile?.company?.name}
                location={i.location}
                logo={i?.employer?.profile?.company?.logo?.url}
                salary={i.salaryMin + "-" + i.salaryMax}
                title={i.title}
              />
              {hoveredJob === k && (
                <div className="absolute top-0 right-0 z-10">
                  <DetailsJob
                    requirements={i.requirements}
                    jobType={i.jobType}
                    company={i?.employer?.profile?.company?.name}
                    location={i.location}
                    logo={i?.employer?.profile?.company?.logo?.url}
                    salary={i.salaryMin + "-" + i.salaryMax}
                    title={i.title}
                    description={i.description}
                    benefits={i.benefits}
                    suitableForDisability={i.suitableForDisability}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
              onClick={() => setPage(isPage - 1)}
              disabled={isPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <span className="flex text-lg gap-2">
              {" "}
              <p className="text-[#00b14f] font-medium">{isPage}</p>{" "}
              <p className="text-[#c5c5c5] font-medium">
                / {Math.ceil(isElementTotal / 12)} trang
              </p>
            </span>
            <button
              className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
              onClick={() => setPage(isPage + 1)}
              disabled={isPage === Math.ceil(isElementTotal / 6)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="mt-10 mb-5 ">
          <SliderCommon BoxImg={dataImg} type="images" slidesToShow={2} />
        </div>
        <HopeJobListing />
      </MyLayout>
    </MainHomePages>
  );
}

export default HomePostJob;
