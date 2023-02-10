import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import { categoriesFilterData } from "./categoriesFilterData";

import { Button } from "../../../../../uikit/Button";

import "./ CategoriesBlockStyle.css";

export const CategoriesBlock = () => {
  const [clickedId, setClickedId] = useState(-1);

  return (
    <div className="categories-block-wrapper">
      <h2 className="filter-modal-content-sub-title">
        <FormattedMessage id="operationHistorySubtitleCategories" />
      </h2>
      <div className="categories-block-filter-btn-wrapper">
        {categoriesFilterData.map((filter) => (
          <Button
            key={filter.index}
            onClick={() => {
              setClickedId(filter.index);
            }}
            className={
              filter.index === clickedId
                ? "categories-block-filter-btn-active"
                : "categories-block-filter-btn"
            }
          >
            <FormattedMessage id={filter.nameId} />
          </Button>
        ))}
      </div>
    </div>
  );
};
