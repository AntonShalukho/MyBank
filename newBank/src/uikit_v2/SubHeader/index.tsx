import { useLocation, useNavigate } from "react-router";

import { useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { accountsListSelector } from "redux/selectors/accoutsListSelector";

import { MAIN_PAGE_PATH } from "utils/variables";

import { BackButton } from "../BackButton";

import { getTitle, isMainPage } from "./subHeaderConfig";

import styles from "./SubHeader.module.css";

export const SubHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const intl = useIntl();
  const isEmptyList = useSelector(accountsListSelector);

  const handleBackButton = () => {
    if (isEmptyList) {
      navigate(MAIN_PAGE_PATH);
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {!isMainPage(pathname) && <BackButton onClick={handleBackButton} />}
      <h2 className={styles.subheader}>
        {intl.formatMessage({ id: getTitle(pathname, isEmptyList) })}
      </h2>
    </>
  );
};
