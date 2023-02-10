import React from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { ClientForm } from "../ClientForm";

import { NonClientForm } from "../NonClientForm";

import { StepsList } from "../../../components/StepsList";

import { selectPhoneNum } from "../../../redux/selectors/userSelectors";

import { RegistrationFormProps } from "../../types";

import "./RegistrationFormStyles.css";

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  incrementStep,
  activeStep,
  isClient,
}) => {
  const intl = useIntl();
  const phoneNum = useSelector(selectPhoneNum);
  return (
    <div className="registration-form-content-container">
      <div className="registration-form-body-wrapper">
        <h1 className="registration-form-body-text_big">
          {isClient && activeStep < 4 ? <FormattedMessage id="signUp" /> : null}
          {!isClient && activeStep < 5 ? (
            <FormattedMessage id="signUp" />
          ) : null}
        </h1>
        {isClient && activeStep > 0 && activeStep < 4 ? (
          <div className="registration-form-body_progress_bar">
            <ul className="registration-form-body_list">
              <StepsList
                steps={[
                  intl.formatMessage({ id: "enterSmsCode" }),
                  intl.formatMessage({ id: "enterPassword" }),
                  intl.formatMessage({ id: "enterSecretQuestion" }),
                ]}
                activeStep={activeStep - 1}
              />
            </ul>
          </div>
        ) : null}
        {!isClient && activeStep > 0 && activeStep < 5 ? (
          <div className="registration-form-body_progress_bar">
            <ul className="registration-form-body_list">
              <StepsList
                steps={[
                  intl.formatMessage({ id: "enterSmsCode" }),
                  intl.formatMessage({ id: "enterInformation" }),
                  intl.formatMessage({ id: "enterPassword" }),
                  intl.formatMessage({ id: "enterSecretQuestion" }),
                ]}
                activeStep={activeStep - 1}
              />
            </ul>
          </div>
        ) : null}
        <div className="registration-form-content-container">
          <div className="registration-form-content-wrapper">
            {isClient ? (
              <ClientForm
                activeStep={activeStep}
                incrementStep={incrementStep}
              />
            ) : (
              <NonClientForm
                activeStep={activeStep}
                incrementStep={incrementStep}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
