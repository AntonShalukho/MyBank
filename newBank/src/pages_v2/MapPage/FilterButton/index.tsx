import React, { MouseEventHandler, ReactNode } from "react";

import classNames from "classnames";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { setFilters } from "../../../redux/actions/mapActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { createActiveServiceSelector } from "../../../redux/selectors/mapSelectors";

import { Button } from "../../../uikit/Button";

import { SVGKeyType, SVGMap } from "../MapFilters/SVGMap";

import "./FilterButtonStyles.css";

export type FilterButtonProps = {
  nameId: SVGKeyType;
  backendKey: string;
};
export const FilterButton = ({ nameId, backendKey }: FilterButtonProps) => {
  const selectActiveService = createActiveServiceSelector(backendKey);
  const isActive = useSelector(selectActiveService);
  const Icon = SVGMap[nameId];
  const dispatch = useTypedDispatch();
  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setFilters(backendKey));
  };
  return (
    <Button
      onClick={clickHandler}
      className={classNames("filter-button", {
        pressed: isActive,
      })}
    >
      <>
        <Icon />
        <div>
          <FormattedMessage id={nameId} />
        </div>
      </>
    </Button>
  );
};
