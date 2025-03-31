import { useEffect, useState } from "react";

import CartSlider from "../../ComponentsHopeShop/CartSlider";

import MyLayout from "../../Layout/MyLayOut";
import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";
import BannerHopeShop from "../../ComponentsHopeShop/BannerHopeShop";

import { ChevronLeft, ChevronRight } from "lucide-react";
import SideBar from "../../ComponentsHopeShop/SlideBar";
import api from "../../Services/PostApi";
const sortOptions = [
  "Featured",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];
type ProductFormData = {
  name: string | null;
  seller_id: string;
  price: string;
  description: string;
  categoryId: string;
  inventory: string;
  images: {
    url: string;
  }[];
  weight: string;
};
function HomeShop() {
  const [formData] = useState<ProductFormData[]>([
    {
      name: "Cờ Vua Luxury Thủ Công",
      seller_id: "01",
      price: "4.506.000₫",
      description:
        "*Mô tả: Cờ vua là một trò chơi không hề xa lạ với tất cả chúng ta và chúng tôi đã biến hóa bộ cơ vua thông thường lên 1 phiên bản vô cùng cao cấp và mới lạ.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/Maztermind-web02.jpg?v=1738702106&width=800",
        },
      ],
      weight: "còn 20",
    },
    {
      name: "Cờ Vua Regaly Thủ Công",
      seller_id: "01",
      price: "6.100.000₫",
      description:
        "**Mô tả: Bộ Cờ Vua Regal hội tụ đầy đủ các yếu tố giải trí, nghệ thuật, sang trọng giúp nâng tầm không gian sống của người sở hữu. Những quân cờ tối giản kết hợp cùng phong cách cổ điển sẽ biến không gian sống của bạn trở nên sang trọng và tinh tế hơn bao giờ hết. Mỗi quân cờ trong bộ cờ vua Regal đều là một tác phẩm nghệ thuật độc đáo, được chế tác tinh xảo bởi bàn tay tài hoa của 10 nghệ nhân lành nghề. Qua 19 công đoạn tỉ mỉ, bộ cờ mang đến một vẻ đẹp thanh lịch và cuốn hút, khẳng định cá tính riêng của người sở hữu. Nếu bạn đang phân vân tìm quà tặng cho bạn bè hoặc người thân yêu thích nghệ thuật, thì Bộ Cờ Vua Regal là sự lựa chọn phù hợp dành riêng cho bạn.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/1_c0a97aec87d1444da37faa14a6c8ba0d.jpg?v=1738702145&width=800",
        },
      ],
      weight: "còn 20",
    },
    {
      name: "Bộ Sưu Tập Móc Khoá Da Thú Cưng Chó",
      seller_id: "01",
      price: "100.000₫",
      description:
        "**Mô tả: Bộ Cờ Vua Regal hội tụ đầy đủ các yếu tố giải trí, nghệ thuật, sang trọng giúp nâng tầm không gian sống của người sở hữu. Những quân cờ tối giản kết hợp cùng phong cách cổ điển sẽ biến không gian sống của bạn trở nên sang trọng và tinh tế hơn bao giờ hết. Mỗi quân cờ trong bộ cờ vua Regal đều là một tác phẩm nghệ thuật độc đáo, được chế tác tinh xảo bởi bàn tay tài hoa của 10 nghệ nhân lành nghề. Qua 19 công đoạn tỉ mỉ, bộ cờ mang đến một vẻ đẹp thanh lịch và cuốn hút, khẳng định cá tính riêng của người sở hữu. Nếu bạn đang phân vân tìm quà tặng cho bạn bè hoặc người thân yêu thích nghệ thuật, thì Bộ Cờ Vua Regal là sự lựa chọn phù hợp dành riêng cho bạn.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/Bulldog_1.png?v=1738686117&width=500",
        },
      ],
      weight: "còn 20",
    },
    {
      name: "Bộ Sưu Tập Móc Khóa Da 12 Cung Hoàng Đạo",
      seller_id: "01",
      price: "420.000₫",
      description:
        "**Mô tả: Bộ Cờ Vua Regal hội tụ đầy đủ các yếu tố giải trí, nghệ thuật, sang trọng giúp nâng tầm không gian sống của người sở hữu. Những quân cờ tối giản kết hợp cùng phong cách cổ điển sẽ biến không gian sống của bạn trở nên sang trọng và tinh tế hơn bao giờ hết. Mỗi quân cờ trong bộ cờ vua Regal đều là một tác phẩm nghệ thuật độc đáo, được chế tác tinh xảo bởi bàn tay tài hoa của 10 nghệ nhân lành nghề. Qua 19 công đoạn tỉ mỉ, bộ cờ mang đến một vẻ đẹp thanh lịch và cuốn hút, khẳng định cá tính riêng của người sở hữu. Nếu bạn đang phân vân tìm quà tặng cho bạn bè hoặc người thân yêu thích nghệ thuật, thì Bộ Cờ Vua Regal là sự lựa chọn phù hợp dành riêng cho bạn.",
      categoryId: "",
      inventory: "Kích thước: 28x28x5.4cm",
      images: [
        {
          url: "https://thecrafthouse.vn/cdn/shop/files/cancerzodiaccharm.jpg?v=1738686280&width=500",
        },
      ],
      weight: "còn 20",
    },
  ]);
  // const [isOpen, setIsOpen] = useState(false);
  const handleGetAllProduct = () => {
    api
      .GetAllProduct(1)
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetAllProduct();
  }, [handleGetAllProduct]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOptions[1]); // Mặc định: Best selling
  const [isElementTotal] = useState<number>(0);
  const [isPage, setPage] = useState<number>(1);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <HomePagesHopeShop>
        <div className="top-0">
          <BannerHopeShop />
        </div>
        <MyLayout>
          <div className="flex items-center justify-center mt-10 flex-col px-4">
            <img
              src="https://thecrafthouse.vn/cdn/shop/files/brand_slogan_the_gift_of_art.webp?v=1737230423&width=400"
              alt="Hope Slogan"
              className="object-cover w-48 md:w-56 lg:w-64"
            />
            <p className="max-w-2xl mx-auto text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              Ra đời tại Sài Gòn năng động,{" "}
              <span className="font-semibold text-green-600">
                HopeVn<span className="text-[16px] text-red-600">Shop</span>
              </span>{" "}
              là nền tảng dành cho những người có hoàn cảnh khó khăn, giúp họ
              tạo ra và giới thiệu các sản phẩm thủ công độc đáo. Mỗi sản phẩm
              không chỉ mang giá trị thẩm mỹ mà còn chứa đựng những câu chuyện
              đầy nghị lực và sự sáng tạo. Tại{" "}
              <span className="font-semibold text-green-600">
                HopeVn<span className="text-[16px] text-red-600">Shop</span>
              </span>
              , chúng tôi kết hợp giữa thiết kế tinh tế và kỹ thuật thủ công
              điêu luyện, biến từng món đồ thành một tác phẩm nghệ thuật mang
              đậm dấu ấn cá nhân. Đồng thời, chúng tôi tự hào mang đến những bộ
              sưu tập đặc biệt từ các nghệ nhân tài năng, mở ra cơ hội phát
              triển bền vững cho cộng đồng. Hãy cùng{" "}
              <span className="font-semibold text-green-600">
                HopeVn<span className="text-[16px] text-red-600">Shop</span>
              </span>{" "}
              lan tỏa giá trị thủ công và tạo dựng một tương lai tốt đẹp hơn! 🌿
            </p>
          </div>
          <div className="h-auto w-full rounded-2xl  p-2  mt-20">
            <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg mb-10 text-center">
              Tinh Hoa Thủ Công - Nét Đẹp Truyền Thống
            </h1>

            <div className="relative w-52 ">
              {/* Button Sort */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" flex justify-between items-center w-full px-3 py-2 border rounded-lg shadow-sm bg-white"
              >
                <span className="font-semibold">Sort by: {selectedOption}</span>
                <span
                  className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  ▲
                </span>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute w-full mt-1 bg-white shadow-lg border rounded-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedOption === option
                          ? "font-bold"
                          : "text-gray-700"
                      } hover:bg-gray-100`}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <CartSlider title="" data={formData} />
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
          </div>
        </MyLayout>

        <div className="container mx-auto px-6   mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hình ảnh bên trái */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src="https://thecrafthouse.vn/cdn/shop/files/craftsmanship_7.jpg?v=1737226242&width=1000"
                alt="Sứ mệnh thương hiệu"
                className="w-full lg:w-[90%] rounded-2xl shadow-lg"
              />
            </div>

            {/* Nội dung bên phải */}
            <div className="lg:w-1/2 w-full text-center lg:text-left ">
              <h3 className="text-gray-800 font-semibold text-3xl md:text-4xl mb-4 text-center">
                Sứ mệnh thương hiệu
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Triết lý của chúng tôi xoay quanh việc tạo ra những sản phẩm
                vượt thời gian, hòa quyện giữa phong cách và tính ứng dụng, vươn
                xa khỏi những xu hướng phù du.
                <br />
                <br />
                Mỗi sáng tạo của{" "}
                <span className="font-semibold text-green-600">
                HopeVn<span className="text-[16px] text-red-600">Shop</span>
              </span>{" "} đều
                được chế tác tỉ mỉ với kỹ thuật độc đáo bởi những nghệ nhân tài
                hoa. Chúng tôi tuyển chọn những nguyên liệu thượng hạng, chăm
                chút từng chi tiết nhỏ nhất, từ đường nét, góc cạnh đến lớp hoàn
                thiện cuối cùng.
                <br />
                <br />
                Từng sản phẩm đều toát lên niềm đam mê và sự tự hào của người
                nghệ nhân, và chúng tôi hy vọng bạn sẽ trân trọng chúng như cách
                chúng tôi đã tạo ra.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#3333]  mt-40 ">
          <MyLayout>
            <div className="flex flex-col items-center justify-center mx-auto max-w-2xl text-center mt-5 mb-10">
              <h2 className="text-[#272727] text-[44px] font-medium">
                Hồn Việt trong từng sản phẩm thủ công
              </h2>
              <p className="text-[#272727] text-[18px]">
                Lấy cảm hứng từ di sản văn hóa và tinh hoa nghề thủ công truyền
                thống của Việt Nam, chúng tôi tận tâm thiết kế tinh xảo, tuyển
                chọn nguyên liệu thượng hạng và chế tác những sản phẩm trường
                tồn cùng thời gian. Mong muốn của{" "}
                <span className="font-semibold text-green-600">
                  HopeVn<span className="text-[16px] text-red-600">Shop</span>
                </span>{" "}
                là mỗi sáng tạo sẽ trở thành một phần di sản quý giá, được trân
                trọng và gìn giữ trong tổ ấm của bạn.
              </p>
            </div>
          </MyLayout>
        </div>
        <SideBar />
      </HomePagesHopeShop>
    </>
  );
}

export default HomeShop;
