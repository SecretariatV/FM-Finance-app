import { FC } from "react";
import S from "./index.module.scss";
import { IViewTransactionType } from "@utils/typeUtils";
import clsx from "clsx";

interface IProps {
  data: IViewTransactionType;
  index: number;
  total: number;
}

export const TransactioncardItem: FC<IProps> = ({ data, index, total }) => {
  return (
    <>
      <div
        className={clsx(
          S.root,
          index !== 0 && S.top,
          index !== total - 1 && S.bottom
        )}
      >
        <img src={`./avatars/${data.avatar}`} alt={`${data.name}s avatar`} />
        <p>{data.name}</p>
        <div className={S.root_info}>
          <p className={data.amount > 0 ? S.positive : ""}>
            {data.amount < 0 ? "-" : ""}${Math.abs(data.amount)}
          </p>
          <span>{data.date}</span>
        </div>
      </div>
      <div className={clsx(S.border, index !== total - 1 && S.active)} />
    </>
  );
};
