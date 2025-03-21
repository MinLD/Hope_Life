import PostNews from "../../Components/BannerUser/Component/PostNews";
import SearchBox from "../../Components/SearchBox";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../MainHomePages";
import ApiAdmin from "../../Apis/ApiAdmin.tsx";
import ArticleItems from "../../Components/ArticleItems";
import { useContext, useEffect, useState } from "react";
import CommentBox from "../../Components/ArticleItems/component/CommentBox";
import { PostContext } from "../../Context/PostProvider";
import MenuMobile from "../../Components/MenuMobile/index.tsx";

function UserHome() {
  const [isShowComnent, setShowComnent] = useState<boolean>(false);
  const postcontext = useContext(PostContext);
  if (!postcontext) return;
  const { PostProducts, setPostProdcts } = postcontext;
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
        console.log(res.data.result.data);
        setPostProdcts(res.data.result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    handleGetAllPost();
  }, []);

  return (
    <MainHomePages>
      {/* <HeaderJamb /> */}

      <MyLayout>
        <SearchBox />
        <div className="border-1-[#e1e1e1] s:px-6 h-auto w-full rounded-2xl border px-3 shadow-2xl lg:px-15 xl:px-20">
          <div className="py-5">
            <PostNews onClick={handleShowComnent} />
            {isShowComnent && (
              <CommentBox
                setShowComnent={setShowComnent}
                isShowComnent={isShowComnent}
                onClick={handleShowComnent}
                handleShowComnent={handleShowComnent}
              />
            )}
          </div>

          {PostProducts.map((i, k) => (
            <div key={k}>
              <ArticleItems
                user={i.user.profile || []}
                image={i.images || []}
                label={i.content || ""}
              />
            </div>
          ))}
        </div>
      </MyLayout>
      <MenuMobile />
    </MainHomePages>
  );
}

export default UserHome;
