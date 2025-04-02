import { lazy } from "react";
const Routerss: {
  path: string;
  component: any;
  allowedRoles: string[];
}[] = [
  {
    path: "/",
    component: lazy(() => import("../Pages/Home/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/post",
    component: lazy(() => import("../LayoutUser/UserHome/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/app/register",
    component: lazy(() => import("../Components/PostJob/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },

  {
    path: "/app/hopeshop",
    component: lazy(() => import("../Pages/HomeShop/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/hopeshop/:id",
    component: lazy(
      () => import("../ComponentsHopeShop/DetailsProducts/index.tsx")
    ),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/post/job",
    component: lazy(() => import("../Pages/HomePostJob/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },

  {
    path: "/shop/register/jobshop",
    component: lazy(() => import("../ComponentsHopeShop/PostJob/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "app/hopeshop/admin",
    component: lazy(() => import("../Pages/AdminHopeShop/index.tsx")),
    allowedRoles: ["SELLER"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/checkout",
    component: lazy(
      () => import("../ComponentsHopeShop/CheckoutPages/index.tsx")
    ),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
  {
    path: "/paybackpost",
    component: lazy(() => import("../Components/PaybackPost/index.tsx")),
    allowedRoles: ["USER", "NOROLES"], // Chỉ cho phép User hoặc chưa đăng nhập
  },
];
export default Routerss;
