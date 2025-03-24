import { createContext, ReactNode, useEffect, useState } from "react";

// 📌 Định nghĩa kiểu dữ liệu cho Context
interface MenuContextType {
  isType: string;
  setIsType: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isWindowSize: { width: number; height: number };
  setIsWindowSize: (value: { width: number; height: number }) => void;
  isOpenSibar: boolean;
  setIsOpenSibar: (value: boolean) => void;
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}

// 📌 Tạo Context với giá trị mặc định (ban đầu là `undefined` để tránh lỗi TypeScript)
export const MenuContext = createContext<MenuContextType | undefined>(
  undefined,
);

interface LayoutProps {
  children: ReactNode;
}

// 📌 Tạo Provider bọc ứng dụng
export const MenuProvider = ({ children }: LayoutProps) => {
  const [isType, setIsType] = useState<string>(
    localStorage.getItem("isType") ?? "Login",
  );
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSibar, setIsOpenSibar] = useState<boolean>(false);
  const [isWindowSize, setIsWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleReturnToSizeWindows = () => {
      setIsWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleReturnToSizeWindows);
    handleReturnToSizeWindows();
    return () => {
      window.removeEventListener("resize", handleReturnToSizeWindows);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("isType", isType);
  }, [isType]);

  return (
    <MenuContext.Provider
      value={{
        isType,
        setIsType,
        isOpen,
        setIsOpen,
        isWindowSize,
        setIsWindowSize,
        isOpenSibar,
        setIsOpenSibar,
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
