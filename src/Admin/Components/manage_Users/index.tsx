import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ApiAdmin from "../../../Apis/ApiAdmin";
import MyButton from "../../../Components/Button";
import { toast } from "react-toastify";
import LoadingTextCommon from "../../../Components/LoaddingCommon";

import { Register } from "../../../Apis/AuthService";

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

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isProfile, setProfile] = useState<User["profile"] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isShowaddUser, setShowAddUser] = useState<boolean>(false);
  const [isPassword, setPassword] = useState<string>("");
  const [isEmail, setEmail] = useState<string>("");
  const [isName, setName] = useState<string>("");
  const [isPhone, setPhone] = useState<string>("");
  const [isRole, setRole] = useState<string>("");
  const [userId, setUserId] = useState<Number>();
  const [editProfile] = useState<User["profile"] | null>(null);

  const handleReturnProfile = (profile: User["profile"], id: Number) => {
    if (!profile) {
      toast.error("Thông tin chưa được cập nhật!!");
      return;
    }
    setUserId(id);
    setProfile(profile);
  };

  const handleGetAllUser = async () => {
    setLoading(true);
    await ApiAdmin.getAllUser()
      .then((res) => {
        console.log(res.data.result);
        setUsers(res.data.result);
        setLoading(false);
      })
      .catch((err) => console.log(err.response.data));
    setLoading(false);
  };
  const handleAddUser = async () => {
    Register(isEmail, isPassword, isPhone, isName)
      .then((res) => {
        console.log(res.data.result);
        toast.success("Thêm người dùng thành công!");
        handleGetAllUser();
        setShowAddUser(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Thêm nguoi dung that bai!");
      });
  };
  const handleDeleteUser = () => {
    console.log(userId);
    ApiAdmin.DeleteUser(userId)
      .then((res) => {
        console.log(res.data.result);
        handleGetAllUser();
        setProfile(null);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleUpdateUser = () => {
    if (isProfile) {
      console.log(" ");
    }
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setEditProfile((prev) => ({
  //     ...prev!,
  //     [name]: value,
  //   }));
  // };
  useEffect(() => {
    handleGetAllUser();
  }, []);
  console.log(editProfile);
  return (
    <div className="mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">Quản lý Người dùng</h2>
      <div className="mb-3 flex items-center gap-2">
        <div className="relative">
          <button
            className="flex items-center rounded bg-blue-500 px-4 py-2 text-white"
            onClick={() => setShowAddUser(!isShowaddUser)}
          >
            <FaPlus className="mr-2" /> Thêm User
          </button>
          {isShowaddUser && (
            <div className="absolute top-10 left-0 z-[999] max-h-[300px] w-[300px] overflow-hidden overflow-y-scroll rounded-b-2xl bg-[#ffff] p-3 shadow-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block font-medium text-gray-700">Tên</label>
                  <input
                    type="text"
                    value={isName}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border p-2"
                    placeholder="Nhập tên..."
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={isEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border p-2"
                    placeholder="Nhập email..."
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={isPhone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-md border p-2"
                    placeholder="Nhập số điện thoại..."
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    value={isPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border p-2"
                    placeholder="Nhập mật khẩu..."
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Vai trò
                  </label>
                  <select
                    value={isRole}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-md border p-2"
                  >
                    <option value="">Chọn vai trò</option>
                    <option value="admin">Admin</option>
                    <option value="user">Người dùng</option>
                    <option value="user">Người bán hàng</option>
                    <option value="user">Nhà tuyển dụng</option>
                  </select>
                </div>

                <button
                  className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
                  onClick={handleAddUser}
                >
                  Gửi
                </button>
              </div>
            </div>
          )}
        </div>
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
          {!isLoading && (
            <>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="cursor-pointer border-t hover:bg-gray-100"
                >
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    {user.roles.map((i) => i.name).join(", ")}
                  </td>
                  <td className="flex gap-2 p-2">
                    <span
                      onClick={() => handleReturnProfile(user.profile, user.id)}
                    >
                      <MyButton
                        content="Xem thông tin"
                        isColor="bg-green-500"
                        isWidth="w-50"
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {isLoading && (
        <>
          <div className="mt-2">
            <LoadingTextCommon />
          </div>
        </>
      )}

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
                    onChange={(e) => e.target.value}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 pt-10">
              <MyButton content={<FaEdit />} isWidth="w-50" />
              <div onClick={() => handleDeleteUser()}>
                <MyButton
                  content={<FaTrash />}
                  isColor="bg-red-500"
                  isWidth="w-50"
                />
              </div>
              <div onClick={() => setProfile(null)}>
                <MyButton
                  content={"Thoát"}
                  isWidth="w-50"
                  isColor="bg-gray-500"
                />
              </div>
              <div onClick={() => setProfile(null)}>
                <div onClick={handleUpdateUser}>
                  <MyButton
                    content={"Lưu và Thoát"}
                    isWidth="w-50"
                    isColor="bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserManagement;
