import { useApp } from "@contexts/appContext";
import S from "./index.module.scss";
import { ChangeEvent } from "react";
import { Icon } from "@assets/icon";

export const SearchBar = () => {
  const { app, setApp } = useApp();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setApp((prevState) => ({ ...prevState, searchInfo: e.target.value }));
  };

  return (
    <div className={S.root}>
      <input
        type="text"
        placeholder="Search transaction"
        value={app.searchInfo}
        onChange={handleChangeValue}
      />
      <Icon name="Magnifyingglass" width="16" height="16" />
    </div>
  );
};
