/* eslint-disable react/no-array-index-key */
import React from "react";

import { FormattedMessage } from "react-intl";

import { CurrencyBlock } from "../CurrencyBlock";

import { icons } from "../constants";

import "./TableStyles.css";

const exchangeRateColNames = ["currency", "buying", "selling"];

export const Table = ({ rates }: { rates: string[][] | undefined }) => {
  const exchangeRateRows =
    rates &&
    rates.map((currency) => {
      const currencyName = currency[0];

      return [
        <CurrencyBlock
          key={currencyName}
          abbr={currencyName}
          icon={icons[currencyName]}
          name={currencyName}
          textDirection="column"
        />,
        currency[1],
        currency[2],
      ];
    });

  return (
    <table className="table">
      <tbody className="table-body">
        <tr>
          {exchangeRateColNames.map((name) => (
            <td key={name} className="table-cell">
              <FormattedMessage id={name} />
            </td>
          ))}
        </tr>
        {exchangeRateRows &&
          exchangeRateRows.map((row, index) => (
            <tr key={index} className="table-row">
              {row.map((elem, id) => (
                <td key={id} className="table-cell">
                  {elem}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
