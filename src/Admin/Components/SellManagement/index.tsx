import { useEffect, useState } from "react";
import {  FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Apis/ApiAdmin";
import MyButton from "../../../Components/Button";
import CartItem from "../../../ComponentsHopeShop/CartShopJobItem";
import { toast } from "react-toastify/unstyled";

// Định nghĩa kiểu dữ liệu cho user
interface User {
  email: string;

  phone: string;
  storeDescription: string;
  storeName: string;
  id: number;
}

const SellsManagement = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleGetAllShopJob = () => {
    ApiAdmin.GetAllPostShopJobNoneActive()
      .then((res) => {
        console.log(res.data.result);
        setUsers(res.data.result.data);
      })
      .catch((err) => console.log(err));
  };

  const handleActiveShopJob = (id: any) => {
    ApiAdmin.ActiveShopJob(id)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Kiểm duyệt thành công!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAllShopJob();
  }, []);

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Người bán hàng</h2>
      <div className="mb-3 flex items-center gap-2">
        <button className="flex items-center rounded bg-blue-500 px-4 py-2 text-white">
          <FaPlus className="mr-2" /> Thêm User
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng"
            className="rounded-xl border p-2"
          />
        </div>
      </div>
      <div className="">
        {users.map((i, k) => (
          <div className="mt-5 max-w-2xl" key={k}>
            <CartItem
              email={i.email}
              phone={i.phone}
              storeDescription={i.storeDescription}
              storeName={i.storeName}
            />

            <div className="mt-2 flex gap-2">
              <div onClick={() => handleActiveShopJob(i.id)}>
                <MyButton content="Duyệt" type="button" isColor="bg-[#333]" />
              </div>
              <div>
                <MyButton content="Xoá" type="button" isColor="bg-[#333]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellsManagement;
