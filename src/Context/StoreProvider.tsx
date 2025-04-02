import React, { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GetInfo } from "../Services/AuthService";

type RoleType = {
  description?: string;
  name: string;
  permissions?: string[];
};
type UserInfoType = {
  id: string;
  email: string;
  phone: string | null;
  fund: number;

  profile: {
    fullName: string;
    address: string | null;
    bio: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    disabilityDescription: string | null;
    disabilityType: string | null;
    dob: string | null;
    gender: string | null;
    phone: string | null;
    profilePicture: string | null;
    seller: string | null;
  };
  roles: RoleType[];
};
type StoreContextType = {
  userInfo: UserInfoType | null;
  setUserInfo?: (user: UserInfoType | null) => void;
  handleLogout?: () => void;
  isRole?: UserInfoType["roles"];
  setRole?: (roles: UserInfoType["roles"]) => void;
  IdUser: string;
  setIdUser: React.Dispatch<React.SetStateAction<any>>;
};
export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);
type StoreProviderProps = {
  children: ReactNode;
};
const StoreProvider = ({ children }: StoreProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [isRole, setRole] = useState<UserInfoType["roles"]>([]);
  const [IdUser, setIdUser] = useState("");

  const handleLogout = () => {
    if (!Cookies.get("token")) return;
    Cookies.remove("token");
    setUserInfo(null);
    setRole([{ name: "NOROLES" }]);
    window.location.href = "/";
  };
  const value: StoreContextType = {
    IdUser,
    setIdUser,
    userInfo,
    setUserInfo,
    handleLogout,
    isRole,
    setRole,
  };
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      setRole([{ name: "NOROLES" }]);

      return;
    }
    // GetInfo()
    //   .then((res) => {
    //     console.log(res.data.result);
    //     const roles =
    //       res.data.result.roles.length > 0
    //         ? res.data.result.roles
    //         : [{ name: "NOROLES" }];
    //     setUserInfo?.(res.data.result);
    //     setRole?.(roles);

    //   })
    //   .catch((err) => console.log(err));
    try {
      GetInfo()
        .then((res) => {
          console.log(res.data.result);
          const roles =
            res.data.result.roles.length > 0
              ? res.data.result.roles
              : [{ name: "NOROLES" }];
          setUserInfo?.(res.data.result);
          setRole?.(roles);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
