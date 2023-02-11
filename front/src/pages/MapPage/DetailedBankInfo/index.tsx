import React, { Dispatch } from "react";

import classNames from "classnames";

import { FormattedMessage } from "react-intl";

import { filtersData } from "../MapFilters/filtersData";

import { ServicesList } from "../ServicesList";

import { WorkingHours } from "../WorkingHours";

import { Button } from "../../../uikit/Button";

import { BankType } from "../../../redux/types/mapTypes";

import "./DetailedBankInfoStyles.css";

export type DetailedBankInfoProps = {
  bank: BankType;
};

export const DetailedBankInfo = ({ bank }: DetailedBankInfoProps) => (
  <div className="detailed-info-container">
    <div className="text-info-container">
      <WorkingHours bank={bank} />
      <ServicesList bank={bank} filtersList={filtersData[0]} />
      <ServicesList bank={bank} filtersList={filtersData[2]} />
    </div>
    <div className="route-button-container">
      <a
        href={`https://maps.google.com/?q=${bank.latitude},${bank.longitude}`}
        rel="noopener noreferrer"
      >
        <Button variant="form" className="sticky-button">
          <FormattedMessage id="buildRoute" />
        </Button>
      </a>
    </div>
  </div>
);
