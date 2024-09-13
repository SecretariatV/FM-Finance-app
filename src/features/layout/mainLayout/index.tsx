import LoadingPage from "@pages/loading";
import S from "./index.module.scss";
import Navbar from "../navbar";
import Header from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <LoadingPage />
      <div className={S.root}>
        <Navbar />
        <div className={S.wrapper}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
