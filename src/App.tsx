import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuProvider from "./Context/MenuProvider";

import { Suspense } from "react";
import Routerss from "./Routers";
import PostProvider from "./Context/PostProvider";
import ToastProvider from "./Context/ToastProvider";

import StoreProvider from "./Context/StoreProvider";
import LoadingTextCommon from "./Components/LoaddingCommon";

function App() {
  return (
    <>
      {" "}
      <ToastProvider>
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
                        element={<item.component />}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </MenuProvider>
            </BrowserRouter>
          </PostProvider>
        </StoreProvider>
      </ToastProvider>
    </>
  );
}

export default App;
