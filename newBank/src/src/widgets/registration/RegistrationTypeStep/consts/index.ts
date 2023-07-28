import { COURIER, ONLINE } from "src/shared/consts/Registration";

import { InitialValuesType, OfflineInitialValuesType } from "../types";

export const initialValues: InitialValuesType = {
  registrationType: ONLINE,
};

export const offlineInitialValues: OfflineInitialValuesType = {
  registrationType: COURIER,
};
