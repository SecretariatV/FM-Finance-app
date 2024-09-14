import { CategoryFilter, SearchBar, SortFilter } from "@features/ui";
import S from "./index.module.scss";
import { Fragment, useEffect, useRef } from "react";
import { useApp } from "@contexts/appContext";
import { ITransactionType } from "@utils/typeUtils";
import clsx from "clsx";

const tempData: ITransactionType[] = [
  {
    avatar: "emma-richardson.jpg",
    name: "Emma Richardson",
    date: "19 Aug 2024",
    amount: 75.5,
    category: "General",
  },
  {
    avatar: "savory-bites-bistro.jpg",
    name: "Savory Bites Bistro",
    date: "19 Aug 2024",
    amount: -55.5,
    category: "Dining Out",
  },
  {
    avatar: "daniel-carter.jpg",
    name: "Daniel Carter",
    date: "18 Aug 2024",
    amount: -42.3,
    category: "General",
  },
  {
    avatar: "sun-park.jpg",
    name: "Sun Park",
    date: "1 Aug 2024",
    amount: 182.3,
    category: "General",
  },
  {
    avatar: "urban-services-hub.jpg",
    name: "Urban Services Hub",
    date: "11 Aug 2024",
    amount: 12.3,
    category: "General",
  },
  {
    avatar: "liam-hughes.jpg",
    name: "Liam Hughes",
    date: "15 Aug 2024",
    amount: -112.3,
    category: "Groceries",
  },
  {
    avatar: "lily-ramirez.jpg",
    name: "Lily Ramirez",
    date: "5 Aug 2024",
    amount: 72.3,
    category: "General",
  },
  {
    avatar: "ethan-clark.jpg",
    name: "Ethan Clark",
    date: "9 Aug 2024",
    amount: -172.3,
    category: "Dining Out",
  },
  {
    avatar: "james-thompson.jpg",
    name: "James Thompson",
    date: "9 Jun 2024",
    amount: -102.3,
    category: "Entertainment",
  },
  {
    avatar: "pixel-playground.jpg",
    name: "Pixel Playground",
    date: "17 Jun 2024",
    amount: -42.3,
    category: "Entertainment",
  },
  {
    avatar: "emma-richardson.jpg",
    name: "Emma Richardson",
    date: "22 Jun 2024",
    amount: -32.3,
    category: "Lifestyle",
  },
  {
    avatar: "swift-ride-share.jpg",
    name: "Delta Taxi",
    date: "2 Jun 2024",
    amount: -51.3,
    category: "Transportation",
  },
  {
    avatar: "sun-park.jpg",
    name: "Sun Park",
    date: "21 Jun 2024",
    amount: -11.3,
    category: "Shopping",
  },
  {
    avatar: "sebastian-cook.jpg",
    name: "Bravo Zen Spa",
    date: "7 Jun 2024",
    amount: -11.3,
    category: "Education",
  },
  {
    avatar: "spark-electric-solutions.jpg",
    name: "Liam Hughes",
    date: "5 Aug 2024",
    amount: -10.3,
    category: "Education",
  },
  {
    avatar: "pixel-playground.jpg",
    name: "Alpha Analytics",
    date: "5 Aug 2024",
    amount: 1900.3,
    category: "General",
  },
  {
    avatar: "william-harris.jpg",
    name: "Charlie Electric Company",
    date: "9 Aug 2024",
    amount: -100.3,
    category: "Bills",
  },
];

const TransactionPage = () => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const { setApp } = useApp();

  const closeCategories = () => {
    setApp((prevState) => ({ ...prevState, categoryOpen: false }));
  };

  const closeSots = () => {
    setApp((prevState) => ({ ...prevState, sortOpen: false }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        closeCategories();
      }

      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        closeSots();
      }
    };

    if (screenRef.current) {
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
          <SortFilter ref={sortRef} />
          <CategoryFilter ref={categoryRef} />
        </div>
        <table className={S.transactionTable}>
          <thead>
            <tr>
              <th>Recipient / Sender</th>
              <th>Category</th>
              <th>Transaction Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tempData.map((data, index) => (
              <Fragment key={index}>
                <tr>
                  <td className={S.transactionTable_avatar}>
                    <img
                      src={`./avatars/${data.avatar}`}
                      alt={`${data.name}s avatar`}
                    />
                  </td>
                  <td className={S.transactionTable_name}>{data.name}</td>
                  <td className={S.transactionTable_category}>
                    {data.category}
                  </td>
                  <td
                    className={clsx(
                      S.transactionTable_amount,
                      data.amount > 0 && S.green
                    )}
                  >
                    {data.amount < 0 ? "-" : "+"}${Math.abs(data.amount)}
                  </td>
                  <td className={S.transactionTable_date}>{data.date}</td>
                </tr>
                <div className={S.border} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default TransactionPage;
