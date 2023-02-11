import React, { useState } from "react";

import { Navigate } from "react-router";

import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import background from "../../uikit/static/passwordRecoveryBg.webp";

import { Modal } from "../../components/Modal";

import { LinksFooter } from "../../components/LinksFooter";

import { RegistrationForm } from "./RegistrationForm";

import { Confirmation } from "../../components/Confirmation";

import { selectIsClient } from "../../redux/selectors/userSelectors";

import "./RegistrationPageStyles.css";

export const RegistrationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isClient = useSelector(selectIsClient);

  const handleBackClick = () => {
    setActiveStep(activeStep - 1);
  };
  const incrementStep = () => {
    setActiveStep(activeStep + 1);
  };
  const handleClose = () => {
    setActiveStep(-1);
  };

  return (
    <>
      {activeStep < 0 ? (
        <Navigate to="/" />
      ) : (
        <div className="registration-wrapper">
          <div className="registration-background">
            <img src={background} alt="back" />
          </div>

          {(isClient && activeStep === 4) || (!isClient && activeStep === 5) ? (
            <Modal onClose={handleClose} className="confirmation-modal">
              <Confirmation onButtonClick={incrementStep}>
                <FormattedMessage id="successfullyRegistered" />
              </Confirmation>
            </Modal>
          ) : (
            <Modal
              onBackClick={handleBackClick}
              onClose={handleClose}
              className="registration-modal"
            >
              <RegistrationForm
                incrementStep={incrementStep}
                activeStep={activeStep}
                isClient={isClient}
              />
            </Modal>
          )}
          <LinksFooter />
        </div>
      )}
    </>
  );
};
