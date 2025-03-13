import UserHeader from "../MyHeaderUser";
import MyFooter from "../../Layout/Footer";

type Props = {
  children: React.ReactNode;
};
function MainHomePages({ children }: Props) {
  return (
    <div>
      <div className="fixed inset-0 z-[99] h-[0px]">
        <UserHeader />
      </div>
      <div> {children}</div>
      <MyFooter />
    </div>
  );
}

export default MainHomePages;
