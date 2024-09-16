import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  width: string;
  height: string;
  className?: string;
  onClick?: () => void;
}

export const Icon: FC<IProps> = ({
  name,
  width,
  height,
  className,
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      {Icons[name]()}
    </svg>
  );
};
