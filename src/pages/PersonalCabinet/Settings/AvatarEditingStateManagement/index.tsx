import React, { useState } from "react";

import { setAvatarToStore } from "../../../../redux/actions/userActions";

import { sendProfilePicture } from "../../../../services/api/userAvatar";

import { useTypedDispatch } from "../../../../redux/store/store";

import { AvatarEditingModalContent } from "../AvatarEditingModalContent";

import { UploadAvatarModalContent } from "../UploadAvatarModalContent";

import { SuccessfulUpdatedAvatarModalContent } from "../SuccessfulUpdatedAvatarModalContent";

type AvatarEditingStateManagementProps = {
  onClick: (value: string) => void;
  state: number;
  stepBack: () => void;
  stepForward: () => void;
};

const steps = {
  upload: 0,
  editing: 1,
  done: 2,
};

export const AvatarEditingStateManagement = ({
  onClick,
  state,
  stepBack,
  stepForward,
}: AvatarEditingStateManagementProps) => {
  const [avatar, setAvatar] = useState<string>("");
  const dispatch = useTypedDispatch();

  const onSubmit = (picture: string) => {
    sendProfilePicture(picture).then(() => dispatch(setAvatarToStore()));
    setAvatar(`data:image/jpg;base64,${picture}`);
  };

  return (
    <>
      {state === steps.upload && (
        <UploadAvatarModalContent
          setAvatar={setAvatar}
          stepForward={stepForward}
        />
      )}
      {state === steps.editing && (
        <AvatarEditingModalContent
          avatar={avatar}
          onSubmit={onSubmit}
          stepForward={stepForward}
          onBackClick={stepBack}
        />
      )}
      {state === steps.done && (
        <SuccessfulUpdatedAvatarModalContent avatar={avatar} />
      )}
    </>
  );
};
