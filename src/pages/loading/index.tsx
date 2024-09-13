import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

interface IProps {
  effect: boolean;
}

const LoadingPage: FC<IProps> = ({ effect }) => {
  return (
    <div className={clsx(S.root, effect && S.anim)} role="alert">
      <p className="hidden">Loading, please wait...</p>
      <h1>Personal Finance App</h1>
    </div>
  );
};

export default LoadingPage;
