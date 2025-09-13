import { lazy } from "react";

const Home = lazy(() => import("@/modules/public/pages"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sign-in",
    name: "Sign In",
    element: "",
  },
  {
    path: "sign-up",
    element: "",
  },
];
