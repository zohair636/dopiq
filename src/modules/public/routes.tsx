import { lazy } from "react";

const Home = lazy(() => import("@/modules/public/pages"));
const OnBoarding = lazy(() => import("@/modules/public/pages/onboarding"));
const OnboardingLayout = lazy(() => import("@/modules/public/layout/onboarding-layout"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "onboarding",
    element: <OnBoarding />,
  },
  {
    path: "customer/onboarding",
    element: <OnboardingLayout />,
  },
];
