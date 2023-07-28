import React, { useState } from "react";

import { Popup } from "../../../../components_v2/Popup";

import { CameraPrepare } from "./CameraPrepare";

import { ContentWithoutCamera } from "./ContentWithoutCamera";

import { FaceIdentify } from "./FaceIdentify";

import { FaceIDPhoto } from "./FaceIDPhoto";

import styles from "./SingUpStepFive.module.css";

export const SingUpStepFive = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [counter, setCounter] = useState<"1" | "2" | "3">("1");

  const handleClose = (): void => {
    setIsOpenModal(false);
  };

  const handlePrepareStep = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((steam) => {
          const track = steam.getVideoTracks()[0];
          track.stop();
          setCounter("2");
        })
        .catch(() => {
          setIsOpenModal(true);
        });
    }
  };

  const handleInfoStep = () => {
    setCounter("3");
  };

  const stepMap = {
    "1": <CameraPrepare handleClick={handlePrepareStep} />,
    "2": <FaceIDPhoto handleClick={handleInfoStep} />,
    "3": <FaceIdentify />,
  };

  return (
    <div className={styles.container}>
      {stepMap[counter]}
      {isOpenModal && (
        <Popup className={styles.backdrop}>
          <ContentWithoutCamera onClose={handleClose} />
        </Popup>
      )}
    </div>
  );
};
