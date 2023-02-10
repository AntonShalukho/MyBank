import React from "react";

import { useIntl } from "react-intl";

import { NavLink } from "react-router-dom";

import {
  PhoneRecharge,
  TransferToCard,
  Utilities,
  CurrencyExchangeIcon,
  Plus,
} from "../../../components/Icons";

import "./ServicesStyles.css";

type ServicesItemType = {
  icon: JSX.Element;
  title: string;
};

const services: ServicesItemType[] = [
  {
    icon: <PhoneRecharge />,
    title: "phoneRecharge",
  },
  {
    icon: <TransferToCard />,
    title: "transferToCard",
  },
  {
    icon: <Utilities />,
    title: "utilities",
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: "currencyExchangeBtn",
  },
  {
    icon: <Plus />,
    title: "add",
  },
];

export const Services = () => {
  const intl = useIntl();

  return (
    <div className="featured-services-wrapper">
      {services.map((item) => (
        <NavLink key={item.title} className="featured-services-item" to="">
          <div className="featured-services-icon">{item.icon}</div>
          <div className="featured-services-title">
            {intl.formatMessage({ id: item.title })}
          </div>
        </NavLink>
      ))}
    </div>
  );
};
