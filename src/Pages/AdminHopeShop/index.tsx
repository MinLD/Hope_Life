import { Plus, LogOut, X, ChevronRight, ChevronLeft } from "lucide-react";
import ItemsProduct from "../../ComponentsHopeShop/itemsProduct";
import { useContext, useEffect, useState } from "react";
import api from "../../Services/PostApi";
import { toast } from "react-toastify";
import LoadingTextCommon from "../../Components/LoaddingCommon";
import { StoreContext } from "../../Context/StoreProvider";

const Header = () => {
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { handleLogout } = storeContext;
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg shadow-md transition"
        >
          <LogOut size={18} /> Đăng xuất
        </button>
      </div>
    </header>
  );
};
type products = {
  id: number;
  name: string;
  price: number;
  description: string;
  imagesFile: string;
  categoryId: number;
  inventory: number;
};
type GetProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: [{ url: string }];
  categoryId: number;
  inventory: number;
};
type typeTer = {
  id: number;
  type: string;
  placeholder: string;
  name: string;
};
const typeInput: {
  type: string;
  placeholder: string;
  name: string;
  id: number;
}[] = [
  {
    id: 1,
    type: "text",
    placeholder: "Tên sản phẩm",
    name: "name",
  },
  {
    id: 2,
    type: "text",
    placeholder: "giá ",
    name: "price",
  },
  {
    id: 3,
    type: "text",
    placeholder: "Số lượng",
    name: "inventory",
  },
  {
    id: 4,
    type: "file",
    placeholder: "Ảnh sản phẩm",
    name: "imagesFile",
  },
];
const typeTer: typeTer[] = [
  {
    id: 1,
    type: "text",
    placeholder: "Mô tả",
    name: "description",
  },
  {
    id: 1,
    type: "text",
    placeholder: "Thông tin sản phẩm",
    name: "information",
  },
];
function AdminHopeShop() {
  // const [isDeleteOpen, setDeleteOpen] = useState(false);
  // const [isDelete, setDelete] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [product, setProducts] = useState<GetProduct[]>([]);
  const [newProduct, setNewProduct] = useState<products>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    imagesFile: "",
    categoryId: 1,
    inventory: 0,
  });
  const [showForm, setShowForm] = useState(false);

  const [isElementTotal, setElemetTotal] = useState<number | any>(0);
  const [isPage, setPage] = useState<number>(1);

  const handlechange = (e: any) => {
    const { name, value, files } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: name === "imagesFile" ? files[0] : value,
    });
  };
  const handlePostProduct = () => {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price.toString());
    formData.append("description", newProduct.description);
    formData.append("imagesFile", newProduct.imagesFile);
    formData.append("categoryId", newProduct.categoryId.toString());
    formData.append("inventory", newProduct.inventory.toString());
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}:`, pair[1]);
    // }
    setLoading(true);
    api
      .PostProductHopeShops(formData)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Tạo sản phẩm thanh cong!");
        handleGetAllProduct();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Tạo sản phẩm that bai!");
        setLoading(false);
      });
  };
  const handleGetAllProduct = () => {
    api
      .GetAllProduct(isPage)
      .then((res) => {
        setElemetTotal(res.data.result.totalElements);
        setProducts(res.data.result.data);
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteProduct = (id: number) => {
    api
      .DeleteProduct(id)
      .then((res) => {
        console.log(res.data.result);
        handleGetAllProduct();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetAllProduct();
  }, [isPage]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <div className="flex justify-between  mb-6 s:flex-row flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-800">Quản lý Sản Phẩm</h1>

          <button
            onClick={() => setShowForm(true)}
            className="max-w-[200px] flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            <Plus size={18} /> Thêm sản phẩm
          </button>
        </div>
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thêm sản phẩm</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {typeInput.map((i) => (
                <input
                  type={i.type}
                  placeholder={i.placeholder}
                  className="w-full rounded-lg border pt-2 pb-2 pl-4"
                  onChange={handlechange}
                  name={i.name}
                />
              ))}
              {typeTer.map((i) => (
                <textarea
                  className="w-full p-2 outline-none border rounded-lg min-h-[150px]"
                  placeholder={i.placeholder}
                  name={i.name}
                  onChange={handlechange}
                />
              ))}
            </div>
            <button
              onClick={() => handlePostProduct()}
              className="flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              {isLoading && <LoadingTextCommon />} Thêm sản phẩm
            </button>
          </div>
        )}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full p-2 outline-none border max-w-[60%] mx-auto rounded-lg"
          />
        </div>
        <div className="mt-4 flex items-center justify-end   px-10 pb-10">
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
              onClick={() => setPage(isPage - 1)}
              disabled={isPage === 1}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              className="cursor-pointer rounded-full border p-2 text-green-500 hover:bg-green-100"
              onClick={() => setPage(isPage + 1)}
              disabled={isPage === Math.ceil(isElementTotal / 12)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((i) => (
            <div className="" key={i.id}>
              <ItemsProduct {...i} handeleDeleteProduct={handleDeleteProduct} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-start px-10 pb-20">
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
            disabled={isPage === Math.ceil(isElementTotal / 12)}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* <ConfirmDelete
        isOpen={isDeleteOpen}
        onClose={() => setDelete(false)}
        onConfirm={() => setDelete(true)}
      /> */}
    </div>
  );
}

export default AdminHopeShop;
