import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Định nghĩa kiểu dữ liệu cho bài viết
type PostType = {
  id: number;
  label: string;
  image: { src: string }[];
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
  const [PostProducts, setPostProdcts] = useState<PostType[]>([
    {
      id: 1,
      label: `Về nghị lực và sự kiên trì 
"Thành công không đến từ may mắn, mà đến từ sự kiên trì. Khi bạn cảm thấy muốn bỏ cuộc, hãy nhớ lý do vì sao mình bắt đầu. Mỗi khó khăn là một bài học, mỗi thất bại là một cơ hội để trưởng thành. Chỉ cần bạn không dừng lại, con đường phía trước sẽ luôn mở ra."`,
      image: [
        {
          src: "data:image/jpeg;base64,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",
        },
      ],
    },
    {
      id: 1,
      label: `Về cuộc sống và hạnh phúc
"Hạnh phúc không phải là đích đến, mà là hành trình. Đừng chờ đợi một ngày hoàn hảo, hãy tận hưởng từng khoảnh khắc nhỏ bé. Một nụ cười chân thành, một lời động viên ấm áp, hay một buổi sáng bình yên – tất cả đều là những điều khiến cuộc sống trở nên ý nghĩa."`,
      image: [
        {
          src: "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/thanhngutucnguvietnam01.jpg?v=1710306285867",
        },
      ],
    },
    {
      id: 1,
      label: `Về tình yêu và sự trân trọng
"Tình yêu không chỉ là những lời hứa, mà còn là những hành động nhỏ bé mỗi ngày. Đôi khi, một ánh nhìn quan tâm, một cái ôm ấm áp hay đơn giản là lắng nghe cũng đủ để sưởi ấm trái tim. Hãy trân trọng những người ở bên cạnh bạn, vì họ chính là món quà quý giá nhất trong cuộc đời."`,
      image: [
        {
          src: "https://tuthuc.edu.vn/wp-content/uploads/nhung-cau-thanh-ngu-tuc-ngu-viet-nam-quy-gia-day-ban-dieu-hay-le-phai-trong-cuoc-song-1099-4-1.jpg",
        },
      ],
    },
    {
      id: 1,
      label: ` Về ước mơ và hoài bão
"Đừng sợ ước mơ quá lớn, chỉ sợ trái tim mình quá nhỏ. Mọi điều vĩ đại đều bắt đầu từ những bước chân nhỏ bé. Nếu bạn tin vào bản thân và không ngừng nỗ lực, chẳng có gì là không thể. Hãy dám nghĩ lớn, hành động mạnh mẽ và theo đuổi đam mê đến cùng."

`,
      image: [
        {
          src: "https://lh5.googleusercontent.com/proxy/KIOEIN6y7iCjbrejrcwtmpqFGtYnX6J5MXDgPlcFuNW7_NKh4MGtmdAA_u1ytCSQXp5JACffQwrd3gdkpPBLgDBVUifIVxpmSnMiyDy4Esgo7e_N_S9mcA",
        },
      ],
    },
    {
      id: 1,
      label: `Về nghị lực và sự kiên trì 
"Thành công không đến từ may mắn, mà đến từ sự kiên trì. Khi bạn cảm thấy muốn bỏ cuộc, hãy nhớ lý do vì sao mình bắt đầu. Mỗi khó khăn là một bài học, mỗi thất bại là một cơ hội để trưởng thành. Chỉ cần bạn không dừng lại, con đường phía trước sẽ luôn mở ra."`,
      image: [
        {
          src: "https://tiengtrung.com/wp-content/uploads/2020/11/thanh-ngu-trung-quoc.jpg",
        },
      ],
    },
  ]);

  return (
    <PostContext.Provider value={{ PostProducts, setPostProdcts }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
