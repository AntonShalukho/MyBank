import React, { useState } from "react";

import { useNavigate, useLocation, useParams } from "react-router";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { CrossIcon } from "../../../../components_v2/Icon";

import { BackButton } from "../../../../uikit_v2/BackButton";

import {
  StepBoxData,
  getStepStylesBtn,
  getStepStylesNum,
  RegistrationParamsType,
} from "./StepBoxData";

import {
  SIGN_UP_PATH,
  START_REGISTRATION_STEP,
} from "../../../../utils/variables";

import { Popup } from "../../../../components_v2/Popup";

import { PopupContent } from "./PopupContent";

import { getCookie, setCookie } from "../../../../utils/cookieHandlers";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { sendBackButtonStep } from "../../../../services/api/sendBackButtonStep";

import { Spinner } from "../../../../uikit_v2/Spinner";

import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
  const [stepBox, setStepBox] = useState(StepBoxData);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { step } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();

  const isProgressBar = (): boolean => {
    const paths = [
      SIGN_UP_PATH,
      "/",
      `${SIGN_UP_PATH}/${START_REGISTRATION_STEP}`,
    ];
    return !paths.includes(pathname);
  };

  const handleCrossIcon = () => {
    setIsPopup(!isPopup);
  };

  const handleBackButton = (): boolean =>
    ![SIGN_UP_PATH, `${SIGN_UP_PATH}/1`].includes(pathname);

  const handleButtonBack = () => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid || null,
      currentStepName: step as string,
    };
    setIsLoading(true);
    sendBackButtonStep(requestBody)
      .then((data) => {
        data.uuid && setCookie("uuid", data.uuid);
        if (data.Step.back) {
          navigate(getSignUpNavigateLink(data.Step.back));
        } else {
          navigate(-1);
        }
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, {
          [styles.withBackButton]: !handleBackButton(),
        })}
      >
        {handleBackButton() && <BackButton onClick={handleButtonBack} />}
        {isProgressBar() && (
          <div className={styles.steps_container}>
            {stepBox.map((stepBar) => (
              <div className={styles.steps_block} key={stepBar.currentStep}>
                <div
                  className={getStepStylesBtn(
                    stepBar,
                    step as RegistrationParamsType
                  )}
                >
                  <div
                    className={getStepStylesNum(
                      stepBar,
                      step as RegistrationParamsType
                    )}
                  >
                    {stepBar.currentStep}
                  </div>
                </div>
                <div className={styles.step_name}>
                  {intl.formatMessage({ id: stepBar.name })}
                </div>
              </div>
            ))}
            <div className={styles.progress_line} />
          </div>
        )}
        {
          // eslint-disable-next-line
          <div
            onClick={handleCrossIcon}
            className={styles.cross_icon}
          >
            <CrossIcon />
          </div>
        }
        {isPopup && (
          <Popup className={styles.backdrop}>
            <PopupContent onClose={handleCrossIcon} />
          </Popup>
        )}
        {isLoading && (
          <Popup className={styles.backdrop}>
            <Spinner />
          </Popup>
        )}
      </div>
    </div>
  );
};
