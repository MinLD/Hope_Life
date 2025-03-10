import UserHeader from "../../LayoutUser/MyHeaderUser";
import MyFooter from "../Footer";

type Props = {
  children: React.ReactNode;
};
function MyHomePages({ children }: Props) {
  return (
    <div>
      <div className="fixed inset-0 z-99 h-[0px]">
        <UserHeader />
      </div>

      {children}
      <MyFooter />
    </div>
  );
}

export default MyHomePages;
