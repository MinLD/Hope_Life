import { useEffect, useState } from "react";

import ApiAdmin from "../../../Apis/ApiAdmin";
import MyButton from "../../../Components/Button";
import { toast } from "react-toastify";
import ArticleItems from "../../../Components/ArticleItems";

// Định nghĩa kiểu dữ liệu cho user
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   roles: { name: string }[];
//   profile: {
//     address: string;
//     bio: string;
//     city: string;
//     company: string | null;
//     country: string | null;
//     disabilityDescription: string;
//     disabilityType: string;
//     dob: string | null;
//     fullName: string;
//     gender: string;
//     phone: string;
//     profilePicture: string | null;
//   } | null;
// }

const ManagePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  // const [ setProfile] = useState<User["profile"] | null>(null);

  // const handleReturnProfile = (profile: User["profile"]) => {
  //   if (!profile) {
  //     toast.error("Thông tin chưa được cập nhật!!");
  //     return;
  //   }
  //   setProfile(profile);
  // };

  const handleGetAllPostNoneActive = async () => {
    try {
      const res = await ApiAdmin.GetAllPostNoneActive();
      console.log("API Response:", res.data.result);

      if (Array.isArray(res.data.result.data)) {
        setPosts(res.data.result.data);
      } else {
        console.error("Dữ liệu API không phải là mảng!", res.data.result);
        setPosts([]); // Đặt giá trị mặc định
      }
    } catch (err: any) {
      console.error("Lỗi khi gọi API:", err.response?.data || err.message);
      setPosts([]);
      toast.error("Không thể tải danh sách bài viết!");
    }
  };
  const handleActivePost = (id: any) => {
    ApiAdmin.ActivePost(id)
      .then((res) => {
        console.log(res.data.result);
        handleGetAllPostNoneActive();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    handleGetAllPostNoneActive();
  }, []);
  console.log(posts);

  return (
    <div>
      {posts?.map((i, k) => (
        <div key={k} className="relative mt-10 max-w-2xl">
          <ArticleItems label={i.content || ""} image={i.images || []} />
          <div className="absolute bottom-0 left-0 flex gap-2">
            <div onClick={() => handleActivePost(i.id)}>
              <MyButton content={"Duyệt"} />
            </div>

            <div>
              <MyButton content={"Xóa"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagePosts;
