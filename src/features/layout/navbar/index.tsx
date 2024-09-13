import S from "./index.module.scss";
import logo from "@assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className={S.root}>
      <div className={S.root_logo}>
        <img src={logo} alt="logo image" />
      </div>
    </nav>
  );
};

export default Navbar;
