import UserHeader from "../../LayoutUser/MyHeaderUser";
import MyFooter from "../Footer";

type Props = {
  children: React.ReactNode;
};
function MyHomePages({ children }: Props) {
  return (
    <div>
      <div className="fixed top-0 inset-0 z-99">
        <UserHeader />
      </div>

      {children}
      <MyFooter />
    </div>
  );
}

export default MyHomePages;
