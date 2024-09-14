import { INormalInfoType, IViewTransactionType } from "@utils/typeUtils";
import S from "./index.module.scss";
import {
  BudgetcardItem,
  ContentCard,
  PotcardItem,
  SummaryItem,
  TransactioncardItem,
} from "@features/ui";
import memoryImg from "@assets/memory.svg";
import { BillItem } from "@features/ui/billItem";

const tempData: INormalInfoType[] = [
  { title: "Current Balance", value: 4836.0 },
  { title: "Income", value: 3814.25 },
  { title: "Expenses", value: 1700.5 },
];

const tempPotData: INormalInfoType[] = [
  { title: "Savings", value: 159 },
  { title: "Gift", value: 40 },
  { title: "Concert Ticket", value: 110 },
  { title: "New Laptop", value: 10 },
];

const tempBudgetData: INormalInfoType[] = [
  { title: "Entertainment", value: 50 },
  { title: "Bills", value: 750 },
  { title: "Dining Out", value: 75 },
  { title: "Personal Care", value: 100 },
];

const tempTransactionData: IViewTransactionType[] = [
  {
    avatar: "emma-richardson.jpg",
    name: "Emma Richardson",
    date: "19 Aug 2024",
    amount: 75.5,
  },
  {
    avatar: "savory-bites-bistro.jpg",
    name: "Savory Bites Bistro",
    date: "19 Aug 2024",
    amount: -55.5,
  },
  {
    avatar: "daniel-carter.jpg",
    name: "Daniel Carter",
    date: "19 Aug 2024",
    amount: -42.3,
  },
  {
    avatar: "sun-park.jpg",
    name: "Sun Park",
    date: "17 Aug 2024",
    amount: 120.0,
  },
  {
    avatar: "urban-services-hub.jpg",
    name: "Urban Services Hub",
    date: "17 Aug 2024",
    amount: -65.0,
  },
];

const tempBillData: INormalInfoType[] = [
  { title: "Paid Bills", value: 190 },
  { title: "Total Upcoming", value: 194.98 },
  { title: "Due Soon", value: 59.98 },
];

const HomePage = () => {
  return (
    <aside className={S.root}>
      <p>Overview</p>
      <div className={S.root_values}>
        {tempData.map((data, index) => (
          <SummaryItem data={data} active={index === 0} key={index} />
        ))}
      </div>
      <div className={S.root_content}>
        <div className={S.root_content_list}>
          <ContentCard
            title="Pots"
            hyperLink="pot"
            hyperLinkText="See Details"
            type="block"
          >
            <div className={S.potCard}>
              <div className={S.potCard_total}>
                <img src={memoryImg} alt="Total Save Image" />
                <p>Total Saved</p>
                <span>$850</span>
              </div>
              <div className={S.potCard_list}>
                {tempPotData.map((data, index) => (
                  <PotcardItem data={data} key={index} />
                ))}
              </div>
            </div>
          </ContentCard>
          <ContentCard
            title="Transactions"
            hyperLink="transaction"
            hyperLinkText="View All"
            type="list"
          >
            <div className={S.trnasactionCard}>
              {tempTransactionData.map((data, index) => (
                <TransactioncardItem
                  data={data}
                  index={index}
                  total={tempTransactionData.length}
                  key={index}
                />
              ))}
            </div>
          </ContentCard>
        </div>
        <div className={S.root_content_list}>
          <ContentCard
            title="Budgets"
            hyperLink="budget"
            hyperLinkText="See Details"
            type="block"
          >
            <div className={S.budgetCard}>
              <div className={S.budgetCard_chart}>
                <img src={memoryImg} alt="Total Save Image" />
                <p>Total Saved</p>
                <span>$850</span>
              </div>
              <div className={S.budgetCard_list}>
                {tempBudgetData.map((data, index) => (
                  <BudgetcardItem data={data} key={index} />
                ))}
              </div>
            </div>
          </ContentCard>
          <ContentCard
            title="Recurring Bills"
            hyperLink="bill"
            hyperLinkText="See Details"
            type="list"
          >
            <div className={S.billCard}>
              {tempBillData.map((data, index) => (
                <BillItem data={data} key={index} />
              ))}
            </div>
          </ContentCard>
        </div>
      </div>
    </aside>
  );
};

export default HomePage;
