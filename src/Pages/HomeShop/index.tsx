import CartSlider from "../../ComponentsHopeShop/CartSlider";
import MyLayout from "../../Layout/MyLayOut";
import HomePagesHopeShop from "../../LayoutHopeShop/HomePagesHopeShop";

function HomeShop() {
  return (
    <>
      <HomePagesHopeShop>
        {/* menu pro */}
        <div className="flex h-[30px] w-full items-center justify-center border-b-1 border-[#e1e1e1] bg-[#fff]">
          <MyLayout>
            <div className="mddd:flex text-md hidden items-center justify-between gap-2 pt-2 text-[#141514]">
              <div>All</div>
              <div>Đồ thủ công mỹ nghệ</div>
              <div>Đồ thủ công mỹ nghệ</div>
              <div>Đồ thủ công mỹ nghệ</div>
              <div>Đồ thủ công mỹ nghệ</div>
            </div>
            <div className="mddd:hidden flex items-center justify-between gap-2 text-lg text-[#141514]">
              <div>All</div>
              <div>Đồ thủ công mỹ nghệ</div>
            </div>
          </MyLayout>
        </div>
        {/* pro */}

        <MyLayout>
          <div className="flex flex-col gap-3 p-2">
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider />
            </div>
            <div className="h-auto w-full rounded-2xl bg-[#fff] p-2 shadow-2xl">
              <CartSlider />
            </div>
          </div>
        </MyLayout>
      </HomePagesHopeShop>
    </>
  );
}

export default HomeShop;
