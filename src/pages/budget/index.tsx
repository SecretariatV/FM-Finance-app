import { Button, SpendingItem, TransactionlistItem } from "@features/ui";
import S from "./index.module.scss";
import clsx from "clsx";
import { ISummerType } from "@utils/typeUtils";

const tempData: ISummerType[] = [
  { title: "Bills", value: 250, total: 750 },
  { title: "Dinning Out", value: 67, total: 750 },
  { title: "Personal Care", value: 65, total: 100 },
  { title: "Entertainment", value: 25, total: 50 },
];

const BudgetPage = () => {
  const handleCreateBudget = () => {};

  return (
    <aside className={S.root}>
      <div className={S.root_header}>
        <p className={S.root_title}>Budgets</p>
        <Button
          type="primary"
          title="+ Add New Budget"
          onClick={handleCreateBudget}
        />
      </div>
      <div className={S.wrapper}>
        <div className={clsx(S.summary, S.card)}>
          <div className={S.summary_chart}></div>
          <div className={S.summary_infos}>
            <p className={S.summary_title}>Spending Summary</p>
            <div className={S.summary_list}>
              {tempData.map((data, index) => (
                <SpendingItem key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <TransactionlistItem title="Entertainment" />
        <TransactionlistItem title="Bills" />
        <TransactionlistItem title="Dining Out" />
        <TransactionlistItem title="Personal Care" />
      </div>
    </aside>
  );
};

export default BudgetPage;
