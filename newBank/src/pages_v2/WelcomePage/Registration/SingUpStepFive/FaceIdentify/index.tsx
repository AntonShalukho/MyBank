import React, { useEffect, useRef, useState } from "react";

import * as faceapi from "face-api.js";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { length } from "ramda";

import { Button } from "../../../../../uikit_v2/Button";

import { Spinner } from "../../../../../uikit_v2/Spinner";

import { Popup } from "../../../../../components_v2/Popup";

import { getCookie, setCookie } from "../../../../../utils/cookieHandlers";

import { sendOnlineRegistrationStep } from "../../../../../services/api/sendOnlineRegistrationStep";

import { getSignUpNavigateLink } from "../../StepConfig/getSignUpNavigateLink";

import { SuccessPopup } from "./SuccessPopup";

import { UnsuccessSelfie } from "./UnsuccessSelfie";

import { sendRegistrationType } from "../../../../../services/api/sendRegistrationType";

import { OFFLINE } from "../../../../../utils/variables";

import styles from "./FaceIdentify.module.css";

export const FaceIdentify = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const biometricComparisonCounter = useRef<number>(0);
  const [isLoader, setIsLoader] = useState<boolean>(false);
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
    setIsLoader(true);
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
      setIsLoader(false);
    }, 4000);
  };

  const handleSubmit = () => {
    setIsLoader(true);
    const uuid = getCookie("uuid");
    const requestBody = { uuid: uuid as string };
    sendOnlineRegistrationStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        clearPlayVideoInterval();
        navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => setIsLoader(false));
  };

  const handleOfflineStep = () => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: OFFLINE as "offline",
    };
    setIsLoader(true);
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
        navigate(getSignUpNavigateLink(date.Step.next));
      })
      .finally(() => setIsLoader(false));
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
        {intl.formatMessage({ id: "FaceIDPhotoPleaseTakePhoto" })}
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
          {intl.formatMessage({ id: "FaceIDPhotoDescription" })}
        </p>
        <Button
          variant="primarySmall"
          onClick={handleFaceBiometric}
          className={styles.button}
        >
          {intl.formatMessage({ id: "continueButtonText" })}
        </Button>
      </div>
      {isLoader && (
        <Popup className={styles.popup}>
          <Spinner />
        </Popup>
      )}
      {isSuccessPopup && (
        <Popup className={styles.popup}>
          <SuccessPopup
            handleSideEffects={clearPlayVideoInterval}
            handleSubmit={handleSubmit}
          />
        </Popup>
      )}
      {isUnSuccessPopup && (
        <Popup className={styles.popup}>
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
