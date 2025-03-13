import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GetInfo } from "../Apis/AuthService";

type UserInfoType = {
  id: number;
  username: string;
  email: string;
  role: string;
};
type StoreContextType = {
  userInfo: UserInfoType | null;
  setUserInfo?: (user: UserInfoType | null) => void;
  handleLogout?: () => void;
};
export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);
type StoreProviderProps = {
  children: ReactNode;
};
const StoreProvider = ({ children }: StoreProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  const handleLogout = () => {
    if (!Cookies.get("token")) return;
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("id");
    setUserInfo(null);
    window.location.href = "/";
  };
  const value: StoreContextType = {
    userInfo,
    setUserInfo,
    handleLogout,
  };
  const userId = Cookies.get("id");
  useEffect(() => {
    if (!userId) return;
    GetInfo(userId).then((res) => setUserInfo?.(res.data));
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
