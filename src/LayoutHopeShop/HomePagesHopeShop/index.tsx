import HeaderHopeShop from "../HeaderHopeShop.tsx";
type Props = {
  children: React.ReactNode;
};
function HomePagesHopeShop({ children }: Props) {
  return (
    <>
      <HeaderHopeShop />
      {children}
    </>
  );
}

export default HomePagesHopeShop;
