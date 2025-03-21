import UserHeader from "../MyHeaderUser";
import MyFooter from "../../Layout/Footer";
import MenuMobile from "../../Components/MenuMobile";

type Props = {
  children: React.ReactNode;
};
function MainHomePages({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 z-[99] h-[0px]">
        <UserHeader />
      </div>
      <div className="mt-25 flex-1"> {children}</div>
      <MyFooter />
      <MenuMobile />
    </div>
  );
}

export default MainHomePages;
