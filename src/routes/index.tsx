import { PUBLIC_ROUTES } from "@/constants/routes";
import { ADMIN_ROUTES } from "@/modules/admin/constants/routes";
import { CUSTOMER_ROUTES } from "@/modules/customer/constants/routes";
import { FREELANCER_ROUTES } from "@/modules/freelancer/constants/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RoutesProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      children: PUBLIC_ROUTES,
    },
    {
      path: "/admin",
      element: "",
      children: ADMIN_ROUTES,
    },
    {
      path: "/customer",
      element: "",
      children: CUSTOMER_ROUTES,
    },
    {
      path: "/freelancer",
      element: "",
      children: FREELANCER_ROUTES,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
