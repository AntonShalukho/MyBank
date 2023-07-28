import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Popup } from "components_v2/Popup";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { UserExpired } from "./components/UserExpired";

import { UserExpiredData, UserInformData } from "./mock";

import { UserExpiredPopupType } from "./types";

import { prettifyClock } from "./lib/prettifyClock";

import styles from "./UserExpiredPopup.module.css";

export const UserExpiredPopup = ({
  onClose,
  onTimeout,
  stayOnSite,
}: UserExpiredPopupType) => {
  const token = getSessionStorage("token");

  const completeTimerHandler = () => onTimeout();

  return (
    <Popup className={styles.popup}>
      <UserExpired
        mockData={token ? UserInformData : UserExpiredData}
        onClose={onClose}
        isExpired={!!token}
        stayOnSite={stayOnSite}
      >
        {token && (
          <CountdownCircleTimer
            isPlaying={true}
            duration={31}
            colors={["#F93535", "#F93535"]}
            colorsTime={[7, 5]}
            strokeWidth={10}
            onComplete={completeTimerHandler}
          >
            {({ remainingTime }) => (
              <div className={styles.time}>{prettifyClock(remainingTime)}</div>
            )}
          </CountdownCircleTimer>
        )}
      </UserExpired>
    </Popup>
  );
};
