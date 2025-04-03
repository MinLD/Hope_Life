import { Edit, Trash2 } from "lucide-react";

type Props = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: { url: string }[];
  categoryId: number;
  inventory: number;
  handeleDeleteProduct: (id: number) => void;
};
const ItemsProduct = ({
  images,
  name,
  price,
  description,
  inventory,
  handeleDeleteProduct,
  id,
}: Props) => {
  return (
    <>
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 ">
        <img
          src={images[0].url}
          alt={name}
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-1">
            Giá: <span className="font-medium text-gray-900">{price}</span>
          </p>
          <p className="text-gray-600 mt-1 max-h-[100px] overflow-y-scroll">
            Mô tả:{" "}
            <span className="font-medium text-gray-900">{description}</span>
          </p>
          <div className="flex justify-between mt-4">
            <button className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg shadow-md transition">
              <Edit size={16} /> Sửa
            </button>
            <button
              onClick={() => {
                handeleDeleteProduct(id);
              }}
              className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg shadow-md transition"
            >
              <Trash2 size={16} /> Xóa
            </button>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded-lg">
          Số lượng:{" "}
          <span className="font-medium text-red-500">{inventory}</span>
        </div>
      </div>
    </>
  );
};

export default ItemsProduct;
