import React from "react";
import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import {
  selectCityBanksAmount,
  selectFilteredBanks,
} from "../../../redux/selectors/mapSelectors";

import "./BanksNotFoundMessage.css";

export const BanksNotFoundMessage = () => {
  const totalBanksAmount = useSelector(selectCityBanksAmount);
  const filteredBanks = useSelector(selectFilteredBanks);
  return (
    <div className="not-found-container">
      {totalBanksAmount && !filteredBanks?.length ? (
        <FormattedMessage id="noFilteredBranches" />
      ) : (
        <FormattedMessage id="noBranches" />
      )}
    </div>
  );
};
