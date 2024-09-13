import { lazy } from "react";
import { INavType, IRouterType } from "./typeUtils";
import HomePage from "@pages/home";
import TransactionPage from "@pages/transaction";
import BudgetPage from "@pages/budget";
import PotPage from "@pages/pot";
import BillPage from "@pages/bill";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home",
        path: "",
        element: <HomePage />,
      },
      {
        title: "Transactions",
        path: "transaction",
        element: <TransactionPage />,
      },
      {
        title: "Budget",
        path: "budget",
        element: <BudgetPage />,
      },
      {
        title: "Pot",
        path: "pot",
        element: <PotPage />,
      },
      {
        title: "Bill",
        path: "bill",
        element: <BillPage />,
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
