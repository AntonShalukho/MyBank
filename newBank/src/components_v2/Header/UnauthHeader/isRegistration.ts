import { SIGN_UP } from "../../../utils/variables";

export const isRegistrationProcess = (pathname: string): boolean =>
  pathname.split("/")[1] === SIGN_UP;
