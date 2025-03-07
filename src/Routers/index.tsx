import { lazy } from "react";
const Routerss: {
  path: string;
  component: any;
}[] = [
  {
    path: "/",
    component: lazy(() => import("../Layout/Home/index.tsx")),
  },
  {
    path: "/Home",
    component: lazy(() => import("../LayoutUser/UserHome/index.tsx")),
  },
];
export default Routerss;
