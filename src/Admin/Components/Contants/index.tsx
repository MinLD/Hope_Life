import {
  BriefcaseBusiness,
  LogOut,
  LucideIcon,
  Newspaper,
  Store,
  UserRoundCog,
} from "lucide-react";

interface MenuItem {
  id?: string;
  title?: any;
  icon?: LucideIcon;
  badge?: string;
}

const sidebarMenuAdmin: MenuItem[] = [
  {
    id: "manage-users",
    title: "Quản lý người dùng",
    icon: UserRoundCog,
    badge: "0",
  },
  {
    id: "manage-posts",
    title: "Quản lý bài đăng",
    icon: Newspaper,
    badge: "0",
  },
  {
    id: "manage-recruitments",
    title: "Quản lý nhà tuyển dụng",
    icon: BriefcaseBusiness,
    badge: "0",
  },
  {
    id: "manage-sells",
    title: "Quản lý bán hàng",
    icon: Store,
    badge: "0",
  },
  {
    id: "Logout",
    title: "Đăng xuất",
    icon: LogOut,
    badge: "0",
  },
];

export default { sidebarMenuAdmin };
