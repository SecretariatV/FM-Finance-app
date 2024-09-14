import { FC, ReactNode } from "react";
import S from "./index.module.scss";
import clsx from "clsx";
import { Icon } from "@assets/icon";

interface IProps {
  title: string;
  hyperLink: string;
  hyperLinkText: string;
  type: "list" | "block";
  children: ReactNode;
}

export const ContentCard: FC<IProps> = ({
  title,
  hyperLink,
  hyperLinkText,
  type,
  children,
}) => {
  return (
    <div className={clsx(S.root, type === "list" ? S.list : S.block)}>
      <div className={S.root_header}>
        <p>{title}</p>
        <a href={`/${hyperLink}`}>
          {hyperLinkText}
          <Icon name="Caretright" width="12" height="12" />
        </a>
      </div>
      {children}
    </div>
  );
};
