
import HeaderHopeShop from "../HeaderHopeShop.tsx";
type Props = {
  children: React.ReactNode;
};
function HomePagesHopeShop({ children }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999999]">
        <HeaderHopeShop />
      </div>
      {children}
    </>
  );
}

export default HomePagesHopeShop;
