import React, { useRef, useState } from "react";

import { FormattedMessage } from "react-intl";

import AvatarEditor from "react-avatar-editor";

import { Button } from "../../../../uikit/Button";

import { AvatarScale } from "../AvatarScale";

import "./AvatarEditingModalContentStyles.css";

import { BackButton } from "../../../../components/BackButton";

type AvatarEditingModalContentProps = {
  avatar: string;
  onSubmit: (value: string) => void;
  stepForward: () => void;
  onBackClick: () => void;
};

export const AvatarEditingModalContent = ({
  stepForward,
  avatar,
  onSubmit,
  onBackClick,
}: AvatarEditingModalContentProps) => {
  const [image, setImage] = useState(avatar);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const handleClick = () => {
    // @ts-expect-error
    const image = editorRef?.current?.getImage().toDataURL();
    const [imageExtantion, imageURL] = image.split(",");
    onSubmit(imageURL);
    stepForward();
  };

  return (
    <>
      <BackButton onClick={onBackClick} />
      <div className="avatar-editing-modal-content-wrapper">
        <div className="avatar-editing-modal-content-avatar">
          <AvatarEditor
            className="avatar-editor-crop"
            image={`data:image/jpg;base64,${image}`}
            ref={editorRef}
            width={250}
            height={250}
            scale={parseFloat(scale.toString())}
            borderRadius={200}
          />
        </div>
        <AvatarScale
          scale={scale}
          onScaleChange={setScale as unknown as (value: string) => void}
        />
      </div>
      <Button
        variant="form"
        type="submit"
        className="change-button avatar-editing-modal-save-changes-btn"
        onClick={handleClick}
      >
        <FormattedMessage id="saveChanges" />
      </Button>
    </>
  );
};
