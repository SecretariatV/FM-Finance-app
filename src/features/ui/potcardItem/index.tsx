import { ISummaryType } from "@utils/typeUtils";
import S from "./index.module.scss";
import { FC } from "react";
import { formatValue } from "@utils/formatUtils";

interface IProps {
  data: ISummaryType;
}

export const PotcardItem: FC<IProps> = ({ data }) => {
  return (
    <div className={S.root}>
      <p>{data.title}</p>
      <span>{formatValue(data.value)}</span>
    </div>
  );
};
