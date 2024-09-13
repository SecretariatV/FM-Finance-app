import { FC, useEffect, useState } from "react";
import S from "./index.module.scss";
import { INavType } from "@utils/typeUtils";
import { Icon } from "@assets/icon";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  data: INavType;
}

export const SidebarItem: FC<IProps> = ({ data }) => {
  const { app } = useApp();
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/")[1] === data.path) {
      setActive(true);
    }
  }, [location]);

  const changeLink = () => {
    navigate(data.path);
  };

  return (
    <li
      className={clsx(
        S.root,
        !app.openNavbar && S.minimize,
        active && S.active
      )}
      onClick={changeLink}
    >
      <Icon name={data.icon} width="24" height="24" />
      <h3>{data.title}</h3>
    </li>
  );
};
