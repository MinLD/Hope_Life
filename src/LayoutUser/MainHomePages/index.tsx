import { useContext } from "react";
import { MenuContext } from "../../Context/MenuProvider";

import UserHeader from "../MyHeaderUser";
import MyFooter from "../../Layout/Footer";

type Props = {
  children: React.ReactNode;
};
function MainHomePages({ children }: Props) {
  return (
    <div>
      <UserHeader />
      <div> {children}</div>
      <MyFooter />
    </div>
  );
}

export default MainHomePages;
