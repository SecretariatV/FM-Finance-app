import { ISummaryType } from "@utils/typeUtils";
import S from "./index.module.scss";
import { FC } from "react";

interface IProps {
  data: ISummaryType;
}

export const BillItem: FC<IProps> = ({ data }) => {
  return (
    <div className={S.root}>
      <p>{data.title}</p>
      <span>${data.value}</span>
    </div>
  );
};
