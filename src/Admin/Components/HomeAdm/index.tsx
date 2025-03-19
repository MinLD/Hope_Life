import { JSX, useContext } from "react";
import HomePagesAdmin from "../../../LayoutAdmin/HomePagesAdmin";
import { MenuContext } from "../../../Context/MenuProvider";
import UserManagement from "../manage_Users";
import ManagePosts from "../manage_Posts";
import RecruiterManagement from "../RecruiterManagement";
import SellsManagement from "../SellManagement";

function HomeAdm() {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isType } = menuContext;
  const ComponentMap: Record<string, string | JSX.Element> = {
    "manager-users": <UserManagement />,
    "manage-posts": <ManagePosts />,
    "manage-recruitments": <RecruiterManagement />,
    "manage-sells": <SellsManagement />,
  };
  const handleReturnComponents = () => {
    return ComponentMap[isType] ?? <UserManagement />;
  };
  return (
    <HomePagesAdmin>
      <div className="">{handleReturnComponents()}</div>
    </HomePagesAdmin>
  );
}

export default HomeAdm;
