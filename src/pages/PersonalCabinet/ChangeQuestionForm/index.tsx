import React, { Dispatch, useState } from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "../../../uikit/Button";

import { SecretQuestionForm } from "../../../components/SecretQuestionForm";

import { sendQuestionChangeRequest } from "../../../services/api/security";

import { Modal } from "../../../components/Modal";

import { SuccessfulChange } from "../../../components/Icons";

import "./ChangeQuestionFormStyles.css";

type ChangeQuestionFormProps = {
  setOption: Dispatch<React.SetStateAction<string | null>>;
};

export const ChangeQuestionForm = ({ setOption }: ChangeQuestionFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModalHandler = () => {
    setOption(null);
    setIsModalOpen(false);
  };
  const handleSubmit = (question: string, answer: string) =>
    sendQuestionChangeRequest(question, answer).then(() => {
      setIsModalOpen(true);
    });
  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={closeModalHandler}
          backdrop={true}
          className="change-modal"
        >
          <>
            <SuccessfulChange />
            <FormattedMessage id="secretQuestionChanged" />
          </>
        </Modal>
      )}
      <div className="change-question-container">
        <SecretQuestionForm onSubmit={handleSubmit}>
          <Button
            onClick={() => setOption(null)}
            variant="form"
            type="reset"
            className="change-button reset-btn"
          >
            <FormattedMessage id="cancel" />
          </Button>
        </SecretQuestionForm>
      </div>
    </>
  );
};
