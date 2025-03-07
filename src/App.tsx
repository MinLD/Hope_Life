import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuProvider from "./Context/MenuProvider";

import { Suspense } from "react";
import Routerss from "./Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuProvider>
          <Suspense fallback={<div>Loading...</div>}>
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
    </>
  );
}

export default App;
