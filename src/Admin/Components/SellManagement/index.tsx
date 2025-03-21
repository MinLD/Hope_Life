import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Apis/ApiAdmin";
import MyButton from "../../../Components/Button";


// Định nghĩa kiểu dữ liệu cho user
interface User {
  id: number;
  name: string;
  email: string;
  roles: { name: string }[];
  profile: {
    address: string;
    bio: string;
    city: string;
    company: string | null;
    country: string | null;
    disabilityDescription: string;
    disabilityType: string;
    dob: string | null;
    fullName: string;
    gender: string;
    phone: string;
    profilePicture: string | null;
  } | null;
}

const SellsManagement = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const [isProfile, setProfile] = useState<User["profile"] | null>(null);

  // const handleReturnProfile = (profile: User["profile"]) => {
  //   if (!profile) {
  //     toast.error("Thông tin chưa được cập nhật!!");
  //     return;
  //   }
  //   setProfile(profile);
  // };

  const handleGetAllShopJob = () => {
    ApiAdmin.GetAllPostShopJobNoneActive()
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAllShopJob();
  }, []);

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Người dùng</h2>
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
      <table className="w-full border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Email</th>
            <th className="p-2">Vai trò</th>
            <th className="p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
            <tr
              key={user.id}
              className="cursor-pointer border-t hover:bg-gray-100"
            >
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                {user.roles.map((i) => i.name).join(", ")}
              </td>
              <td className="flex gap-2 p-2">
                <span onClick={() => handleReturnProfile(user.profile)}>
                  <MyButton
                    content="Xem thông tin"
                    isColor="bg-green-500"
                    isWidth="w-50"
                  />
                </span>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>

      {isProfile !== null && (
        <>
          <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
          <div className="fixed top-1/2 left-1/2 h-auto w-[80%] -translate-x-1/2 -translate-y-1/2 transform overflow-auto rounded-lg bg-white p-6 shadow-2xl">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Tổng quan người dùng
            </h1>
            <div className="max-h-[400px] space-y-4 overflow-y-scroll">
              {Object.entries(isProfile).map(([key, value], index) => (
                <div key={index}>
                  <label className="block font-medium text-gray-700 capitalize">
                    {key}:
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={value as string}
                    onChange={(e) => {
                      e.target.value;
                    }}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 pt-10">
              <MyButton content={<FaEdit />} isWidth="w-50" />
              <MyButton
                content={<FaTrash />}
                isColor="bg-red-500"
                isWidth="w-50"
              />{" "}
              <div onClick={() => setProfile(null)}>
                <MyButton
                  content={"Thoát"}
                  isWidth="w-50"
                  isColor="bg-gray-500"
                />
              </div>
              <div onClick={() => setProfile(null)}>
                <MyButton
                  content={"Lưu và Thoát"}
                  isWidth="w-50"
                  isColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SellsManagement;
