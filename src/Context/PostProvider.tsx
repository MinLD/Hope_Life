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

// Kiểu dữ liệu của Context
type PostContextType = {
  PostProducts: PostType[];
  setPostProdcts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

// Tạo Context
export const PostContext = createContext<PostContextType | undefined>(
  undefined,
);

function PostProvider({ children }: Props) {
  const [PostProducts, setPostProdcts] = useState<PostType[]>([]);

  return (
    <PostContext.Provider value={{ PostProducts, setPostProdcts }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
