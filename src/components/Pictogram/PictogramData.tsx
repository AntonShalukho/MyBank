import React from "react";

import { FormattedMessage } from "react-intl";

import { Contacts, DollarVector, LocationIcon } from "../Icons";

export const pictogramData = [
  {
    componentIcon: <LocationIcon />,
    text: <FormattedMessage id="firstPictogram" />,
    id: 1,
    link: "atms",
  },
  {
    componentIcon: <DollarVector />,
    text: <FormattedMessage id="secondPictogram" />,
    id: 2,
    link: "rates",
  },
  {
    componentIcon: <Contacts />,
    text: <FormattedMessage id="thirdPictogram" />,
    id: 3,
    link: "contacts",
  },
];
