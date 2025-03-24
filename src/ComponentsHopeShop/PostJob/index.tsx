import RegisterPostJob from "../../Components/PostJob/components/RegisterPostJob";
import RecruiterForm from "../../Components/PostJob/components/RegruiterFrom";
import SliderCommon from "../../Components/SliderCommon";

function PostJob() {
  const BoxImg: { url?: string }[] = [
    {
      url: "https://thecrafthouse.vn/cdn/shop/files/craftsmanship_2.jpg?v=1737224693&width=400s",
    },
    {
      url: "https://thecrafthouse.vn/cdn/shop/files/craftsmanship_3.jpg?v=1737224705&width=400",
    },
    {
      url: "https://thecrafthouse.vn/cdn/shop/files/craftsmanship_4.jpg?v=1737224717&width=400",
    },
    {
      url: "https://thecrafthouse.vn/cdn/shop/files/craftsmanship_1.jpg?v=1737224594&width=400",
    },
    {
      url: "https://thecrafthouse.vn/cdn/shop/files/craftsmanship_4.jpg?v=1737224717&width=400",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="h-[100vh] w-full overflow-auto px-5 pt-10 lg:max-w-[70%]">
          <RegisterPostJob title="Người bán hàng" name="Shop" />
          <RecruiterForm type="hopeshop" />
        </div>

        <div className="fixed top-0 right-0 hidden h-[100vh] w-[30%] lg:block">
          <SliderCommon BoxImg={BoxImg} slidesToShow={1} dots={true} />
        </div>
      </div>
    </div>
  );
}

export default PostJob;
