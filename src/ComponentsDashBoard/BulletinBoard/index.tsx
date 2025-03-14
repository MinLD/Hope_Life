import UserProfileDashboard from "./Components/UserProfileDashboard";
import DashBoardTProfile from "./Components/DashBoardTProfile";

const BulletinBoard = () => {
  return (
    <>
      <div className="min-h-screen">
        <DashBoardTProfile />
        <UserProfileDashboard />
      </div>
    </>
  );
};

export default BulletinBoard;
