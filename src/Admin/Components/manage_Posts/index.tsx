import { useEffect, useState } from "react";

import ApiAdmin from "../../../Services/ApiAdmin";
import MyButton from "../../../Components/Button";
import { toast } from "react-toastify";
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
  description?: string;
}

interface Post {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  active: boolean;
  commentCount: number;
  comments: string[];
  images: Image[];
  likeCount: number;
  likes: string[];
  pinned: boolean;
  published: boolean;
  title: string | null;
  user: User;
}

const ManagePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleGetAllPostNoneActive = async () => {
    setLoading(true);
    await ApiAdmin.GetAllPostNoneActive()
      .then((res) => {
        console.log(res.data.result);
        setPosts(res.data.result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleActivePost = (id: any) => {
    ApiAdmin.ActivePost(id)
      .then((res) => {
        console.log(res.data.result);
        handleGetAllPostNoneActive();
        toast.success("Kiểm duyệt bài viet!");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleDeletePost = (id: any) => {
    ApiAdmin.DeletePost(id)
      .then((res) => {
        console.log(res.data.result);
        handleGetAllPostNoneActive();
        toast.success("Xóa bài viet!");
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
      <h2 className="mb-4 text-2xl font-bold">Quản lý bài viết</h2>
      <div className="mb-3 flex items-center gap-2"></div>
      {isLoading ? (
        <>
          <LoadingTextCommon />
        </>
      ) : (
        <>
          {posts.map((i, k) => (
            <div key={k} className="relative mt-10 max-w-2xl">
              <ArticleItems
                images={i.images}
                content={i.content}
                user={i.user}
              />
              <div className="absolute bottom-0 left-0 flex gap-2">
                <div onClick={() => handleActivePost(i.id)}>
                  <MyButton content={"Duyệt"} isColor="bg-[#333]" />
                </div>

                <div onClick={() => handleDeletePost(i.id)}>
                  <MyButton content={"Xóa"} isColor="bg-[#333]" />
                </div>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="">
              <p className="text-2xl font-semibold">Không có bài viết</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManagePosts;
