import React from "react";

import classNames from "classnames";

import { useIntl } from "react-intl";

import "./CurrencyBlockStyles.css";

type CurrencyBlockProps = {
  abbr?: string;
  name: string;
  icon: JSX.Element;
  textDirection?: string;
};

export const CurrencyBlock = ({
  abbr,
  icon,
  name,
  textDirection,
}: CurrencyBlockProps) => {
  const intl = useIntl();

  return (
    <div className="currency-block">
      {icon}
      <div className={classNames("currency-block-names", textDirection)}>
        <p>
          <b>{abbr}</b>
        </p>
        <p className="currency-name-text">{intl.formatMessage({ id: name })}</p>
      </div>
    </div>
  );
};
