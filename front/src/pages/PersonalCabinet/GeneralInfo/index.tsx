import React, { useEffect } from "react";

import { useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { SelectedRadioBtnIcon } from "../../../components/Icons";

import { selectAccountInfo } from "../../../redux/selectors/userSelectors";

import { GeneralInfoBlock } from "../GeneralInfoBlock";

import { modifyPhoneNumber } from "../../../utils/modifyPhoneNumber";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

import { useTypedDispatch } from "../../../redux/store/store";

import { setAccountInfoToStore } from "../../../redux/actions/userActions";

import "./GeneralInfoStyles.css";

export const GeneralInfo = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setAccountInfoToStore());
  }, [dispatch]);

  const accountInfo = useSelector(selectAccountInfo);
  const intl = useIntl();
  return (
    <div className="general-info-container">
      <GeneralInfoBlock
        headerId="firstName"
        text={capitalizeFirstLetter(accountInfo?.firstName || "")}
      />
      <GeneralInfoBlock
        headerId="phoneNumber"
        text={modifyPhoneNumber(accountInfo?.phoneNumber)}
      />
      <GeneralInfoBlock
        headerId="lastName"
        text={capitalizeFirstLetter(accountInfo?.lastName || "")}
      />
      {accountInfo?.email && (
        <GeneralInfoBlock headerId="email" text={accountInfo?.email} />
      )}
      <GeneralInfoBlock headerId="idNo" text={accountInfo?.uid} />
      {accountInfo?.residentStatus ? (
        <label className="general-info-radio-btn">
          <SelectedRadioBtnIcon className="general-info-radio-bnt-icon" />
          {intl.formatMessage({ id: "usResident" })}
        </label>
      ) : (
        <label className="general-info-radio-btn">
          <SelectedRadioBtnIcon className="general-info-radio-bnt-icon" />
          {intl.formatMessage({ id: "usNonResident" })}
        </label>
      )}
    </div>
  );
};
