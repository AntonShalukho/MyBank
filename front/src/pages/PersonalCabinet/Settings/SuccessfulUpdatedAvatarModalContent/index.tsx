import React from "react";

import { FormattedMessage } from "react-intl";

import "./SuccessfulUpdatedAvatarModalContentStyles.css";
import { BackButton } from "../../../../components/BackButton";

type SuccessfulUpdatedAvatarModalContentProps = {
  avatar: string;
};

export const SuccessfulUpdatedAvatarModalContent = ({
  avatar,
}: SuccessfulUpdatedAvatarModalContentProps) => (
  <>
    <div className="successful-updated-avatar-modal-content-wrapper">
      <img
        className="successful-updated-avatar-modal-content-img"
        src={avatar}
        alt="avatar"
      />
      <h2 className="successful-updated-avatar-modal-content-title">
        <FormattedMessage id="successfulUpdatedAvatarTitle" />
      </h2>
      <p className="successful-updated-avatar-modal-content-description">
        <FormattedMessage id="successfulUpdatedAvatarDescription" />
      </p>
    </div>
  </>
);
