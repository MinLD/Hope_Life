import PostNews from "../../Components/BannerUser/Component/PostNews";
import SearchBox from "../../Components/SearchBox";

import MyLayout from "../../Layout/MyLayOut";

import MainHomePages from "../MainHomePages";

import ArticleItems from "../../Components/ArticleItems";
import { useContext, useState } from "react";
import CommentBox from "../../Components/ArticleItems/component/CommentBox";
import { PostContext } from "../../Context/PostProvider";
import MenuMobile from "../../Components/MenuMobile.tsx";

function UserHome() {
  const handleShowComnent = () => {
    setShowComnent(!isShowComnent);
    if (isShowComnent) {
      document.body.classList.remove("overflow-hidden");
    } else if (isShowComnent === false) {
      document.body.classList.add("overflow-hidden");
    }
  };
  const [isShowComnent, setShowComnent] = useState<boolean>(false);
  const postcontext = useContext(PostContext);
  if (!postcontext) return;
  const { PostProducts } = postcontext;

  return (
    <MainHomePages>
      {/* <div>{scrollPosition > 0 && <HeaderJamb />}</div> */}

      <MyLayout>
        <SearchBox />
        <div className=" border-1-[#e1e1e1] h-auto w-full rounded-2xl border shadow-2xl">
          <div className="px-5 py-5">
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
          <MyLayout>
            {PostProducts.map((i, k) => (
              <div key={k}>
                <ArticleItems image={i.image || []} label={i.label || ""} />
              </div>
            ))}
          </MyLayout>
        </div>
      </MyLayout>
      <MenuMobile />
    </MainHomePages>
  );
}

export default UserHome;
