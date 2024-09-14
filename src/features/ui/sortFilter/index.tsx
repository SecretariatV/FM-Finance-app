import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { forwardRef, Fragment } from "react";
import { useApp } from "@contexts/appContext";
import { sorts } from "@utils/dataUtils";
import clsx from "clsx";

export const SortFilter = forwardRef<HTMLDivElement>((_, ref) => {
  const { app, setApp } = useApp();

  const handleChangeFilter = (value: string) => {
    setApp((prevState) => ({
      ...prevState,
      sortFilter: value,
      sortOpen: false,
    }));
  };

  const handleOpenFilter = () => {
    setApp((prevState) => ({
      ...prevState,
      sortOpen: !prevState.sortOpen,
    }));
  };

  return (
    <div className={S.root} ref={ref}>
      <p className={S.root_title}>Sort by</p>
      <button type="button" onClick={handleOpenFilter} className={S.sortButton}>
        <p className={S.buttonTitle}>
          {sorts.filter((data) => data.value === app.sortFilter)[0].title}
        </p>
        <Icon name="Sort" width="20" height="20" className={S.miniIcon} />
        <Icon
          name="Caretdown"
          width="16"
          height="16"
          className={clsx(S.basicIcon, app.sortOpen && S.rotate)}
        />
      </button>
      <div className={clsx(S.list, app.sortOpen && S.open)}>
        <p className={S.list_title}>Sort by</p>
        <div className={clsx(S.list_border, S.first)} />
        {sorts.map((data, index) => (
          <Fragment key={index}>
            <button
              type="button"
              className={clsx(app.sortFilter === data.value && S.active)}
              onClick={() => handleChangeFilter(data.value)}
            >
              {data.title}
            </button>
            <div className={S.list_border} />
          </Fragment>
        ))}
      </div>
    </div>
  );
});
