type Props = {
  step: number;
};
const ProgressBar = ({ step = 1 }: Props) => {
  return (
        <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center justify-center gap-5">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#00b14f]">
            <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#fff]"></div>
          </div>
          <div className="relative w-full max-w-[60%]">
            <div className={`h-[1px] border-2 border-[#e1e1e1]`}></div>
            <div
              className={`absolute top-0 left-0 h-[1px] ${step === 2 && "w-2/2 border-2 border-[#00b14f]"} w-1/2 border-2 border-[#00b14f]`}
            ></div>
          </div>

          <div
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full ${step === 2 ? "bg-[#00b14f]" : "bg-[#333] opacity-[30%]"} `}
          >
            <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#fff]"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Thông tin nhà tuyển dụng</p>
          <p>Nhu cầu tư vấn</p>
        </div>
      </div>
  
  );
};

export default ProgressBar;
