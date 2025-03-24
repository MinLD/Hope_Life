type ProductFormData = {
  name: string | null;

  price: string;
  description?: string;

  inventory?: string;
  images: {
    url: string;
  }[];
};
function CartProdcut({
  name,
  price,

  images,
}: ProductFormData) {
  return (
    <div className="h-auto w-auto overflow-hidden rounded-lg border-1 border-[#e1e1e1] bg-[#fff]">
      <img
        src={images[0].url}
        alt=""
        className="h-[65%] w-full rounded-lg object-cover"
      />
      <div className="flex h-[35%] w-full flex-col gap-1 px-1 pt-1">
        <p className="s:text-[15px] line-clamp-1 text-[11px] font-bold">
          {name}
        </p>
        {/* Đánh giá */}
        <p className="text-xs text-gray-600">4.5⭐ | 120 đánh giá</p>
        <div className="flex items-center justify-between">
          <p className="s:text-[15px] text-[12px] font-bold text-red-500  lg:text-[15px]">
            {price}
          </p>
          <p className="s:text-[11px] text-[11px] text-gray-500 line-through lg:text-[12px]">
            1235Đ
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProdcut;
