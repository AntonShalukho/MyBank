export type ButtonType = "button" | "submit" | "reset";

export type VariantType =
  | "primarySmall"
  | "secondarySmall"
  | "primaryThick"
  | "secondaryThick"
  | "advertisement"
  | "default";

export type ButtonProps = {
  variant: VariantType;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
  name?: string;
  id?: string;
};
