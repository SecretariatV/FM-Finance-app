import { lazy } from "react";
import { ICategoryType, INavType, IRouterType } from "./typeUtils";
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

const categories: ICategoryType[] = [
  { title: "All Transactions", value: "all" },
  { title: "Entertainment", value: "entertainment" },
  { title: "Bills", value: "bills" },
  { title: "Groceries", value: "groceries" },
  { title: "Dining Out", value: "dining" },
  { title: "Transportation", value: "transportation" },
  { title: "Personal Care", value: "personal" },
  { title: "Education", value: "education" },
  { title: "Lifestyle", value: "lifestyle" },
  { title: "Shopping", value: "shopping" },
  { title: "General", value: "general" },
];

const sorts = [
  { title: "Latest", value: "latest" },
  { title: "Oldest", value: "oldest" },
  { title: "A to Z", value: "a-z" },
  { title: "Z to A", value: "z-a" },
  { title: "Highest", value: "highest" },
  { title: "Lowest", value: "lowest" },
];

export { ROUTER_DATA, NAV_DATA, categories, sorts };
