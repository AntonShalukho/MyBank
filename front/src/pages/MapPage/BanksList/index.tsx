import React, { memo } from "react";

import { NormalizedCityDataType } from "../../../redux/types/mapTypes";

import { Bank } from "../Bank";

import "./BankListStyles.css";

export type BankListProps = {
  banks: NormalizedCityDataType;
};

export const BanksList = memo(({ banks }: BankListProps) => (
  <div className="banks-list-container">
    {banks.map((bank) => (
      <Bank bank={bank} key={bank.id} />
    ))}
  </div>
));
