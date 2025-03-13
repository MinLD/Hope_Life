import { createContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type props = {
  children: React.ReactNode;
};
export const ToastContext = createContext({});
const ToastProvider = ({ children }: props) => {
  const value = {
    toast,
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
