import React, { useState } from "react";

import { useNavigate, useLocation, useParams } from "react-router";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { CrossIcon } from "./assets/icons";

import { stepData } from "./assets/stepData";

import { getCookie, setCookie } from "../../../shared/lib/cookieHandlers";

import { getSignUpNavigateLink } from "../../../shared/lib/getSignUpNavigateLink";

import { SIGN_UP_PATH } from "../../../shared/consts";

import { START_REGISTRATION_STEP } from "../../../shared/consts/Registration";

import { CancelRegistrationPopup } from "../../CancelRegistrationPopup";

import { getStepStylesBtn, getStepStylesNum } from "./lib/helpers";

import { RegistrationParamsType } from "./types";

import { sendBackButtonStep } from "./api/sendBackButtonStep";

import { BackButton } from "../../../shared/ui/BackButton";

import styles from "./ProgressBar.module.scss";

export const ProgressBar = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const { toggleSpinner } = useSpinner();
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
    toggleSpinner(true);
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
      .finally(() => toggleSpinner(false));
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
            {stepData.map((stepBar) => (
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
          <div onClick={handleCrossIcon} className={styles.cross_icon}>
            <CrossIcon />
          </div>
        }
        {isPopup && <CancelRegistrationPopup onClose={handleCrossIcon} />}
      </div>
    </div>
  );
};
