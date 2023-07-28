import React, { KeyboardEventHandler, useEffect, useRef } from "react";

import classNames from "classnames";

import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import {
  calculateDistance,
  getCurrentWortkingTime,
  isBankOpen,
} from "../../../utils/normalizeBranchDataHelpers";

import { ATM, Office, Terminal } from "../../../components_v2/Icon/index";

import { BankType } from "../../../redux/types/mapTypes";

import { useTypedDispatch } from "../../../redux/store/store";

import { setActiveBranch } from "../../../redux/actions/mapActions";

import {
  createActiveBranchSelector,
  selectCurrentCity,
} from "../../../redux/selectors/mapSelectors";

import { DetailedBankInfo } from "../DetailedBankInfo";

import { selectLocation } from "../../../redux/selectors/userSelectors";

import "./BankStyles.css";

export type BankProps = {
  bank: BankType;
};

const iconTypesMap = {
  Bankbranch: Office,
  ATM,
  Terminal,
};

export const Bank = ({ bank }: BankProps) => {
  const selectActiveBranch = createActiveBranchSelector(bank.id);
  const isActiveBranch = useSelector(selectActiveBranch);
  const cityName = useSelector(selectCurrentCity);
  const location = useSelector(selectLocation);
  const Icon = iconTypesMap[bank.officeType];
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useTypedDispatch();
  const scrollBankIntoView = () => {
    scrollToRef.current?.scrollIntoView({
      block: "start",
    });
  };

  const clickHandler = () => {
    if (isActiveBranch) {
      dispatch(setActiveBranch(null));
    } else {
      dispatch(setActiveBranch(bank.id));
      scrollBankIntoView();
    }
  };

  useEffect(() => {
    isActiveBranch && scrollBankIntoView();
  }, [isActiveBranch]);

  const keyPressHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    e.key === "Enter" && clickHandler();
  };

  return (
    <>
      <div
        className={classNames("bank-list-item-container", {
          increasedHeight: isActiveBranch,
        })}
        ref={scrollToRef}
        tabIndex={0}
        role="button"
        onKeyPress={keyPressHandler}
        onClick={clickHandler}
      >
        <Icon />
        <div className="branch-adress">
          <b>
            <FormattedMessage id={`${bank.officeType}`} />{" "}
            {`${bank.officeNumber}`}
          </b>
          <br />
          {`${bank.officeAddress}, ${cityName}`}
        </div>

        <div>
          {location &&
            `${calculateDistance(location, [
              +bank.latitude,
              +bank.longitude,
            ])} km`}
        </div>

        <div className="time-container">
          {isBankOpen(bank) ? (
            <span className="open-text">
              <FormattedMessage id="openNow" />
            </span>
          ) : (
            <span className="closed-text">
              <FormattedMessage id="closedNow" />
            </span>
          )}
          {bank.services.aroundClock ? "24/7" : getCurrentWortkingTime(bank)}
        </div>
      </div>
      <DetailedBankInfo bank={bank} />
    </>
  );
};
