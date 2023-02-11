import React from "react";

import { FormattedMessage } from "react-intl";

import "./SymbolTracker.css";

type SymbolTrackerProps = {
  len: number;
  limit: number;
  errorMessage: string;
};

export const SymbolTracker = ({
  len,
  limit,
  errorMessage,
}: SymbolTrackerProps) =>
  len <= limit && len > 0 ? (
    <span className="message">{`${len}/${limit}`}</span>
  ) : len > limit ? (
    <span className="message warning">
      <FormattedMessage id={errorMessage} />
    </span>
  ) : null;
