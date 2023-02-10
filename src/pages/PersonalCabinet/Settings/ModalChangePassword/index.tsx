import React, { useState } from "react";

import { Modal } from "../../../../components/Modal";

import { PasswordChangeForm } from "../PasswordChangeForm";

import "./ModalChangePasswordStyles.css";

export const ModalChangePassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          className="password-change-form-wrapper"
          backdrop={true}
          onClose={handleClose}
        >
          <PasswordChangeForm onClose={() => handleClose()} />
        </Modal>
      )}
    </>
  );
};
