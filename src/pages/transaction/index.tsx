import { CategoryFilter, SearchBar, SortFilter } from "@features/ui";
import S from "./index.module.scss";
import { useEffect, useRef } from "react";
import { useApp } from "@contexts/appContext";

const TransactionPage = () => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const { app, setApp } = useApp();

  const closeFilter = () => {
    setApp((prevState) => ({ ...prevState, categoryOpen: false }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        closeFilter();
      }
    };

    if (screenRef.current) {
      console.log("this filter");
      screenRef.current.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (screenRef.current) {
        screenRef.current.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [screenRef]);

  return (
    <aside className={S.root} ref={screenRef}>
      <p className={S.root_title}>Transactions</p>
      <div className={S.wrapper}>
        <div className={S.wrapper_header}>
          <SearchBar />
          <SortFilter />
          <CategoryFilter ref={categoryRef} />
        </div>
      </div>
    </aside>
  );
};

export default TransactionPage;
