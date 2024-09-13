import { MinimizeMenu, SidebarItem } from "@features/ui";
import S from "./index.module.scss";
import logo from "@assets/Logo.svg";
import miniLogo from "@assets/mini_logo.svg";
import { NAV_DATA } from "@utils/dataUtils";
import clsx from "clsx";
import { useApp } from "@contexts/appContext";

const Navbar = () => {
  const { app } = useApp();

  return (
    <nav className={clsx(S.root, !app.openNavbar && S.minimize)}>
      <div className={S.root_logo}>
        <img src={app.openNavbar ? logo : miniLogo} alt="logo image" />
      </div>
      <ul className={S.nav}>
        {NAV_DATA.map((item) => (
          <SidebarItem data={item} key={item.title} />
        ))}
      </ul>
      <MinimizeMenu />
    </nav>
  );
};

export default Navbar;
