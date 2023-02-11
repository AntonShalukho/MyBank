import React, { Dispatch, SetStateAction } from "react";

import classNames from "classnames";

import { FormattedMessage, useIntl } from "react-intl";

import {
  LeftArrow,
  RightArrow,
  ToggleFilters,
} from "../../../components/Icons/index";

import { Button } from "../../../uikit/Button";

import { toggleIsFilterOpen } from "../../../redux/actions/mapActions";

import { useTypedDispatch } from "../../../redux/store/store";

import "./ToggleButtonStyles.css";

export type ToggleButtonProps = {
  mounted: boolean;
  setMounted: Dispatch<SetStateAction<boolean>>;
  showFiltersButton: boolean;
  openMapFilters: boolean;
};

export const ToggleButtons = ({
  mounted,
  setMounted,
  showFiltersButton,
  openMapFilters,
}: ToggleButtonProps) => {
  const intl = useIntl();
  const expand = intl.formatMessage({ id: "expand" });
  const dispatch = useTypedDispatch();
  const toggleMountHandler = () => {
    setMounted((prev) => !prev);
  };

  const clickHandler = () => {
    dispatch(toggleIsFilterOpen());
    !mounted && setMounted(true);
  };

  return (
    <div className="toggle-button-container">
      <Button
        className={classNames("toggle-button", {
          noPopup: mounted,
        })}
        data-content={expand}
        onClick={toggleMountHandler}
      >
        {mounted ? <LeftArrow /> : <RightArrow />}
      </Button>

      {showFiltersButton && (
        <Button
          className={classNames("filter-toggle-button", {
            pressed: openMapFilters,
          })}
          onClick={clickHandler}
        >
          <ToggleFilters />
          <FormattedMessage id="filters" />
        </Button>
      )}
    </div>
  );
};
