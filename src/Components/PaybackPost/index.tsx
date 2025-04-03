import { useContext, useEffect, useState } from "react";
import MyLayout from "../../Layout/MyLayOut";
import MainHomePages from "../../LayoutUser/MainHomePages";
import post from "../../Services/PostApi";
import ArticleItems from "../ArticleItems";
import { PostContext } from "../../Context/PostProvider";

function PayBackPost() {
  const [isOpen, setIsOpen] = useState(false);
  const postcontext = useContext(PostContext);
  if (!postcontext) return;
  const { setPostVolun, postVolunn } = postcontext;

  const handleGetAllMyPostVolunn = () => {
    post
      .GetAllPostVolunnFromUser()
      .then((res) => {
        console.log(res);
        setPostVolun(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetAllMyPostVolunn();
  }, []);
  console.log(isOpen);
  return (
    <div>
      <MainHomePages>
        <MyLayout>
          <div className="mt-10 border-1-[#e1e1e1] s:px-6 h-auto min-h-[600px] w-full rounded-2xl border px-3 shadow-2xl lg:px-5 xl:px-5">
            <h2 className="text-2xl font-bold mb-2 mt-5">
              Tất cả bài đăng đã đủ vốn
            </h2>
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
            {postVolunn?.length === 0 && (
              <h2>(bạn chưa có bài đăng hoàn vốn nào!) </h2>
            )}
          </div>
        </MyLayout>
      </MainHomePages>
    </div>
  );
}

export default PayBackPost;
