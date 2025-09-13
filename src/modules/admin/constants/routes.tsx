import { lazy } from "react";

const Home = lazy(() => import("@/modules/admin/pages"));
const UserManagement = lazy(
  () => import("@/modules/admin/pages/user-management")
);

export const ADMIN_ROUTES = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "user-management",
    element: <UserManagement />,
  },
  {
    path: "ai-logo-generator",
    element: <UserManagement />,
  },
  {
    path: "analytics",
    element: <UserManagement />,
  },
  {
    path: "announcements",
    element: <UserManagement />,
  },
  {
    path: "contest-management",
    element: <UserManagement />,
  },
  {
    path: "payment-management",
    element: <UserManagement />,
  },
  {
    path: "dispute-management",
    element: <UserManagement />,
  },
  {
    path: "settings",
    element: <UserManagement />,
  },
];
