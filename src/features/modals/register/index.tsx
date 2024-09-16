import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import logo from "@assets/logo.svg";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import { Button } from "@features/ui";
import axios from "axios";

export const RegisterModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [registerType, setRegisterType] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<{
    email: string | undefined;
    password: string | undefined;
    username: string | undefined;
    useremail: string | undefined;
    userpassword: string | undefined;
  }>({
    email: undefined,
    password: undefined,
    username: undefined,
    useremail: undefined,
    userpassword: undefined,
  });

  const handleToggleShow = () => {
    setShow(!show);
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:4000/auth/login", {
      email: userInfo.email,
      password: userInfo.password,
    });
  };

  const handleRegister = () => {};

  const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterType(e.target.checked);
  };

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement>,
    type: keyof typeof userInfo
  ) => {
    e.preventDefault();

    setUserInfo((prevState) => ({ ...prevState, [type]: e.target.value }));
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
            <div className={clsx(S.wrapper_form, userInfo.email && S.active)}>
              <label htmlFor="email-form">Email</label>
              <input
                type="text"
                id="email-form"
                value={userInfo.email || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(e, "email")
                }
              />
            </div>
            <div
              className={clsx(S.wrapper_form, userInfo.password && S.active)}
            >
              <label htmlFor="password-form">Password</label>
              <input
                type={`${show ? "text" : "password"}`}
                id="password-form"
                value={userInfo.password || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(e, "password")
                }
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
                onChange={handleChangeType}
              />
            </span>
          </p>
        </div>
      </div>
      <div className={S.wrapper}>
        <div className={S.sign}>
          <p className={S.wrapper_header}>Sign Up</p>
          <div className={S.wrapper_forms}>
            <div
              className={clsx(S.wrapper_form, userInfo.username && S.active)}
            >
              <label htmlFor="user-name-form">Name</label>
              <input
                type="text"
                id="user-name-form"
                value={userInfo.username || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(e, "username")
                }
              />
            </div>
            <div
              className={clsx(S.wrapper_form, userInfo.useremail && S.active)}
            >
              <label htmlFor="user-email-form">Email</label>
              <input
                type="text"
                id="user-email-form"
                value={userInfo.useremail || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(e, "useremail")
                }
              />
            </div>
            <div
              className={clsx(
                S.wrapper_form,
                userInfo.userpassword && S.active
              )}
            >
              <label htmlFor="user-password-form">Create Password</label>
              <input
                type={`${show ? "text" : "password"}`}
                id="user-password-form"
                value={userInfo.userpassword || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(e, "userpassword")
                }
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
            <Button title="Login" type="primary" onClick={handleRegister} />
            <Button
              title="Google"
              type="primary"
              onClick={handleGoogleRegister}
            />
          </div>
          <p className={S.note}>
            Already have an account?{" "}
            <span>
              Login{" "}
              <input
                type="checkbox"
                id="change-sign"
                checked={registerType}
                onChange={handleChangeType}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
