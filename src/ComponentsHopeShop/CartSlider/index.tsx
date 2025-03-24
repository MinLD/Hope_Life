import { useNavigate } from "react-router-dom";
import CartProdcut from "../CartProduct";

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
  const navigate = useNavigate();
 
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="mt-4 grid grid-cols-2 gap-4 px-3 pb-3 sm:grid-cols-3 md:grid-cols-4">
        {data.map((item, index) => (
          <div onClick={() => navigate(`/hopeshop/${"1"}`)} key={index}>
            <CartProdcut
              images={item.images}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartSlider;
