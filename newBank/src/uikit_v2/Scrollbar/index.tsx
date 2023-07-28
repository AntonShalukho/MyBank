import React, { FC, ReactNode, UIEvent, useState, useRef } from "react";

import classNames from "classnames";

import { useLocation } from "react-router";

import { isMainPage } from "../SubHeader/subHeaderConfig";

import styles from "./Scrollbar.module.css";

type ScrollbarType = {
  children: ReactNode;
};

export const Scrollbar: FC<ScrollbarType> = ({ children }) => {
  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState<number>(0);
  const scrollTop = useRef<number>(0);
  const { pathname } = useLocation();

  const handleScrollCounter = (e: UIEvent<HTMLDivElement>) => {
    scrollTop.current = (e.target as HTMLDivElement).scrollTop;
    if (scrollWrapRef.current?.offsetHeight) {
      const scrollHeight =
        (e.target as HTMLDivElement).scrollHeight -
        scrollWrapRef.current?.offsetHeight;
      const scrollHeightPercent = scrollHeight * 0.01;
      setThumbTop(scrollTop.current / scrollHeightPercent);
    }
  };

  return (
    <div className={styles.scroll_wrap} ref={scrollWrapRef}>
      <div className={styles.scroll_children} onScroll={handleScrollCounter}>
        {children}
      </div>
      <div
        className={classNames(styles.scroll, {
          [styles.mobile_view_on_main]: isMainPage(pathname),
        })}
      >
        <div className={styles.scroll_thumb} style={{ top: `${thumbTop}%` }} />
      </div>
    </div>
  );
};
