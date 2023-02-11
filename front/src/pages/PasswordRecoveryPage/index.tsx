import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import { useNavigate } from "react-router";

import background from "../../uikit/static/passwordRecoveryBg.webp";

import { Modal } from "../../components/Modal";

import { LinksFooter } from "../../components/LinksFooter";

import { RecoveryForm } from "./RecoveryForm";

import { Confirmation } from "../../components/Confirmation";

export const PasswordRecoveryPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const handleBackClick = () => {
    setActiveStep(activeStep - 1);
  };

  const incrementStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handleClose = () => {
    navigate("/");
  };

  const onButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="recovery-wrapper">
      <div className="recovery-img-container-wrapper">
        <div className="recovery-img-container">
          <img src={background} alt="back" />
        </div>
      </div>
      {activeStep === 3 ? (
        <Modal onClose={handleClose} className="confirmation-modal">
          <Confirmation onButtonClick={onButtonClick}>
            <FormattedMessage id="successfulRecovery" />
          </Confirmation>
        </Modal>
      ) : (
        <Modal
          onBackClick={handleBackClick}
          onClose={handleClose}
          className="recovery-modal"
        >
          <RecoveryForm activeStep={activeStep} incrementStep={incrementStep} />
        </Modal>
      )}
      <LinksFooter />
    </div>
  );
};
