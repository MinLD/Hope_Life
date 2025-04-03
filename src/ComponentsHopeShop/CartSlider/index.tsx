import CartProdcut from "../CartProduct";
import BuyNowShop from "../BuyNowShop";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  data: ProductFormData[];
};
type ProductFormData = {
  id: number;
  key: number;
  infomation: string;
  name: string;
  seller_id: string;
  price: number;
  description: string;
  inventory: string;
  images: {
    url: string;
  }[];
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
      <div className="mt-4 grid grid-cols-1  gap-4 px-3 pb-3 s:grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
        {data.map((item: ProductFormData, index) => (
          <>
            <div key={index}>
              <CartProdcut
                data={item}
                description={item.description}
                inventory={item.inventory}
                infomation={item.infomation}
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
                      <BuyNowShop
                        id={item.key}
                        close={() => setShowBuyNow(undefined)}
                        image={item.images}
                        name={item.name}
                        price={item.price}
                      />
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
