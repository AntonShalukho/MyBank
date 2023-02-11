import React from "react";

import { FormattedMessage } from "react-intl";

import { BankType, Filter, FilterData } from "../../../redux/types/mapTypes";

import { SVGMap } from "../MapFilters/SVGMap";

import "./ServicesListStyles.css";

export type ServicesListProps = {
  bank: BankType;
  filtersList: FilterData;
};

export const ServicesList = ({ bank, filtersList }: ServicesListProps) => {
  const services = filtersList.filters.reduce((acc: Filter[], filter) => {
    if (filter.backendKey in bank!.services) acc.push(filter);
    return acc;
  }, []);
  if (!services.length) return null;
  return (
    <div className="filters-list">
      <h5>
        <FormattedMessage id={filtersList.headerId} />
      </h5>
      {services.map((filter) => {
        const Icon = SVGMap[filter.nameId];
        return (
          <div className="filter-property" key={filter.backendKey}>
            <div className="svg-container">
              <Icon />
            </div>
            <div>
              <FormattedMessage id={filter.nameId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
