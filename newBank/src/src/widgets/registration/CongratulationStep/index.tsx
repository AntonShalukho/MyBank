import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { deleteCookie } from "src/shared/lib/cookieHandlers";

import { CongratulationContent } from "./components/CongratulationContent";

import styles from "./CongratulationStep.module.scss";

export const CongratulationStep = () => {
  const [isEnable, setIsEnable] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      setIsEnable(false);
      deleteCookie("uuid");
    }, 2000);
  }, []);

  return isEnable ? (
    <div className={styles.popup}>
      <CongratulationContent />
      <div className={styles.confetti} />
    </div>
  ) : null;
};
