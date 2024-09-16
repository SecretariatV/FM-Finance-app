import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import logo from "@assets/logo.svg";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@features/ui";

export const RegisterModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [registerType, setRegisterType] = useState<boolean>(false);

  const handleToggleShow = () => {
    setShow(!show);
  };

  const handleLogin = () => {};

  const handleChangeType = () => {
    setRegisterType(!registerType);
  };

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <div className={S.root}>
      <div className={S.root_header}>
        <img src={logo} alt="Logo Image" />
      </div>
      <div className={S.wrapper}>
        <div className={S.login}>
          <p className={S.wrapper_header}>Login</p>
          <div className={S.wrapper_forms}>
            <div className={S.wrapper_form}>
              <label htmlFor="email-form">Email</label>
              <input type="text" id="email-form" />
            </div>
            <div className={S.wrapper_form}>
              <label htmlFor="password-form">Password</label>
              <input
                type={`${show ? "text" : "password"}`}
                id="password-form"
              />
              <Icon
                name="Eye"
                width="16"
                height="16"
                className={clsx(!show && S.show)}
                onClick={handleToggleShow}
              />
              <Icon
                name="Eyeslash"
                width="16"
                height="16"
                className={clsx(show && S.show)}
                onClick={handleToggleShow}
              />
            </div>
          </div>
          <div className={S.wrapper_buttons}>
            <Button title="Login" type="primary" onClick={handleLogin} />
            <Button
              title="Google"
              type="primary"
              onClick={handleGoogleRegister}
            />
          </div>
          <p className={S.note}>
            Need to create an account?{" "}
            <span>
              Sign Up{" "}
              <input
                type="checkbox"
                id="change-sign"
                checked={registerType}
                onClick={handleChangeType}
              />
            </span>
          </p>
        </div>
        <div className={S.sign}>
          <p className={S.wrapper_header}>Sign Up</p>
          <div className={S.wrapper_forms}>
            <div className={S.wrapper_form}>
              <label htmlFor="name-form">Name</label>
              <input type="text" id="name-form" />
            </div>
            <div className={S.wrapper_form}>
              <label htmlFor="email-form">Email</label>
              <input type="text" id="email-form" />
            </div>
            <div className={S.wrapper_form}>
              <label htmlFor="password-form">Create Password</label>
              <input
                type={`${show ? "text" : "password"}`}
                id="password-form"
              />
              <Icon
                name="Eye"
                width="16"
                height="16"
                className={clsx(!show && S.show)}
                onClick={handleToggleShow}
              />
              <Icon
                name="Eyeslash"
                width="16"
                height="16"
                className={clsx(show && S.show)}
                onClick={handleToggleShow}
              />
            </div>
          </div>
          <div className={S.wrapper_buttons}>
            <Button title="Login" type="primary" onClick={handleLogin} />
            <Button
              title="Google"
              type="primary"
              onClick={handleGoogleRegister}
            />
          </div>
          <p className={S.note}>
            Need to create an account?{" "}
            <span>
              Sign Up{" "}
              <input
                type="checkbox"
                id="change-sign"
                checked={registerType}
                onClick={handleChangeType}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
