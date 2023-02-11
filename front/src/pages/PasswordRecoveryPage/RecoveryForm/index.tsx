import React from "react";

import { Navigate } from "react-router";

import { FormattedMessage, useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { sendPasswordRecoveryRequest } from "../../../services/api/sendPasswordRecoveryRequest";

import { StepsList } from "../StepsList";

import { SmsForm } from "../../../components/SmsForm";

import { PassportNumberForm } from "../PassportNumberForm";

import "./PasswordRecoveryPageBodyStyles.css";

import {
  selectCode,
  selectPassportNum,
} from "../../../redux/selectors/userSelectors";
import { PasswordForm } from "../../../components/PasswordForm";

type RecoveryFormProps = {
  activeStep: number;
  incrementStep: () => void;
};

export const RecoveryForm: React.FC<RecoveryFormProps> = ({
  activeStep,
  incrementStep,
}) => {
  const intl = useIntl();
  const passportNumber = useSelector(selectPassportNum);
  const verificationCode = useSelector(selectCode);

  const onSuccessSubmit = (newPassword: string) => {
    const passwordRecoveryInformation = {
      newPassword,
      confirmPassword: newPassword,
      passportNumber,
      verificationCode,
    };
    sendPasswordRecoveryRequest(passwordRecoveryInformation).then(
      incrementStep
    );
  };

  return (
    <div className="recovery-form-body-wrapper">
      {activeStep !== 3 && (
        <div className="recovery-form-header-wrapper">
          <h1>
            <FormattedMessage id="passRecovery" />
          </h1>
          <div className="recovery-form-body_progress_bar">
            <ul className="recovery-form-body_list">
              <StepsList
                steps={[
                  intl.formatMessage({ id: "enterPassportNumber" }),
                  intl.formatMessage({ id: "enterSmsCode" }),
                  intl.formatMessage({ id: "enterPassword" }),
                ]}
                activeStep={activeStep}
              />
            </ul>
          </div>
        </div>
      )}
      <div className="recovery-form-content-container">
        <div className="recovery-form-content-wrapper">
          <div className="content-input">
            {activeStep < 0 ? (
              <Navigate to="/" />
            ) : activeStep === 0 ? (
              <PassportNumberForm onSuccessSubmit={incrementStep} />
            ) : activeStep === 1 ? (
              <SmsForm onSuccessSubmit={incrementStep} />
            ) : activeStep === 2 ? (
              <PasswordForm onSuccessSubmit={onSuccessSubmit} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
