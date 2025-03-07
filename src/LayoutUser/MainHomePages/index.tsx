import { useContext } from "react";
import { MenuContext } from "../../Context/MenuProvider";
import MyFooter from "../../Layout/Footer";
import HeaderJamb from "../HeaderJamb";
import UserHeader from "../MyHeaderUser";
import useScrollHandling from "../../Hook";

type Props = {
  children: React.ReactNode;
};
function MainHomePages({ children }: Props) {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isWindowSize } = menuContext;
  const { scrollDriction, scrollPosition } = useScrollHandling();
  console.log(scrollDriction, scrollPosition);
  return (
    <div>
      <UserHeader />
      <div> {children}</div>
    </div>
  );
}

export default MainHomePages;
