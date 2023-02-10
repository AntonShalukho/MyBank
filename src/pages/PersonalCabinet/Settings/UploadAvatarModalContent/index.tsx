import React, { DragEvent, useState } from "react";

import { FormattedMessage } from "react-intl";

import { NotificationPopup } from "../../../../components/NotificationPopup";

import { UploadIcon } from "../../../../components/Icons";

import "./UploadAvatarModalContentStyles.css";

type UploadAvatarModalContentType = {
  stepForward: () => void;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
};

export const UploadAvatarModalContent = ({
  stepForward,
  setAvatar,
}: UploadAvatarModalContentType) => {
  const [isSizeErr, setIsSizeErr] = useState(false);
  const convertFile = (files: FileList | null) => {
    const MAX_SIZE = 16777216;
    if (files) {
      const fileRef = files[0] || "";
      if (fileRef.size > MAX_SIZE) {
        setIsSizeErr(true);
        return;
      }
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setAvatar(`${btoa(event.target?.result as string)}`);
        stepForward();
      };
    }
  };

  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dropHandler = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    convertFile(event.dataTransfer.files);
  };

  return (
    <>
      {isSizeErr && (
        <NotificationPopup text={<FormattedMessage id="maxSizeAvatar" />} />
      )}
      <div
        className="upload-avatar-container"
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      >
        <UploadIcon />
        <div className="photo-upload-text">
          <label htmlFor="upload-photo">
            <FormattedMessage id="clickToUpload" />
          </label>
          <span>
            <FormattedMessage id="orDragNDrop" />
          </span>
        </div>
        <span>
          <FormattedMessage id="avatarFormat" />
        </span>

        <input
          type="file"
          className="upload-avatar"
          id="upload-photo"
          accept="image/png, image/jpeg, image/png, image/heic"
          onChange={(e) => convertFile(e.target.files)}
        />
      </div>
    </>
  );
};
