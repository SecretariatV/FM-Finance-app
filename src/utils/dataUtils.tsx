import { lazy } from "react";
import { IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));

const ROUTER_DATA: IRouterType[] = [
  { title: "Main Layout", path: "/", element: <LazyMainLayout /> },
];

export { ROUTER_DATA };
