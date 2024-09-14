import { ISummaryType } from "@utils/typeUtils";
import S from "./index.module.scss";
import { FC } from "react";
import { formatValue } from "@utils/formatUtils";
import clsx from "clsx";

interface IProps {
  data: ISummaryType;
  active: boolean;
}

export const SummaryItem: FC<IProps> = ({ data, active }) => {
  return (
    <div className={clsx(S.root, active && S.active)}>
      <p>{data.title}</p>
      <span>${formatValue(data.value)}</span>
    </div>
  );
};
