import { JSX, useContext } from "react";
import MenuMobile from "../../Components/MenuMobile";
import HomePagesDashBoard from "../../LayoutDashBoard/HomepagesDashBoard";
import { MenuContext } from "../../Context/MenuProvider";

import BulletinBoard from "../../ComponentsDashBoard/BulletinBoard";

import BuyService from "../../ComponentsDashBoard/BuyService";
import ServiceSelection from "../../ComponentsDashBoard/MyService";
import CVManagement from "../../ComponentsDashBoard/CvManagement";
function AppDashBoard() {
  const menuContext = useContext(MenuContext);
  if (!menuContext) return;
  const { isType } = menuContext;
  const ComponentMap: Record<string, string | JSX.Element> = {
    "cv-management": <CVManagement />,
    "buy-service": <BuyService />,
    "my-service": <ServiceSelection />,
  };
  const handleReturnComponents = () => {
    return ComponentMap[isType] ?? <BulletinBoard />;
  };
  return (
    <>
      <HomePagesDashBoard>
        <div className="">{handleReturnComponents()}</div>
        <MenuMobile />
      </HomePagesDashBoard>
    </>
  );
}

export default AppDashBoard;
