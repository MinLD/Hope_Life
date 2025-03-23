import { useEffect, useState } from "react";
import { JobCard } from "../../Components/JobCart";
import DetailsJob from "../../Components/JobCart/Component/DetailsJob";
import MenuPostJob from "../../Components/MenuPostJob";
import BannerPostJob from "../../Components/SliderPostJob";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../../LayoutUser/MainHomePages";

import HopeJobListing from "../../Components/HopeJobListing";
import api from "../../Services/PostApi";

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

  const GetAllPostJob = () => {
    api
      .getAllPost()
      .then((res) => {
        console.log(res.data.result);
        setAllPost(res.data.result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetAllPostJob();
  }, []);
  // console.log(isAllPost[0].title);
  return (
    <MainHomePages>
      <BannerPostJob />
      <MenuPostJob />
      <MyLayout>
        <div
          className="flex w-full flex-wrap gap-[10px]"
          onMouseLeave={() => setHoveredJob(null)}
        >
          {isAllPost.map((i, k) => (
            <div
              key={k}
              className="relative w-[calc(100%/1-10px)] md:w-[calc(100%/2-10px)] xl:w-[calc(100%/3-10px)]"
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
        <HopeJobListing />
      </MyLayout>
    </MainHomePages>
  );
}

export default HomePostJob;
