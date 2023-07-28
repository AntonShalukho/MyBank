import React, { useState } from "react";

import classNames from "classnames";

import { FormattedMessage } from "react-intl";

import { OpenNow } from "../../../components_v2/Icon";

import { Button } from "../../../uikit/Button";

import { getCurrentWortkingTime } from "../../../utils/normalizeBranchDataHelpers";

import { BankType } from "../../../redux/types/mapTypes";

import "./WorkingHoursStyles.css";

const days = [
  { dayId: "mon", number: 1 },
  { dayId: "tue", number: 2 },
  { dayId: "wed", number: 3 },
  { dayId: "thu", number: 4 },
  { dayId: "fri", number: 5 },
  { dayId: "sat", number: 6 },
  { dayId: "sun", number: 0 },
];

export type WorkingHoursProps = {
  bank: BankType;
};

export const WorkingHours = ({ bank }: WorkingHoursProps) => {
  const today = new Date().getDay();
  const [activeDay, setActiveDay] = useState(today);
  const clickHandler = (day: number) => {
    setActiveDay(day);
  };
  return (
    <div className="working-hours-container">
      <h5>
        <FormattedMessage id="workingHours" />
      </h5>
      <div className="day-buttons-container">
        {days.map((el) => (
          <Button
            onClick={() => clickHandler(el.number)}
            key={el.number}
            className={classNames("day-button", {
              today: today === el.number,
              pressed: activeDay === el.number,
            })}
          >
            <FormattedMessage id={el.dayId} />
          </Button>
        ))}
      </div>
      <div className="time-of-work-block">
        <OpenNow />
        {getCurrentWortkingTime(bank!, activeDay)}
      </div>
    </div>
  );
};
