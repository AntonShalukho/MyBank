import React from "react";

import { FormattedMessage } from "react-intl";

import { FilterData } from "../../../redux/types/mapTypes";

import { FilterButton } from "../FilterButton";

import "./FiltersBlockStyles.css";

export const FiltersBlock = ({ headerId, filters }: FilterData) => (
  <>
    <h4>
      <FormattedMessage id={headerId} />
    </h4>
    <div className="filter-button-container">
      {filters.map((filter) => (
        <FilterButton {...filter} key={filter.nameId} />
      ))}
    </div>
  </>
);
