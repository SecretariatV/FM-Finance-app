import { IconNames } from "@assets/icon/icons";

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface INavType {
  title: string;
  icon: IconNames;
  path: string;
}

interface ISummaryType {
  title: string;
  value: number;
}

interface IContentType {
  title: string;
  hyperLink: string;
  hyperLinkText: string;
  type: "list" | "block";
}

interface ITransactionType {
  avatar: string;
  name: string;
  date: string;
  amount: number;
}

interface ICategoryType {
  title:
    | "All Transactions"
    | "Entertainment"
    | "Bills"
    | "Groceries"
    | "Dining Out"
    | "Transportation"
    | "Personal Care"
    | "Education"
    | "Lifestyle"
    | "Shopping"
    | "General";
  value:
    | "all"
    | "entertainment"
    | "bills"
    | "groceries"
    | "dining"
    | "transportation"
    | "personal"
    | "education"
    | "lifestyle"
    | "shopping"
    | "general";
}

interface ISortType {
  title: "Latest" | "Oldest" | "A to Z" | "Z to A" | "Highest" | "Lowest";
  value: "latest" | "oldest" | "a-z" | "z-a" | "highest" | "lowest";
}

interface IAppProps {
  openNavbar: boolean;
  searchInfo: string | undefined;
  categoryFilter: string;
  categoryOpen: boolean;
  sortFilter: string;
  sortOpen: boolean;
}

export type {
  IRouterType,
  INavType,
  IAppProps,
  ISummaryType,
  IContentType,
  ITransactionType,
  ICategoryType,
  ISortType,
};
