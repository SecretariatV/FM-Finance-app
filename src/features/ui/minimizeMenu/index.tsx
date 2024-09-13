import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import clsx from "clsx";
import { useApp } from "@contexts/appContext";

export const MinimizeMenu = () => {
  const { app, setApp } = useApp();

  const viewNav = () => {
    setApp((prevState) => ({
      ...prevState,
      openNavbar: !prevState.openNavbar,
    }));
  };

  return (
    <button
      className={clsx(S.root, !app.openNavbar && S.minimize)}
      onClick={viewNav}
    >
      <Icon width="24" height="24" name="Arrowfatlinesleft" />
      <h3>Minimize Menu</h3>
    </button>
  );
};
