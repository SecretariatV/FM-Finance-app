import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  color: string;
  width: string;
  height: string;
}

export const Icon: FC<IProps> = ({ name, color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name](color)}
    </svg>
  );
};
