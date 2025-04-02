import PostNews from "../../Components/BannerUser/Component/PostNews";
import SearchBox from "../../Components/SearchBox";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../MainHomePages";
import ApiAdmin from "../../Services/ApiAdmin.tsx";
import ArticleItems from "../../Components/ArticleItems";
import { useContext, useEffect, useState } from "react";
import CommentBox from "../../Components/ArticleItems/component/CommentBox";
import { PostContext } from "../../Context/PostProvider";
import MenuMobile from "../../Components/MenuMobile/index.tsx";
import { StoreContext } from "../../Context/StoreProvider.tsx";
import post from "../../Services/PostApi.tsx";
function UserHome() {
  const [isShowComnent, setShowComnent] = useState<boolean>(false);
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;

  const postcontext = useContext(PostContext);
  if (!postcontext) return;
  const { PostProducts, setPostProdcts, setPostVolun, postVolunn, isTypePost } =
    postcontext;
  const handleShowComnent = () => {
    setShowComnent(!isShowComnent);
    if (isShowComnent) {
      document.body.classList.remove("overflow-hidden");
    } else if (isShowComnent === false) {
      document.body.classList.add("overflow-hidden");
    }
  };
  const handleGetAllPost = () => {
    ApiAdmin.GetAllPost()
      .then((res) => {
        console.log(res);
        setPostProdcts(res.data.result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGetAllPostVolunn = () => {
    post
      .GetAllPostVolunn()
      .then((res) => {
        console.log(res.data.result);
        setPostVolun(res.data.result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleGetAllPost();
    handleGetAllPostVolunn();
    // console.log(isRole && isRole[0].name);
    // co
    // nsole.log(userInfo);
  }, []);
  const [isShowPost, setShowPost] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const [isWhatPost, setIsWhatPost] = useState<string>("");
  const handlePostIs = (id: string) => {
    setIsWhatPost(id);
    setShowComnent(false);
    setShowPost(true);
  };

  return (
    <MainHomePages>
      {/* <HeaderJamb /> */}

      <MyLayout>
        <SearchBox />
        <div className="border-1-[#e1e1e1] s:px-6 h-auto w-full rounded-2xl border px-3 shadow-2xl lg:px-5 xl:px-5">
          <div className="py-5">
            <PostNews onClick={handleShowComnent} />
            {isShowComnent && (
              <>
                <div
                  className="bg-opacity-50 fixed inset-0 z-[99] bg-black opacity-[60%]"
                  onClick={() => setShowComnent(false)}
                ></div>
                <div
                  className={`fixed z-[1001] w-[95%] md:w-[50%] lg:w-[40%] max-h-[80vh] overflow-y-auto bg-white p-4 shadow-2xl transition-all duration-500 rounded-2xl flex gap-4 transform scale-95 opacity-0 ${
                    isShowComnent
                      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 animate-fade-in"
                      : "pointer-events-none"
                  }`}
                >
                  {/* Image Box 1 */}
                  <div
                    className="relative w-1/2 flex justify-center items-center group"
                    onClick={() => handlePostIs("post")}
                  >
                    <img
                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1500/https://www.nghilucsong.net/wp-content/uploads/2020/02/buc-thu-gui-bo.jpeg"
                      alt="Bài viết"
                      className="rounded-xl shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <p className="absolute bg-white px-4 py-2 shadow-lg rounded-xl text-center text-gray-800 text-lg font-semibold transition-opacity duration-300 group-hover:opacity-80">
                      bài viết chia sẻ
                    </p>
                  </div>

                  {/* Image Box 2 */}
                  <div
                    className="relative w-1/2 flex justify-center items-center group"
                    onClick={() => handlePostIs("postVolunn")}
                  >
                    <img
                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1548/https://www.nghilucsong.net/wp-content/uploads/2020/02/hi-vong-cua-to.jpeg"
                      alt="Bài viết hoàn vốn"
                      className="rounded-xl shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <p className="absolute bg-white px-4 py-2 shadow-lg rounded-xl text-center text-gray-800 text-lg font-semibold transition-opacity duration-300 group-hover:opacity-80">
                      bài viết kêu gọi hoàn vốn
                    </p>
                  </div>
                </div>
              </>
              // <CommentBox
              //   setShowComnent={setShowComnent}
              //   isShowComnent={isShowComnent}
              //   onClick={handleShowComnent}
              //   handleShowComnent={handleShowComnent}
              // />
            )}
            {isWhatPost === "post" && (
              <div>
                <CommentBox
                  isShowComment={isShowPost}
                  setShowComment={setShowPost}
                  isWhatPost={isWhatPost}
                  setIsWhatPost={setIsWhatPost}
                />
              </div>
            )}
            {isWhatPost === "postVolunn" && (
              <div>
                <CommentBox
                  isShowComment={isShowPost}
                  setShowComment={setShowPost}
                  isWhatPost={isWhatPost}
                  setIsWhatPost={setIsWhatPost}
                />
              </div>
            )}
          </div>
          {isTypePost === "post" && (
            <>
              <div>
                {PostProducts?.map((item: any) => (
                  <>
                    <ArticleItems {...item} setOpen={() => setIsOpen(true)} />
                  </>
                ))}
              </div>
            </>
          )}
          {isTypePost === "postVolunn" && (
            <>
              <div>
                {postVolunn?.map((i, k) => (
                  <div key={k}>
                    <ArticleItems
                      id={i.id}
                      fund={i.fund}
                      user={i.user}
                      content={i.content}
                      images={i.files}
                      location={i.location}
                      title={i.title}
                      setOpen={() => setIsOpen(true)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </MyLayout>
      <MenuMobile />
    </MainHomePages>
  );
}

export default UserHome;
