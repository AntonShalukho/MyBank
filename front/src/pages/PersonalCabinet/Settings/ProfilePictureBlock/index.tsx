import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { sendProfilePicture } from "../../../../services/api/userAvatar";

import { selectAvatar } from "../../../../redux/selectors/userSelectors";

import { useTypedDispatch } from "../../../../redux/store/store";

import { setAvatarToStore } from "../../../../redux/actions/userActions";

import { Button } from "../../../../uikit/Button";

import { Modal } from "../../../../components/Modal";

import { defaultPicture } from "../UploadAvatarModalContent/DefaultPicture";

import defaultAvatar from "../../../../uikit/static/avatar.png";

import { AvatarEditingStateManagement } from "../AvatarEditingStateManagement";

import "./ProfilePictureBlockStyles.css";

export const ProfilePictureBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState(0);

  if (isModalOpen) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }

  const dispatch = useTypedDispatch();
  const avatar = useSelector(selectAvatar);

  const handleChangeAvatar = () => {
    setIsModalOpen(true);
  };

  const handleRemoveAvatar = () => {
    sendProfilePicture(defaultPicture).then(() => dispatch(setAvatarToStore()));
  };

  const stepForward = () => {
    setState((prev) => prev + 1);
  };

  const stepBack = () => {
    setState((prev) => prev - 1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setState(0);
  };

  return (
    <>
      <div className="profile-picture-wrapper">
        <h4>
          <FormattedMessage id="pictureHeader" />
        </h4>
        <div className="profile-picture-block with-horizontal-line">
          <img
            className="profile-picture-img"
            src={avatar ? `data:image/jpg;base64,${avatar}` : defaultAvatar}
            alt="avatar"
          />

          <Button
            variant="form"
            className="change-button"
            onClick={handleChangeAvatar}
          >
            <FormattedMessage id="uploadNew" />
          </Button>
          <Button
            variant="form"
            className="change-button reset-btn"
            onClick={handleRemoveAvatar}
          >
            <FormattedMessage id="remove" />
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          backdrop={true}
          className="upload-modal"
        >
          <AvatarEditingStateManagement
            state={state}
            onClick={() => setIsModalOpen(false)}
            stepBack={stepBack}
            stepForward={stepForward}
          />
        </Modal>
      )}
    </>
  );
};
