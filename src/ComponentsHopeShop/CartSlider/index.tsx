import { useNavigate } from "react-router-dom";
import CartProdcut from "../CartProduct";

function CartSlider() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-xl font-bold">Danh mục</h1>
      <div className="mt-4 grid grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 pb-3">
        <div onClick={() => navigate(`/hopeshop/${"1"}`)}>
          <CartProdcut />
        </div>
        <div onClick={() => navigate(`/hopeshop/${"1"}`)}>
          <CartProdcut />
        </div>
        <div onClick={() => navigate(`/hopeshop/${"1"}`)}>
          <CartProdcut />
        </div>
        <div onClick={() => navigate(`/hopeshop/${"1"}`)}>
          <CartProdcut />
        </div>
      </div>
    </div>
  );
}

export default CartSlider;
