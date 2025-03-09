import RegisterPostJob from "./components/RegisterPostJob";

import ChooseJob from "./components/ChooseJob";
import RecruiterForm from "./components/RegruiterFrom";
import SliderCommon from "../SliderCommon";
import ProgressBar from "./components/ProcessBar";

function PostJob() {
  const data: { src: string; id: number }[] = [
    {
      src: "	https://tuyendung.topcv.vn/app/_nuxt/img/banner-01.d2c28c7.png",
      id: 1,
    },
    {
      src: "	https://tuyendung.topcv.vn/app/_nuxt/img/banner-02.3506b83.png",
      id: 1,
    },
    {
      src: "	https://tuyendung.topcv.vn/app/_nuxt/img/banner-03.6c4018d.png",
      id: 1,
    },
  ];
  return (
    <div>
      <ChooseJob />
      <div className="flex justify-between">
        <div className="h-[100vh] w-full overflow-auto p-20 lg:w-[70%]">
          <RegisterPostJob />

          <RecruiterForm />
        </div>

        <span className="fixed top-0 right-0 hidden h-[100vh] w-[30%] lg:block">
          <SliderCommon BoxImg={data} slidesToShow={1} dots={true} />
        </span>
      </div>
    </div>
  );
}

export default PostJob;
