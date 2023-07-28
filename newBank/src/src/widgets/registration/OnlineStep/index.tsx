import React, { useState } from "react";

import { Popup } from "src/entities/Popup";

import { CameraPrepare } from "./components/CameraPrepare";

import { ContentWithoutCamera } from "./components/ContentWithoutCamera";

import { FaceIdentify } from "./components/FaceIdentify";

import { FaceIDPhoto } from "./components/FaceIDPhoto";

import styles from "./OnlineStep.module.scss";

export const OnlineStep = () => {
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
        <Popup>
          <ContentWithoutCamera onClose={handleClose} />
        </Popup>
      )}
    </div>
  );
};
