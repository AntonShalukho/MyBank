import React, { useEffect, useRef, useState } from "react";

import * as faceapi from "face-api.js";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { length } from "ramda";

import { Button } from "src/shared/ui/Button";

import { Popup } from "src/entities/Popup";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { OFFLINE } from "src/shared/consts/Registration";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { sendOnlineRegistrationStep } from "../../api/sendOnlineRegistrationStep";

import { SuccessPopup } from "../SuccessPopup";

import { UnsuccessSelfie } from "../UnsuccessSelfie";

import { sendRegistrationType } from "../../api/sendRegistrationType";

import styles from "./FaceIdentify.module.scss";

export const FaceIdentify = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const biometricComparisonCounter = useRef<number>(0);
  const { toggleSpinner } = useSpinner();
  const [isSuccessPopup, setIsSuccessPopup] = useState<boolean>(false);
  const [isUnSuccessPopup, setIsUnSuccessPopup] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const detectionsData = useRef<
    faceapi.WithFaceDescriptor<
      faceapi.WithFaceLandmarks<
        { detection: faceapi.FaceDetection },
        faceapi.FaceLandmarks68
      >
    >[]
  >([]);
  const intl = useIntl();
  const navigate = useNavigate();
  const COMPARISON_PERCENTAGE = 0.5;

  const handleSuccessPopup = () => setIsSuccessPopup(!isSuccessPopup);
  const handleUnSuccessPopup = () => setIsUnSuccessPopup(!isUnSuccessPopup);

  const clearPlayVideoInterval = () => clearInterval(intervalId);

  const startVideo = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  };

  const increaseBiometricComparisonCounter = () => {
    biometricComparisonCounter.current += 1;
  };

  const handleVideoPlay = () => {
    const displaySize = {
      width: videoRef.current!.width,
      height: videoRef.current!.height,
    };
    faceapi.matchDimensions(canvasRef.current!, displaySize);

    const intervalID = setInterval(async () => {
      const detection = await faceapi
        .detectAllFaces(
          videoRef.current!,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptors();
      detectionsData.current = detection;
      canvasRef.current
        ?.getContext("2d")
        ?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      const resizedDetections = faceapi.resizeResults(detection, displaySize);
      faceapi.draw.drawDetections(canvasRef.current!, resizedDetections);
    }, 100);
    setIntervalId(intervalID);
  };

  const handleFaceBiometric = () => {
    increaseBiometricComparisonCounter();
    toggleSpinner(true);
    setTimeout(() => {
      try {
        if (length(detectionsData.current) === 2) {
          const distance = faceapi.utils.round(
            faceapi.euclideanDistance(
              detectionsData.current[0].descriptor,
              detectionsData.current[1].descriptor
            )
          );
          if (distance >= COMPARISON_PERCENTAGE) {
            clearPlayVideoInterval();
            if (videoRef.current) videoRef.current.srcObject = null;
            handleSuccessPopup();
          } else {
            handleUnSuccessPopup();
          }
        } else {
          handleUnSuccessPopup();
        }
      } catch (err) {
        handleUnSuccessPopup();
        throw err;
      }
      toggleSpinner(false);
    }, 4000);
  };

  const handleSubmit = () => {
    toggleSpinner(true);
    const uuid = getCookie("uuid");
    const requestBody = { uuid: uuid as string };
    sendOnlineRegistrationStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        clearPlayVideoInterval();
        data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => toggleSpinner(false));
  };

  const handleOfflineStep = () => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: OFFLINE as "offline",
    };
    toggleSpinner(true);
    sendRegistrationType(requestBody)
      .then((date) => {
        setCookie("uuid", date.uuid);
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((steam) => {
            const track = steam.getVideoTracks()[0];
            track.stop();
          })
          .catch((err) => {
            throw err;
          })
          .then(() => navigator.mediaDevices.getUserMedia({ video: false }));
        clearPlayVideoInterval();
        date.Step.next && navigate(getSignUpNavigateLink(date.Step.next));
      })
      .finally(() => toggleSpinner(false));
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {})
        .catch((err) => {
          throw err;
        });
    }
  }, []);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = `${process.env.PUBLIC_URL}/models`;
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ])
        .then(startVideo)
        .catch((err) => {
          throw err;
        });
    };
    loadModels();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_faceIDPhoto" })}
      </h2>
      <div className={styles.face_id}>
        <video
          src=""
          width="520px"
          height="520px"
          ref={videoRef}
          autoPlay={true}
          className={styles.icon}
          onPlay={handleVideoPlay}
        >
          <source src="" type="" />
          <track src="" kind="captions" />
        </video>
        <canvas
          ref={canvasRef}
          width="400px"
          height="400px"
          className={styles.canvas}
        />
        <p className={styles.description}>
          {intl.formatMessage({ id: "widget_faceIDDescription" })}
        </p>
        <Button
          variant="primarySmall"
          onClick={handleFaceBiometric}
          className={styles.button}
        >
          {intl.formatMessage({ id: "continue" })}
        </Button>
      </div>
      {isSuccessPopup && (
        <Popup>
          <SuccessPopup
            handleSideEffects={clearPlayVideoInterval}
            handleSubmit={handleSubmit}
          />
        </Popup>
      )}
      {isUnSuccessPopup && (
        <Popup>
          <UnsuccessSelfie
            isLastAttempt={biometricComparisonCounter.current >= 3}
            onClose={handleUnSuccessPopup}
            handleOfflineStep={handleOfflineStep}
            clearPlayVideoInterval={clearPlayVideoInterval}
          />
        </Popup>
      )}
    </div>
  );
};
