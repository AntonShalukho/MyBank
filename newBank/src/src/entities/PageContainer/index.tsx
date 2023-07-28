import classNames from "classnames";

import { isEmpty } from "ramda";

import { useLocation } from "react-router";

// TODO will import after rewriting to new architecture
// import { Advertisement } from "../MainPage/Advertisement";

import { useAdvertisement } from "src/shared/lib/hooks/useAdvertisement";

import { isMainPage } from "src/shared/lib/isMainPage";

import { PageContainerType } from "./types";

import styles from "./PageContainer.module.scss";

export const PageContainer: React.FC<PageContainerType> = ({
  isFolded,
  children,
}) => {
  const { advertisements } = useAdvertisement();
  const { pathname } = useLocation();

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_with_adv]: isFolded && !isEmpty(advertisements),
        },
        {
          [styles.wrapper_without_adv]: isEmpty(advertisements) && isFolded,
        },
        {
          [styles.wrapper_ext_with_adv]: !isEmpty(advertisements) && !isFolded,
        },
        {
          [styles.wrapper_ext_without_adv]:
            !isFolded && isEmpty(advertisements),
        },
        {
          [styles.wrapper_products]: !isMainPage(pathname) && isFolded,
        },
        {
          [styles.wrapper_products_ext]: !isMainPage(pathname) && !isFolded,
        }
      )}
    >
      {children}
      {/* {isMainPage(pathname) &&  <Advertisement  />} */}
    </div>
  );
};
