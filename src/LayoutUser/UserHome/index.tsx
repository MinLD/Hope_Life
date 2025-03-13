import PostNews from "../../Components/BannerUser/Component/PostNews";
import SearchBox from "../../Components/SearchBox";

import MyLayout from "../../Layout/MyLayOut";

import MainHomePages from "../MainHomePages";

import ArticleItems from "../../Components/ArticleItems";
import { useContext, useState } from "react";
import CommentBox from "../../Components/ArticleItems/component/CommentBox";
import { PostContext } from "../../Context/PostProvider";
import MenuMobile from "../../Components/MenuMobile/index.tsx";
import HeaderJamb from "../HeaderJamb/index.tsx";
import useScrollHandling from "../../Hook/index.tsx";


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
  const { scrollPosition } = useScrollHandling();

  return (
    <MainHomePages>
      <div className="">{scrollPosition > 0 && <HeaderJamb />}</div>

      <MyLayout>
        <SearchBox />
        <div className="border-1-[#e1e1e1] h-auto w-full rounded-2xl border px-3 s:px-6 shadow-2xl lg:px-15 xl:px-20">
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
              <ArticleItems image={i.image || []} label={i.label || ""} />
            </div>
          ))}
        </div>
      </MyLayout>
      <MenuMobile />
    </MainHomePages>
  );
}

export default UserHome;
