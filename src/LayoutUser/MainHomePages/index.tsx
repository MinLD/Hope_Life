import UserHeader from "../MyHeaderUser";
import MyFooter from "../../Layout/Footer";
import useScrollHandling from "../../Hook";

type Props = {
  children: React.ReactNode;
};
function MainHomePages({ children }: Props) {
  const { scrollPosition } = useScrollHandling();
  console.log(scrollPosition);
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
