import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  title: string;
}

export const TransactionlistItem: FC<IProps> = ({ title }) => {
  return (
    <div className={S.root}>
      <div className={S.root_header}>
        <div className={S.alam} />
        <p className={S.root_title}>{title}</p>
      </div>
    </div>
  );
};
