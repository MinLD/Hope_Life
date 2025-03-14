import {
  LucideIcon,
  BarChart,
  Gift,
  Brain,
  FileText,
  Users,
  Briefcase,
  ClipboardList,
  Settings,
  Bell,
  ShoppingCart,
  User,
  Search,
  PenLine,
  LayoutList,
  Spline,
  ClipboardPenLine,
} from "lucide-react";

interface MenuItem {
  id: string;
  title?: any;
  icon?: LucideIcon;
  badge?: string;
  children?: MenuItem[];
}

const sidebarMenu: MenuItem[] = [
  {
    id: "dashboard",
    title: "Bảng tin",
    icon: LayoutList,
  },

  {
    id: "recruitment",
    title: "Chiến dịch tuyển dụng",
    icon: Users,
  },
  {
    id: "job-postings",
    title: "Tin tuyển dụng",
    icon: ClipboardPenLine,
  },
  {
    id: "cv-management",
    title: "Quản lý CV",
    icon: ClipboardList,
    children: [
      {
        id: "recruitment-reports",
        title: "Báo cáo tuyển dụng",
        icon: FileText,
      },
    ],
  },
  {
    id: "buy-service",
    title: "Mua dịch vụ",
    icon: ShoppingCart,
  },
  {
    id: "my-service",
    title: "Dịch vụ của tôi",
    icon: Spline,
  },

  {
    id: "account-settings",
    title: "Cài đặt tài khoản",
    icon: Settings,
  },
];

const headerMenu: MenuItem[] = [
  {
    id: "post-job",
    title: "Đăng tin",
    icon: PenLine,
  },
  {
    id: "find-cv",
    title: "Tìm CV",
    icon: Search,
  },

  {
    id: "notifications",
    title: "Thông báo",
    icon: Bell,
    badge: "1",
  },
  {
    id: "cart",
    title: "Giỏ hàng",
    icon: ShoppingCart,
    badge: "0",
  },
  {
    id: "profile",
    title: "Thông tin",
    icon: User,
  },
];

export default { headerMenu, sidebarMenu };
export type { MenuItem };
