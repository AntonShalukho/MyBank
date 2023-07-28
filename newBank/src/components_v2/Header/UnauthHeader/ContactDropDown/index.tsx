import React from "react";

import { useIntl } from "react-intl";

import { NumberBlock } from "./NumberBlock";

import phone from "../../../../uikit_v2/static/phone.png";

import binoculars from "../../../../uikit_v2/static/binoculars.png";

import { ContactDropDownType } from "../../types";

import { Cross } from "../../../../uikit_v2/Cross";

import styles from "./ContactDropDown.module.css";

export const ContactDropDown = ({ handleDropDown }: ContactDropDownType) => {
  const intl = useIntl();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.top_header}>
          <div className={styles.top_title}>
            <img src={phone} alt="phone" />
            {intl.formatMessage({ id: "ourPhones" })}
          </div>
          <Cross handleClick={handleDropDown} variant="cross" />
        </div>
        <div className={styles.top_content}>
          <NumberBlock
            title="7788"
            content={intl.formatMessage({ id: "workingHours24" })}
          />
          <NumberBlock
            title="+48 79 203 32 33"
            content={intl.formatMessage({ id: "workTime" })}
          />
        </div>
      </div>
      <hr className={styles.dr} />
      <div className={styles.bottom}>
        <div className={styles.bottom_header}>
          <div className={styles.top_title}>
            <img src={binoculars} alt="binoculars" />
            {intl.formatMessage({ id: "wayForFind" })}
          </div>
        </div>
        <div className={styles.top_content}>
          <div className={styles.online}>
            {intl.formatMessage({ id: "chatUs" })}
            <div className={styles.online_field}>
              {intl.formatMessage({ id: "signUpOptionOnlineTitle" })}
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.title}>
              {intl.formatMessage({ id: "contactTitle" })}
            </div>
            <div className={styles.context}>
              {intl.formatMessage({ id: "findOnMap" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
