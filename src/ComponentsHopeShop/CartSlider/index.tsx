
import CartProdcut from "../CartProduct";
import BuyNowShop from "../BuyNowShop";
import {  useEffect, useState } from "react";

type Props = {
  title: string;
  data: ProductFormData[];
};
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

function CartSlider({ title, data }: Props) {
  const [isShowBuyNow, setShowBuyNow] = useState<number>();
  useEffect(() => {
    if (isShowBuyNow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShowBuyNow]);
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="mt-4 grid grid-cols-2 gap-4 px-3 pb-3 sm:grid-cols-3 md:grid-cols-3">
        {data.map((item, index) => (
          <>
            <div key={index}>
              <CartProdcut
                images={item.images}
                name={item.name}
                price={item.price}
                key={index}
                setShowBuyNow={() => setShowBuyNow(index)}
              />
              {isShowBuyNow === index && (
                <>
                  <div>
                    {" "}
                    <div className="fixed z-[9999999] inset-0 bg-[#272727] opacity-20 w-full h-full "></div>
                  </div>
                  <div className="fixed bottom-2 right-5 z-[999999999999999]">
                    <div className=" ">
                      <BuyNowShop close={() => setShowBuyNow(undefined)} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CartSlider;
