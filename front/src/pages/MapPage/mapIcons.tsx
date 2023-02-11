import { Icon } from "leaflet";

import ATMMarker from "../../uikit/static/atm.svg";
import ATMActiveMarker from "../../uikit/static/atmActive.svg";
import OfficeMarker from "../../uikit/static/office.svg";
import OfficeActiveMarker from "../../uikit/static/officeActive.svg";
import TerminalMarker from "../../uikit/static/terminal.svg";
import TerminalActiveMarker from "../../uikit/static/terminalActive.svg";
import Marker from "../../uikit/static/marker.svg";

export const ATM = new Icon({
  iconUrl: ATMMarker,
  iconSize: [40, 40],
});

export const ATMActive = new Icon({
  iconUrl: ATMActiveMarker,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

export const Office = new Icon({
  iconUrl: OfficeMarker,
  iconSize: [40, 40],
});

export const OfficeActive = new Icon({
  iconUrl: OfficeActiveMarker,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

export const Terminal = new Icon({
  iconUrl: TerminalMarker,
  iconSize: [40, 40],
});

export const TerminalActive = new Icon({
  iconUrl: TerminalActiveMarker,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

export const LocationDot = new Icon({
  iconUrl: Marker,
  iconSize: [60, 60],
});

export const iconsMap: { [key: string]: Icon } = {
  ATM,
  Bankbranch: Office,
  Terminal,
};

export const iconsMapActive: { [key: string]: Icon } = {
  ATM: ATMActive,
  Bankbranch: OfficeActive,
  Terminal: TerminalActive,
};
