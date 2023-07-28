import { SIGN_UP } from "../../../shared/consts/Registration";

export const isRegistrationProcess = (pathname: string): boolean =>
  pathname.split("/")[1] === SIGN_UP;
