import { useIntl } from "react-intl";

import { useLocation, useNavigate } from "react-router";

import classNames from "classnames";

import { LOG_IN_PATH, SIGN_UP_PATH } from "../../../../utils/variables";

import styles from "./BurgerMenu.module.css";

type PropsType = {
  handleDropDown: () => void;
  handleBurger: () => void;
};

export const BurgerMenu = ({ handleDropDown, handleBurger }: PropsType) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLoginClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstBlock}>
        <button
          className={styles.link}
          type="button"
          onClick={() =>
            handleLoginClick(
              pathname === "/log-in" ? SIGN_UP_PATH : LOG_IN_PATH
            )
          }
        >
          {pathname === "/log-in"
            ? intl.formatMessage({ id: "signUp" })
            : intl.formatMessage({ id: "logInTitle" })}
        </button>
      </div>
      <hr className={styles.dr} />
      <button
        className={classNames(styles.secondBlock, styles.link)}
        type="button"
        onClick={handleDropDown}
      >
        {intl.formatMessage({ id: "accountModalButton" })}
      </button>
    </div>
  );
};
