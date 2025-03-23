import { JSX, useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../../Context/StoreProvider";

type Props = {
  children: JSX.Element;
  allowedRoles: string[];
};

const ProtectedRoute = ({ allowedRoles, children }: Props) => {
  const storeContext = useContext(StoreContext);
  if (!storeContext) return;
  const { isRole } = storeContext;
  if (!isRole || isRole.length === 0) {
    console.log("Đang chờ cập nhật quyền...");
    return <div>Loading...</div>; // Đợi role cập nhật trước khi kiểm tra quyền
  }

  const userHasPermission = allowedRoles.some((role) =>
    isRole?.some(
      (userRole) => userRole.name.toLowerCase() === role.toLowerCase(),
    ),
  );

  // console.log("Allowed Roles:", allowedRoles);
  // console.log(
  //   "User Roles trong state:",
  //   isRole?.map((role) => role.name),
  // );
  // console.log("Kết quả so sánh:", userHasPermission);

  if (!userHasPermission) {
    return <Navigate to="/" />; // Redirect to login if user doesn't have permission
  }

  return children;
};

export default ProtectedRoute;
