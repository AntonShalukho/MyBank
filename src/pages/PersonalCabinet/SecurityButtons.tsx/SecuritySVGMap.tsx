import {
  ChangePasswordIcon,
  SecretQuestionIcon,
} from "../../../components/Icons";

export const SecuritySVGMap = {
  changePassword: ChangePasswordIcon,
  changeSecurityQuestion: SecretQuestionIcon,
};

export type SecuritySVGMapKeyType = keyof typeof SecuritySVGMap;
