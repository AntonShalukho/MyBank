/* eslint-disable no-nested-ternary */
import React from "react";

import { Navigate } from "react-router";

import { useSelector } from "react-redux";

import { PhoneNumberForm } from "../PhoneNumberForm";

import { PasswordForm } from "../../../components/PasswordForm";

import {
  selectPhoneNum,
  selectPassword,
  selectCode,
} from "../../../redux/selectors/userSelectors";

import { sendClientRegistration } from "../../../services/api/sendRegistrationRequest";

import { SmsForm } from "../../../components/SmsForm";

import { SecretQuestionForm } from "../../../components/SecretQuestionForm";

import { ClientFormProps } from "../../types";

export const ClientForm: React.FC<ClientFormProps> = ({
  activeStep,
  incrementStep,
}) => {
  const phoneNumber = useSelector(selectPhoneNum);
  const newPassword = useSelector(selectPassword);
  const verificationCode = useSelector(selectCode);
  const onClientFormSubmit = (
    secretQuestion: string,
    secretQuestionAnswer: string
  ) => {
    const registrationInformation = {
      phoneNumber,
      newPassword,
      confirmPassword: newPassword,
      secretQuestion,
      secretQuestionAnswer,
      verificationCode,
    };
    return sendClientRegistration(registrationInformation).then(() => {
      incrementStep();
    });
  };

  return (
    <div className="registration-content-input">
      {activeStep < 0 || activeStep === 5 ? (
        <Navigate to="/" />
      ) : activeStep === 0 ? (
        <PhoneNumberForm onSuccessSubmit={incrementStep} />
      ) : activeStep === 1 ? (
        <>
          <SmsForm onSuccessSubmit={incrementStep} />
        </>
      ) : activeStep === 2 ? (
        <>
          <PasswordForm onSuccessSubmit={incrementStep} />
        </>
      ) : activeStep === 3 ? (
        <>
          <SecretQuestionForm onSubmit={onClientFormSubmit} />
        </>
      ) : null}
    </div>
  );
};
