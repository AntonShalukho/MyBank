export type ErrorsListTypeProps = {
  errors: string[] | string;
};

export type VariantType = "short" | "long" | "long_With_Hide_Icon" | "password";

export type InputProps = {
  name: string;
  variant: VariantType;
  label?: string;
  counter?: React.ReactNode | string;
  isPermanentCounter?: boolean;
  errors?: string[];
  placeholder?: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
  getAllowToInputRef?: (ref: React.RefObject<HTMLInputElement>) => void;
};
