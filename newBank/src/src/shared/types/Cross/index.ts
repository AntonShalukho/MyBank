export type VariantType = "burger" | "cross";

export type CrossProps = {
  handleClick: () => void;
  variant: VariantType;
  className?: string;
  isOpen?: boolean;
};
