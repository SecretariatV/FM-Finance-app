import { ISummerType } from "@utils/typeUtils";
import S from "./index.module.scss";
import { FC } from "react";
import { formatValue } from "@utils/formatUtils";

interface IProps {
  data: ISummerType;
}

export const SpendingItem: FC<IProps> = ({ data }) => {
  return (
    <>
      <div className={S.root}>
        <p className={S.root_title}>{data.title}</p>
        <p className={S.root_value}>${formatValue(data.value)}</p>
        <span>of ${formatValue(data.total)}</span>
      </div>
      <div className={S.border}></div>
    </>
  );
};
