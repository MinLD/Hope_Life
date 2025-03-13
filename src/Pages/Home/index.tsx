import { useContext } from "react";
import AgencySection from "../../Components/AgencySection";
import Banner from "../../Components/Banner";

import { MenuContext } from "../../Context/MenuProvider";

import GettingStarted from "../../Components/GettingStarted";

import MyHomePages from "../../Layout/HomePages";
import MyLayout from "../../Layout/MyLayOut";
import MenuMobile from "../../Components/MenuMobile/index.tsx";

function Home() {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    return;
  }
  // const { isWindowSize } = menuContext;
  // const data: { title: string; id: number; src: string; lable: string }[] = [
  //   {
  //     id: 1,
  //     title: "Đưa thị trường truyền thống đến tận cửa nhà bạn",
  //     src: "https://fn.vinhphuc.edu.vn/UploadImages/thhopchau/2020_11/tuan%209/tuan%209%201/1_41120208.jpg",
  //     lable: `Chúng tôi mang đến cho bạn những sản phẩm thủ công tinh tế, giữ trọn
  //         giá trị truyền thống và tinh thần sẻ chia. Mỗi sản phẩm là một câu
  //         chuyện, một niềm tự hào`,
  //   },
  //   {
  //     id: 1,
  //     title: "Đưa thị trường truyền thống đến tận cửa nhà bạn",
  //     src: "https://fn.vinhphuc.edu.vn/UploadImages/thhopchau/2020_11/tuan%209/tuan%209%201/1_41120208.jpg",
  //     lable: `Chúng tôi mang đến cho bạn những sản phẩm thủ công tinh tế, giữ trọn
  //         giá trị truyền thống và tinh thần sẻ chia. Mỗi sản phẩm là một câu
  //         chuyện, một niềm tự hào`,
  //   },
  //   {
  //     id: 1,
  //     title: "Đưa thị trường truyền thống đến tận cửa nhà bạn",
  //     src: "https://fn.vinhphuc.edu.vn/UploadImages/thhopchau/2020_11/tuan%209/tuan%209%201/1_41120208.jpg",
  //     lable: `Chúng tôi mang đến cho bạn những sản phẩm thủ công tinh tế, giữ trọn
  //         giá trị truyền thống và tinh thần sẻ chia. Mỗi sản phẩm là một câu
  //         chuyện, một niềm tự hào`,
  //   },
  //   {
  //     id: 1,
  //     title: "Đưa thị trường truyền thống đến tận cửa nhà bạn",
  //     src: "https://fn.vinhphuc.edu.vn/UploadImages/thhopchau/2020_11/tuan%209/tuan%209%201/1_41120208.jpg",
  //     lable: `Chúng tôi mang đến cho bạn những sản phẩm thủ công tinh tế, giữ trọn
  //         giá trị truyền thống và tinh thần sẻ chia. Mỗi sản phẩm là một câu
  //         chuyện, một niềm tự hào`,
  //   },
  // ];

  return (
    <>
      <MyHomePages>
        <div className="pt-20">
          <Banner />
        </div>
        <MyLayout>
          {/* <div className="flex flex-col pt-20 pb-20 md:flex-row">
            <div className="h-auto w-full rounded-xl shadow-2xl md:w-1/2">
              <MyLogIn />
            </div>
            <div className="h-auto md:w-1/2">
          
            </div>
          </div> */}
          <AgencySection />
          <GettingStarted />

          {/* <SliderCommon
            slidesToShow={1}
            BoxImg={data}
            dots={true}
            type="MarketIntroduction"
          /> */}
        </MyLayout>
        <MenuMobile />
      </MyHomePages>
    </>
  );
}

export default Home;
