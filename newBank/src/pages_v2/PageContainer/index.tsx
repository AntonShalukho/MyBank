import React, { useEffect, useState } from "react";

import classNames from "classnames";

import { length } from "ramda";

import { useLocation } from "react-router";

import { getAdvertisementProducts } from "../../services/api/getAdvertisementProducts";

import { Advertisement } from "../MainPage/Advertisement";

import { isMainPage } from "../../uikit_v2/SubHeader/subHeaderConfig";

import styles from "./PageContainer.module.css";

type PageContainerType = {
  isCollapsed: boolean;
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerType> = ({
  isCollapsed,
  children,
}) => {
  const [isAdvertisementBlock, setIsAdvertisementBlock] =
    useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    getAdvertisementProducts().then((data) => {
      setIsAdvertisementBlock(length(data) > 0);
    });
  }, []);

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_with_adv]: isCollapsed && isAdvertisementBlock,
        },
        {
          [styles.wrapper_without_adv]: !isAdvertisementBlock && isCollapsed,
        },
        {
          [styles.wrapper_ext_with_adv]: isAdvertisementBlock && !isCollapsed,
        },
        {
          [styles.wrapper_ext_without_adv]:
            !isCollapsed && !isAdvertisementBlock,
        },
        {
          [styles.wrapper_products]: !isMainPage(pathname) && isCollapsed,
        },
        {
          [styles.wrapper_products_ext]: !isMainPage(pathname) && !isCollapsed,
        }
      )}
    >
      {children}
      {isMainPage(pathname) && isAdvertisementBlock && <Advertisement />}
    </div>
  );
};
