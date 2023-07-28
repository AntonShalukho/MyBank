import {
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

type FinalAgreementRequestType = Pick<
  RegistrationRequestType,
  "uuid" | "agreement"
>;
type FinalAgreementResponseType = Pick<
  RegistrationResponseType,
  "uuid" | "Step"
>;

export type SendFinalAgreementType = (
  data: FinalAgreementRequestType
) => Promise<FinalAgreementResponseType>;
