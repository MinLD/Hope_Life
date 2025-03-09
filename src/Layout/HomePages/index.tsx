import UserHeader from "../../LayoutUser/MyHeaderUser";
import MyFooter from "../Footer";

type Props = {
  children: React.ReactNode;
};
function MyHomePages({ children }: Props) {
  return (
    <div>
      <div className="fixed inset-x-0 z-99999 shadow-2xl">
        <UserHeader />
      </div>

      {children}
      <MyFooter />
    </div>
  );
}

export default MyHomePages;
