function CartProdcut() {
  return (
    <div className="h-auto w-auto overflow-hidden rounded-lg border-1 border-[#e1e1e1] bg-[#fff]">
      <img
        src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7e0aa90e60b64ddbaa5559b5a4486149~tplv-o3syd03w52-crop-webp:1200:1200.webp?dr=15592&nonce=44104&refresh_token=0ef0794c94d35e3ada8445cf99542559&from=2378011839&idc=maliva&ps=933b5bde&shcp=e0b1d153&shp=8dbd94bf&t=555f072d"
        alt=""
        className="h-[65%] w-full rounded-lg object-cover"
      />
      <div className="flex h-[35%] w-full flex-col gap-1 px-1 pt-1">
        <p className="s:text-[15px] line-clamp-1 text-[11px] font-bold">
          Quần cục nữaaa aaaaa aaaaaa aaaa
        </p>
        {/* Đánh giá */}
        <p className="text-xs text-gray-600">4.5⭐ | 120 đánh giá</p>
        <div className="flex items-center justify-between">
          <p className="s:text-[15px] text-[14px] font-bold text-red-500 sm:text-[16px] md:text-[17px] lg:text-[18px]">
            13000Đ
          </p>
          <p className="s:text-[13px] text-[12px] text-gray-500 line-through sm:text-[14px] md:text-[15px] lg:text-[16px]">
            1235Đ
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProdcut;
