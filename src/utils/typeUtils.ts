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

interface IAppProps {
  openNavbar: boolean;
}

export type {
  IRouterType,
  INavType,
  IAppProps,
  ISummaryType,
  IContentType,
  ITransactionType,
};
