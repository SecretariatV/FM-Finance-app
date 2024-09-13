import { lazy } from "react";
import { INavType, IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyHomePage = lazy(() => import("@pages/home"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home",
        path: "",
        element: <LazyHomePage />,
      },
    ],
  },
];

const NAV_DATA: INavType[] = [
  {
    title: "Overview",
    icon: "House",
    path: "",
  },
  {
    title: "Transactions",
    icon: "Arrowsdownup",
    path: "transaction",
  },
  {
    title: "Budgets",
    icon: "Chartdonut",
    path: "budget",
  },
  {
    title: "Pots",
    icon: "Jarfill",
    path: "pot",
  },
  {
    title: "Recurring bills",
    icon: "Receipt",
    path: "bill",
  },
];

export { ROUTER_DATA, NAV_DATA };
