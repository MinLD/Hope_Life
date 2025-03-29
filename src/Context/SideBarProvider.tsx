import React from "react";
type Props = {
  children: React.ReactNode;
};
type SideBarContextType = {
  isOpenSideBar: boolean;
  setIsOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SideBarContext = React.createContext<
  SideBarContextType | undefined
>(undefined);
function SideBarProvider({ children }: Props) {
  const [isOpenSideBar, setIsOpenSideBar] = React.useState<boolean>(false);
  return (
    <SideBarContext.Provider
      value={{
        isOpenSideBar,
        setIsOpenSideBar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarProvider;
