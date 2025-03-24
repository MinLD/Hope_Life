import { useState } from "react";

import CartSlider from "../../ComponentsHopeShop/CartSlider";

import MyLayout from "../../Layout/MyLayOut";
import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";

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
  // const handleGetAllProduct = () => {
  //   api
  //     .GetAllProduct()
  //     .then((res) => {
  //       console.log(res.data.result);
  //       setFormData(res.data.result.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   handleGetAllProduct();
  // }, []);
  // console.log(formData);
  return (
    <>
      <HomePagesHopeShop>
        {/* menu pro */}
        {/* <div className="flex h-[30px] w-full items-center justify-center border-b-1 border-[#e1e1e1] bg-[#fff]">
          <MyLayout>
            <div className="mddd:flex text-md hidden items-center justify-between gap-2 pt-2 text-[#141514]">
            
            </div>
            <div className="flex items-center justify-between gap-2 text-lg text-[#141514]">
              <div>Quản lý sản phẩm</div>
              <div className="relative">
                <div onClick={() => setIsOpen(!isOpen)}>
                  <MyButton content={"Thêm sản phẩm"} />
                </div>
                {isOpen && (
                  <>
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="absolute top-10 right-0 w-[500px]">
                      <ProductPost setisOpen={setIsOpen} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </MyLayout>
        </div> */}
        {/* pro */}

        <MyLayout>
          <div className="flex flex-col gap-3 p-2">
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider title="" data={formData} />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider title="" data={formData} />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider title="" data={formData} />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider title="" data={formData} />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider title="" data={formData} />
            </div>
          </div>
        </MyLayout>
      </HomePagesHopeShop>
    </>
  );
}

export default HomeShop;
