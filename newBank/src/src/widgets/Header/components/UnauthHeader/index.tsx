import React, { useRef, useState } from "react";

import { useIntl } from "react-intl";

import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../../../shared/ui/Button";

import { MainLogoBlock } from "../../../../entities/MainLogoBlock";

import { PhoneIcon } from "../../assets/icons";

import { LOG_IN_PATH } from "../../../../shared/consts";

import { ContactDropDown } from "../../../../entities/ContactDropDown";

import { isRegistrationProcess } from "../../lib/isRegistration";

import { BurgerMenu } from "../BurgerMenu";

import { Cross } from "../../../../shared/ui/Cross";

import { CancelRegistrationPopup } from "../../../CancelRegistrationPopup";

import styles from "../../Header.module.scss";

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
          onClick={() => handleClick(LOG_IN_PATH)}
        >
          {pathname === "/log-in"
            ? intl.formatMessage({ id: "signUp" })
            : intl.formatMessage({ id: "logIn" })}
        </Button>
        <div className={styles.contact_us_btn}>
          <Button
            className={styles.greyBtn}
            variant="secondarySmall"
            onClick={handleDropDown}
          >
            <PhoneIcon className={styles.icon} />
            {intl.formatMessage({ id: "widget_contactUs" })}
          </Button>
        </div>
      </div>
      <Cross handleClick={handleBurger} variant="burger" isOpen={isBurger} />
      {isDropDown && <ContactDropDown handleDropDown={handleDropDown} />}
      {isBurger && <BurgerMenu handleDropDown={handleDropDown} />}
      {isLeaveRegistration && (
        <CancelRegistrationPopup
          onClose={onClosePopup}
          handleSideEffects={handleSideEffects}
        />
      )}
    </div>
  );
};
