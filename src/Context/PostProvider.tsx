import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Định nghĩa kiểu dữ liệu cho bài viết
type PostType = {
  id: number;
  content: string;
  images: { url: string }[];
  user: any;
};
type PostVolunnType = {
  id: number;
  content: string;
  files: { url: string }[];
  user: any;
  title: string;
  location: string;
  fund: any;
};

// Kiểu dữ liệu của Context
type PostContextType = {
  PostProducts: PostType[];
  setPostProdcts: React.Dispatch<React.SetStateAction<PostType[]>>;
  postVolunn: PostVolunnType[];
  setPostVolun: React.Dispatch<React.SetStateAction<PostVolunnType[]>>;
  setTypePost: React.Dispatch<React.SetStateAction<string>>;
  isTypePost: string;
  setFund: React.Dispatch<React.SetStateAction<any>>;
  isFund: Number;
};

// Tạo Context
export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

function PostProvider({ children }: Props) {
  const [PostProducts, setPostProdcts] = useState<PostType[]>([]);
  const [postVolunn, setPostVolun] = useState<PostVolunnType[]>([]);
  const [isTypePost, setTypePost] = useState<string>("post");
  const [isFund, setFund] = useState<Number>(0);

  return (
    <PostContext.Provider
      value={{
        PostProducts,
        setPostProdcts,
        postVolunn,
        setPostVolun,
        setTypePost,
        isTypePost,
        isFund,
        setFund,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
