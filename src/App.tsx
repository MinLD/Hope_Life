import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuProvider from "./Context/MenuProvider";

import { Suspense, useEffect } from "react";
import Routerss from "./Routers";
import PostProvider from "./Context/PostProvider";
import ToastProvider from "./Context/ToastProvider";

import StoreProvider from "./Context/StoreProvider";
import LoadingTextCommon from "./Components/LoaddingCommon";
import ProtectedRoute from "./Routers/components/ProtectedRoute";
import HomeAdm from "./Admin/Components/HomeAdm";
import AppDashBoard from "./Pages/AppDashBoard";
import Logginbox from "./Pages/LogginComponent";
import SideBarProvider from "./Context/SideBarProvider";

function App() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "/logoanhiu1.png");
    }
  }, []);
  return (
    <>
      <ToastProvider>
        <SideBarProvider>
          <StoreProvider>
            <PostProvider>
              <BrowserRouter>
                <MenuProvider>
                  <Suspense
                    fallback={<div className="">{LoadingTextCommon()}</div>}
                  >
                    <Routes>
                      {Routerss.map((item) => (
                        <Route
                          key={item.path}
                          path={item.path}
                          element={
                            <ProtectedRoute allowedRoles={item.allowedRoles}>
                              <item.component />
                            </ProtectedRoute>
                          }
                        />
                      ))}
                      {/* {
                        path: "/Loggin",
                        component: lazy(() => import("../Pages/LogginComponent/index.tsx")),
                        allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
                      }, */}
                      <Route path="/Loggin" element={<Logginbox />} />

                      <Route
                        path="/admin"
                        element={
                          <ProtectedRoute allowedRoles={["ADMIN"]}>
                            <>
                              <HomeAdm />
                            </>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/dashboard"
                        element={
                          <ProtectedRoute allowedRoles={["EMPLOYER"]}>
                            <>
                              <AppDashBoard />
                            </>
                          </ProtectedRoute>
                        }
                      />
                    </Routes>
                  </Suspense>
                </MenuProvider>
              </BrowserRouter>
            </PostProvider>
          </StoreProvider>
        </SideBarProvider>
      </ToastProvider>
    </>
  );
}

export default App;
