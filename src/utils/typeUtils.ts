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

interface IAppProps {
  openNavbar: boolean;
}

export type { IRouterType, INavType, IAppProps };
