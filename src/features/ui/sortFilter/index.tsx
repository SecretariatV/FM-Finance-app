import { Icon } from "@assets/icon";
import S from "./index.module.scss";

export const SortFilter = () => {
  return (
    <div className={S.root}>
      <p>Sort by</p>
      <button type="button">
        <Icon name="Sort" width="20" height="20" />
      </button>
    </div>
  );
};
