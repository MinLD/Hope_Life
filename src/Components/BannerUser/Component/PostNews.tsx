import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreProvider";
import { FaUserCircle } from "react-icons/fa";

type Props = {
  onClick: () => void;
};
function PostNews({ onClick }: Props) {
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { userInfo } = storeContext;
  console.log(userInfo?.profile.fullName);
  return (
    <div className="flex h-auto w-full flex-col gap-5 rounded-lg">
      <div className="flex items-center gap-2" onClick={onClick}>
      <FaUserCircle  size={50}/>
        <p className="w-[100%] rounded-3xl pl-2 text-[#94979b] outline-none">
          What's on your mind ?
        </p>
      </div>

      <div className="h-[1px] w-[100%] border-b-1 border-[#e1e1e1]"></div>
    </div>
  );
}

export default PostNews;
