import PostNews from "../../Components/BannerUser/Component/PostNews";
import SearchBox from "../../Components/SearchBox";

import useScrollHandling from "../../Hook";
import MyLayout from "../../Layout/MyLayOut";
import HeaderJamb from "../HeaderJamb";
import { FaUserCircle } from "react-icons/fa";
import MainHomePages from "../MainHomePages";
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ArticleItems from "../../Components/ArticleItems";
function UserHome() {
  const { scrollPosition } = useScrollHandling();

  return (
    <MainHomePages>
      <div>{scrollPosition >= 0 && <HeaderJamb />}</div>

      <MyLayout>
        <SearchBox />
        <div className="border-1-[#e1e1e1] h-auto w-full rounded-2xl border shadow-2xl">
          <div>
            <PostNews />
          </div>
          <div className="p-3">
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
            <ArticleItems />
          </div>
        </div>
      </MyLayout>
    </MainHomePages>
  );
}

export default UserHome;
