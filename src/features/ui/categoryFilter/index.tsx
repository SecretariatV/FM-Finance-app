import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { categories } from "@utils/dataUtils";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";
import { forwardRef, Fragment } from "react";

export const CategoryFilter = forwardRef<HTMLDivElement>((_, ref) => {
  const { app, setApp } = useApp();

  const handleChangeFilter = (value: string) => {
    setApp((prevState) => ({
      ...prevState,
      categoryFilter: value,
      categoryOpen: false,
    }));
  };

  const handleOpenFilter = () => {
    setApp((prevState) => ({
      ...prevState,
      categoryOpen: !prevState.categoryOpen,
    }));
  };

  return (
    <div className={S.root} ref={ref}>
      <p className={S.root_title}>Category</p>
      <button
        type="button"
        onClick={handleOpenFilter}
        className={S.categoryButton}
      >
        <p className={S.buttonTitle}>
          {
            categories.filter((data) => data.value === app.categoryFilter)[0]
              .title
          }
        </p>
        <Icon name="Filter" width="20" height="20" className={S.miniIcon} />
        <Icon
          name="Caretdown"
          width="16"
          height="16"
          className={clsx(S.basicIcon, app.categoryOpen && S.rotate)}
        />
      </button>
      <div className={clsx(S.list, app.categoryOpen && S.open)}>
        <p className={S.list_title}>Category</p>
        <div className={S.list_border} />
        {categories.map((data, index) => (
          <Fragment key={index}>
            <button
              type="button"
              className={clsx(app.categoryFilter === data.value && S.active)}
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
