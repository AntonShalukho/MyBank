import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Button } from "src/shared/ui/Button";

import { SIGN_UP_PATH } from "src/shared/consts";

import { VideoType } from "../types";

import styles from "./BlockEight.module.scss";

export const BlockEight = ({ video }: VideoType) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(SIGN_UP_PATH);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block_left}>
          <div className={styles.left_title}>
            {intl.formatMessage({ id: "entities_introPageTitleBankOn" })}
            <br />
            {intl.formatMessage({ id: "entities_introPageTitleForYou" })}
          </div>
          <div className={styles.left_description}>
            {intl.formatMessage({ id: "entities_introPageDescAtOurBank" })}
            <br />
            {intl.formatMessage({ id: "entities_introPageDescWeOffer" })}
          </div>
          <div className={styles.left_img}>
            <Button
              variant="primarySmall"
              className={styles.login_btn}
              onClick={handleClick}
            >
              {intl.formatMessage({ id: "entities_introGetStarted" })}
            </Button>
          </div>
        </div>
        <div className={styles.blockVideo}>
          <video
            className={styles.workingTeamVideo}
            autoPlay={true}
            loop={true}
            src={video}
            muted={true}
          >
            <track src="" kind="captions" />
          </video>
        </div>
      </div>
      <div className={styles.account_pic} />
    </div>
  );
};
