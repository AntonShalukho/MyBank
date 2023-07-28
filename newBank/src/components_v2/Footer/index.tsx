import React from "react";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { MainLogoIcon, CellPhoneIcon } from "../Icon";

import { Socials } from "./Socials";

import { Stores } from "./Stores";

import { InfoCard } from "./InfoCard";

import { InfoBlock } from "./InfoBlock";

import styles from "./Footer.module.css";

export const Footer = () => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.logo_wrapper}>
          <MainLogoIcon className={styles.icon} />
          <div className={styles.wrapper}>
            <div className={styles.title}>Bee·Bank</div>
            <div className={styles.description}>
              {intl.formatMessage({ id: "solutionsForLife" })}
            </div>
          </div>
        </div>
        <Socials />
      </div>
      <div className={styles.middle_container}>
        <div className={styles.wrapperCards}>
          <div className={styles.card_wrapper}>
            <InfoCard
              title={intl.formatMessage({ id: "cardSupport" })}
              workScheduleFirst={intl.formatMessage({
                id: "supportWorkingHoursFirst",
              })}
              workScheduleSecond={intl.formatMessage({
                id: "supportWorkingHoursSecond",
              })}
            />
            <div className={styles.block_wrapper}>
              <InfoBlock
                icon={<CellPhoneIcon className={styles.icon} fill="#6D6D82" />}
                phoneNumber="7788"
                description={intl.formatMessage({ id: "workingHours24" })}
              />
              <InfoBlock
                phoneNumber="+48 79 203 32 33"
                description={intl.formatMessage({ id: "workingHours8" })}
              />
            </div>
          </div>

          <div className={styles.card_wrapper}>
            <div className={styles.card_wrapper}>
              <InfoCard
                title={intl.formatMessage({ id: "individuals" })}
                workScheduleFirst={intl.formatMessage({
                  id: "individualsWorkSchedule",
                })}
              />
              <div className={styles.block_wrapper}>
                <InfoBlock
                  icon={
                    <CellPhoneIcon className={styles.icon} fill="#6D6D82" />
                  }
                  phoneNumber="7788"
                  description={intl.formatMessage({ id: "workingHours24" })}
                />
                <InfoBlock
                  phoneNumber="+48 79 203 32 33"
                  description={intl.formatMessage({ id: "workingHours8" })}
                />
              </div>
            </div>
          </div>

          <div className={classNames(styles.card_wrapper, styles.address)}>
            <InfoCard
              title={intl.formatMessage({ id: "legalAddress" })}
              workScheduleFirst={intl.formatMessage({
                id: "legalAddressDescription",
              })}
              className="address"
            />
          </div>
        </div>

        <div className={styles.store_wrapper}>
          <Stores />
        </div>
      </div>
      <div className={styles.bottom_container}>
        {intl.formatMessage({ id: "footerDescription" })}
      </div>
    </div>
  );
};
