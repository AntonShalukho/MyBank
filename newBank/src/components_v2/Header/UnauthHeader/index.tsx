import React, { useRef, useState } from "react";

import { useIntl } from "react-intl";

import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../../uikit_v2/Button";

import { MainLogoBlock } from "../../Sidebar/MainLogoBlock";

import { PhoneIcon } from "../../Icon";

import { LOG_IN_PATH, SIGN_UP_PATH } from "../../../utils/variables";

import { ContactDropDown } from "./ContactDropDown";

import { isRegistrationProcess } from "./isRegistration";

import { Popup } from "../../Popup";

import { PopupContent } from "../../../pages_v2/WelcomePage/Registration/ProgressBar/PopupContent";

import { BurgerMenu } from "./BurgerMenu";

import { Cross } from "../../../uikit_v2/Cross";

import styles from "../Header.module.css";

export const UnauthHeader = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isBurger, setIsBurger] = useState<boolean>(false);
  const [isLeaveRegistration, setIsLeaveRegistration] =
    useState<boolean>(false);
  const isLogoClick = useRef<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();

  const onClosePopup = () => {
    setIsLeaveRegistration(false);
  };

  const handleClick = (path: string) => {
    isLogoClick.current = path === "/";
    if (isRegistrationProcess(pathname)) {
      setIsLeaveRegistration(true);
    } else {
      navigate(path);
    }
  };

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleBurger = () => {
    setIsBurger(!isBurger);
  };

  const handleSideEffects = () => {
    navigate(isLogoClick.current ? "/" : LOG_IN_PATH);
  };

  return (
    <div className={styles.wrapper_without_auth}>
      {
        // eslint-disable-next-line
        <div className={styles.logo} onClick={() => handleClick("/")}>
          <MainLogoBlock className={styles.logoBlock} isSidebarOpen={true} />
        </div>
      }
      <div className={styles.btn_wrapper}>
        <Button
          variant="primarySmall"
          className={styles.login_btn}
          onClick={() =>
            handleClick(pathname === LOG_IN_PATH ? SIGN_UP_PATH : LOG_IN_PATH)
          }
        >
          {pathname === LOG_IN_PATH
            ? intl.formatMessage({ id: "signUp" })
            : intl.formatMessage({ id: "logInTitle" })}
        </Button>
        <div className={styles.contact_us_btn}>
          <Button
            className={styles.greyBtn}
            variant="secondarySmall"
            onClick={handleDropDown}
          >
            <PhoneIcon className={styles.icon} />
            {intl.formatMessage({ id: "accountModalButton" })}
          </Button>
        </div>
      </div>
      <Cross handleClick={handleBurger} variant="burger" isOpen={isBurger} />
      {isDropDown && <ContactDropDown handleDropDown={handleDropDown} />}
      {isBurger && (
        <BurgerMenu
          handleBurger={handleBurger}
          handleDropDown={handleDropDown}
        />
      )}
      {isLeaveRegistration && (
        <Popup className={styles.backdrop}>
          <PopupContent
            onClose={onClosePopup}
            handleSideEffects={handleSideEffects}
          />
        </Popup>
      )}
    </div>
  );
};
