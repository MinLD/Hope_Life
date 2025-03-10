type Props = {
  src: string;
  id: number;
  title: string;
  lable: string;
};
function MarketIntroduction({ src, title, lable }: Props) {
  return (
    <div className="flex w-[100%] flex-col items-center rounded-lg p-6 shadow-lg md:flex-row">
      {/* Hình ảnh bên trái */}
      <div className="w-full p-4 md:w-1/2">
        <img
          src={src} // Thay bằng đường dẫn thực tế của ảnh
          alt="Quà tặng truyền thống"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="w-full p-4 md:w-1/2">
        <h2 className="text-2xl font-bold text-[#4a3f62]">{title}</h2>
        <p className="mt-4 text-gray-600">{lable}</p>

        {/* Thành ngữ động viên */}
        <blockquote className="mt-4 text-[#d46b08] italic">
          "Một miếng khi đói bằng một gói khi no."
        </blockquote>
      </div>
    </div>
  );
}

export default MarketIntroduction;
