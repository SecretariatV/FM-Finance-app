import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

interface IProps {
  type: "primary" | "secondary" | "tertiary" | "destroy";
  title: string;
  className?: string;
  onClick: () => void;
}

export const Button: FC<IProps> = ({ type, title, className, onClick }) => {
  return (
    <button
      type="button"
      className={clsx(
        S.root,
        type === "primary"
          ? S.primary
          : type === "secondary"
          ? S.secondary
          : type === "tertiary"
          ? S.tertiary
          : S.destroy,
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
