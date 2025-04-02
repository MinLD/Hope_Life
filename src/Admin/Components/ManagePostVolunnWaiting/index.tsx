import { useEffect, useState } from "react";

import ApiAdmin from "../../../Services/ApiAdmin";

import ArticleItems from "../../../Components/ArticleItems";

import LoadingTextCommon from "../../../Components/LoaddingCommon";

interface UserProfile {
  address: string;
  bio: string;
  city: string;
  company: string | null;
  country: string;
  disabilityDescription: string;
  disabilityType: string;
  dob: string | null;
  fullName: string;
  gender: string;
  id: number;
  phone: string;
  profilePicture: string | null;
  seller: string | null;
}

interface User {
  accepted: boolean;
  email: string;
  id: string;
  phone: string;
  profile: UserProfile;
  roles: string[];
  seller: string | null;
}

interface Image {
  url: string;
  id: number;
}

interface Post {
  id: number;
  content: string;
  bankName: string;
  location: string;
  stk: string;
  files: Image[];
  title: string;
  user: User;
  totalAmount: number;
}

const ManagePostVolunnWaiting = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const handleGetAllPostVolunnNoneActive = async () => {
    setLoading(true);

    await ApiAdmin.GetAllPostVolunnWaiting()
      .then((res) => {
        console.log(res);
        setPosts(res.data.result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };



  // const handleDeletePost = (id: any) => {
  //   console.log(id);
  //   ApiAdmin.DeletePost(id)
  //     .then((res) => {
  //       console.log(res.data.result);
  //       handleGetAllPostVolunnNoneActive();
  //       toast.success("Xóa bài viet!");
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

  useEffect(() => {
    handleGetAllPostVolunnNoneActive();
  }, []);
  console.log(posts);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">
        Quản lý bài viết yêu cầu hoàn vốn
      </h2>
      <div className="mb-3 flex items-center gap-2"></div>
      {isLoading ? (
        <>
          <LoadingTextCommon />
        </>
      ) : (
        <>
          {posts?.map((i, k) => (
            <div key={k} className="mt-10 max-w-2xl">
              <ArticleItems
                id={i.id}
                title={i.title}
                location={i.location}
                images={i.files}
                content={i.content}
                user={i.user}
                setOpen={() => {}}
              />
              <div className=" flex flex-col gap-2">
                <p className="text-gray-700 font-semibold">
                  Ngân hàng: <span className="font-bold">{i.bankName}</span> -{" "}
                  {i.stk}
                </p>
                <p className="text-gray-700 font-semibold">
                  Tổng tiền hoàn vốn:{" "}
                  <span className="text-green-600 font-bold">
                    {i.totalAmount} VNĐ
                  </span>
                </p>
                {/* <div onClick={() => handleActivePost(i.id)} className="mt-5">
                  <button
                    disabled={!fund} // Chỉ vô hiệu hóa khi không có giá trị trong `fund`
                    className={`${fund ? "cursor-pointer" : "cursor-not-allowed pointer-events-none"} flex h-auto max-w-full bg-[#333] min-w-[100px] cursor-pointer items-center justify-center rounded-md border-none p-2 font-medium text-[#fff] transition hover:bg-[#79c776] active:scale-95`}
                  >
                    Hoàn vốn
                  </button>
                </div> */}
              </div>
            </div>
          ))}
          {posts?.length === 0 && (
            <div className="">
              <p className="text-2xl font-semibold">Không có bài viết</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManagePostVolunnWaiting;
