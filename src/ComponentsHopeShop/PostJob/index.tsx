
import RegisterPostJob from "../../Components/PostJob/components/RegisterPostJob";
import RecruiterForm from "../../Components/PostJob/components/RegruiterFrom";


function PostJob() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="h-[100vh] w-full overflow-auto px-5 pt-10 lg:max-w-[70%]">
          <RegisterPostJob title="Người bán hàng" name="Shop" />
          <RecruiterForm type="hopeshop" />
        </div>

        {/* <div className="fixed top-0 right-0 hidden h-[100vh] w-[30%] lg:block">
          <SliderCommon BoxImg={data} slidesToShow={1} dots={true} />
        </div> */}
      </div>
    </div>
  );
}

export default PostJob;
