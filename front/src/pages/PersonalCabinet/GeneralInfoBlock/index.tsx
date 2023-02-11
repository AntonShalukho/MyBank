import React from "react";
import { FormattedMessage } from "react-intl";

import "./GeneralInfoBlockStyles.css";

type GeneralInfoProps = {
  headerId: string;
  text?: string;
};
export const GeneralInfoBlock = ({ headerId, text }: GeneralInfoProps) => (
  <div className="general-info-block">
    <h4>
      <FormattedMessage id={headerId} />
    </h4>
    <p>{text}</p>
  </div>
);
