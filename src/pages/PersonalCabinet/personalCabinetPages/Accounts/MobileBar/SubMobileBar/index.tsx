import React from "react";

import { NavLink } from "react-router-dom";

import { FormattedMessage, useIntl } from "react-intl";

import { SVGMobileBar } from "../SVGMobileBar";

import { MobileDataItem } from "../MobileBarData";

import { Button } from "../../../../../../uikit/Button";

import styles from "./SubMobileBar.module.css";

type SubMobileBarType = {
  item: MobileDataItem;
  isMoreBtnClick?: boolean;
  setIsMoreBtnClick?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubMobileBar = ({
  item,
  setIsMoreBtnClick,
  isMoreBtnClick,
}: SubMobileBarType) => {
  const intl = useIntl();
  const { path, title } = item;
  const linkName = intl.formatMessage({ id: title });
  const Icon = SVGMobileBar[item.title];
  const handleClick = () => {
    // @ts-expect-error
    setIsMoreBtnClick(!isMoreBtnClick);
  };

  return (
    <>
      {title === "more" ? (
        <Button className={styles.btn} onClick={handleClick}>
          <Icon className={styles.icon} />
          {!isMoreBtnClick ? (
            <FormattedMessage id="more" />
          ) : (
            <FormattedMessage id="less" />
          )}
        </Button>
      ) : (
        <NavLink to={path} className={styles.link}>
          <div className={styles.container}>
            <Icon className={styles.icon} />
            <div className={styles.nameLink}>{linkName}</div>
          </div>
        </NavLink>
      )}
    </>
  );
};
