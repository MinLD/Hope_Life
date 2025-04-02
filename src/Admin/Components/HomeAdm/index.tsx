import { JSX, useContext, useEffect } from "react";
import HomePagesAdmin from "../../../LayoutAdmin/HomePagesAdmin";
import { MenuContext } from "../../../Context/MenuProvider";
import UserManagement from "../manage_Users";
import ManagePosts from "../manage_Posts";
import RecruiterManagement from "../RecruiterManagement";
import SellsManagement from "../SellManagement";
import ManagePostVolunn from "../ManagePostVolunn";
import ManagePostVolunnWaiting from "../ManagePostVolunnWaiting";

function HomeAdm() {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isType } = menuContext;

  const ComponentMap: Record<
    string,
    string | JSX.Element | (() => void) | any
  > = {
    "manager-users": <UserManagement />,
    "manage-posts": <ManagePosts />,
    "manage-postVolunn": <ManagePostVolunn />,
    "manage-postVolunnWaiting": <ManagePostVolunnWaiting />,
    "manage-recruitments": <RecruiterManagement />,
    "manage-sells": <SellsManagement />,
  };
  const handleReturnComponents = () => {
    return ComponentMap[isType] ?? <UserManagement />;
  };

  useEffect(() => {
    localStorage.setItem("isType", isType);
  }, [isType]);
  return (
    <HomePagesAdmin>
      <div className="">{handleReturnComponents()}</div>
    </HomePagesAdmin>
  );
}

export default HomeAdm;
