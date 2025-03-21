import { lazy } from "react";
const Routerss: {
  path: string;
  component: any;
}[] = [
  {
    path: "/Gioi-Thieu",
    component: lazy(() => import("../Pages/Home/index.tsx")),
  },
  {
    path: "/",
    component: lazy(() => import("../LayoutUser/UserHome/index.tsx")),
  },
  {
    path: "/app/register",
    component: lazy(() => import("../Components/PostJob/index.tsx")),
  },
  {
    path: "/Loggin",
    component: lazy(() => import("../Pages/LogginComponent/index.tsx")),
  },
  {
    path: "/app/dashboard",
    component: lazy(() => import("../Pages/AppDashBoard/index.tsx")),
  },
  {
    path: "/app/hopeshop",
    component: lazy(() => import("../Pages/HomeShop/index.tsx")),
  },
  {
    path: "/hopeshop/:id",
    component: lazy(
      () => import("../ComponentsHopeShop/DetailsProducts/index.tsx"),
    ),
  },
  {
    path: "/post/job",
    component: lazy(() => import("../Pages/HomePostJob/index.tsx")),
  },
  {
    path: "/admin",
    component: lazy(() => import("../Admin/Components/HomeAdm/index.tsx")),
  },
  {
    path: "/shop/register/jobshop",
    component: lazy(() => import("../ComponentsHopeShop/PostJob/index.tsx")),
  },
];
export default Routerss;
