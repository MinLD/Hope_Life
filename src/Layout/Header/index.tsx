import MyLayout from "../MyLayOut";

function MyHeader() {
  const TitleHeader: { name: string; id: number }[] = [
    { name: "Trang Chủ", id: 1 },
    { name: "Giới thiệu", id: 1 },
    { name: "Liên hệ", id: 2 },
  ];
  return (
    <div className="fixed inset-x-0 z-99999 flex h-[70px] items-center justify-center bg-[#333]">
      <MyLayout>
        <div className="flex items-center justify-between">
          <img
            src="https://elearning.iigvietnam.com/images/logo.png"
            alt=""
            className="h-[48px] w-[74px]"
          />

          <div className="flex gap-5 text-[16px] font-bold text-white">
            {TitleHeader.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          </div>
        </div>
      </MyLayout>
    </div>
  );
}

export default MyHeader;
