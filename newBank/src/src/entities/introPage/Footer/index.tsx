import { useIntl } from "react-intl";

import classNames from "classnames";

import { MainLogoIcon, CellPhoneIcon } from "src/shared/assets/icons";

import variables from "src/shared/assets/scss/variables.module.scss";

import { Socials } from "./components/Socials";

import { Stores } from "./components/Stores";

import { InfoCard } from "./components/InfoCard";

import { InfoBlock } from "./components/InfoBlock";

import styles from "./Footer.module.scss";

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
              {intl.formatMessage({ id: "entities_solutionsForLife" })}
            </div>
          </div>
        </div>
        <Socials />
      </div>
      <div className={styles.middle_container}>
        <div className={styles.wrapperCards}>
          <div className={styles.card_wrapper}>
            <InfoCard
              title={intl.formatMessage({ id: "entities_cardSupport" })}
              workScheduleFirst={intl.formatMessage({
                id: "entities_supportWorkingHoursFirst",
              })}
              workScheduleSecond={intl.formatMessage({
                id: "entities_supportWorkingHoursSecond",
              })}
            />
            <div className={styles.block_wrapper}>
              <InfoBlock
                icon={
                  <CellPhoneIcon
                    className={styles.icon}
                    fill={variables.primary_text_2}
                  />
                }
                phoneNumber="7788"
                description={intl.formatMessage({
                  id: "entities_workingHours24",
                })}
              />
              <InfoBlock
                phoneNumber="+48 79 203 32 33"
                description={intl.formatMessage({
                  id: "entities_workingHours8",
                })}
              />
            </div>
          </div>

          <div className={styles.card_wrapper}>
            <div className={styles.card_wrapper}>
              <InfoCard
                title={intl.formatMessage({ id: "entities_individuals" })}
                workScheduleFirst={intl.formatMessage({
                  id: "entities_individualsWorkSchedule",
                })}
              />
              <div className={styles.block_wrapper}>
                <InfoBlock
                  icon={
                    <CellPhoneIcon
                      className={styles.icon}
                      fill={variables.primary_text_2}
                    />
                  }
                  phoneNumber="7788"
                  description={intl.formatMessage({
                    id: "entities_workingHours24",
                  })}
                />
                <InfoBlock
                  phoneNumber="+48 79 203 32 33"
                  description={intl.formatMessage({
                    id: "entities_workingHours8",
                  })}
                />
              </div>
            </div>
          </div>

          <div className={classNames(styles.card_wrapper, styles.address)}>
            <InfoCard
              title={intl.formatMessage({ id: "entities_legalAddress" })}
              workScheduleFirst={intl.formatMessage({
                id: "entities_legalAddressDescription",
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
        {intl.formatMessage({ id: "entities_footerDescription" })}
      </div>
    </div>
  );
};
