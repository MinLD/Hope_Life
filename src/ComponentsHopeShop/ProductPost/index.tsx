import { useState } from "react";
import api from "../../Services/PostApi";
import LoadingTextCommon from "../../Components/LoaddingCommon";
type ProductFormData = {
  name: string;

  price: string;
  description: string;
  categoryId: number | null;
  inventory: string;
  imagesFile: File | null;
  weight: string;
};
type Category = {
  setisOpen: any;
};
const ProductPost = ({ setisOpen }: Category = { setisOpen: null }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    description: "",
    categoryId: 1,
    inventory: "",
    imagesFile: null,
    weight: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, imagesFile: file });
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    const dataF = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        dataF.append(key, value as string);
      }
    });
    for (let [key, value] of dataF.entries()) {
      console.log(`${key}:`, value);
    }
    setIsLoading(true);
    api
      .PostProductHopeShops(dataF)
      .then((res) => {
        console.log(res.data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    // try {
    //   const response = await fetch("/api/products", {
    //     method: "POST",
    //     body: data,
    //   });

    //   if (response.ok) {
    //     alert("Product submitted successfully!");
    //     setFormData({
    //       name: "",
    //       price: "",
    //       description: "",
    //       categoryId: "",
    //       inventory: "",
    //       imagesFile: null,
    //       weight: "",
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error submitting product:", error);
    // }
  };

  return (
    <div className="mx-auto max-w-full rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-xl font-bold">Đăng tin bán hàng</h2>
        <p className="cursor-pointer text-2xl" onClick={() => setisOpen(false)}>
          X
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Giá"
          value={formData.price}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Mô tả"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        ></textarea>
        <input
          type="text"
          name="categoryId"
          placeholder="ID danh mục"
          value={formData.categoryId!}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
        <input
          type="text"
          name="inventory"
          placeholder="Số lượng"
          value={formData.inventory}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
        <input
          type="file"
          name="imagesFile"
          onChange={handleFileChange}
          className="w-full rounded border p-2"
          required
        />
        <input
          type="text"
          name="weight"
          placeholder="Size"
          value={formData.weight}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          onClick={handleSubmit}
        >
          <p className="flex items-center justify-center gap-2">
            {isLoading ? <LoadingTextCommon /> : ""} Đăng sản phẩm
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProductPost;
