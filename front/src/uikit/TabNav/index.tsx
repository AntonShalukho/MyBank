import React, { ReactNode } from "react";

import classNames from "classnames";

import { FormattedMessage } from "react-intl";

import { Button } from "../Button";

import "./TabsStyles.css";

interface ITabNavProps {
  className?: string;
  tabs: string[];
  selected: string;
  setSelected: (uniqKey: string) => void;
  children: ReactNode | undefined;
}

export const TabNav = ({
  children,
  className,
  tabs,
  selected,
  setSelected,
}: ITabNavProps) => (
  <>
    <ul className="tabNav">
      {tabs.map((tab) => {
        const active = tab === selected ? "active" : "";
        return (
          <li
            className={classNames(`tabNav__item ${active}`, className)}
            key={tab}
          >
            <Button
              variant="navigation"
              onClick={() => setSelected(tab)}
              onKeyDown={() => setSelected(tab)}
            >
              <FormattedMessage id={tab} />
            </Button>
          </li>
        );
      })}
    </ul>
    {children}
  </>
);
