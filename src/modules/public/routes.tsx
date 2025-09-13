import { lazy } from "react";

const Home = lazy(() => import("@/modules/public/pages"));
const OnBoarding = lazy(() => import("@/modules/public/pages/onboarding"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "onboarding",
    element: <OnBoarding />,
  },
];
