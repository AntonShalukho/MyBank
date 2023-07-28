import classNames from "classnames";

import styles from "./Cross.module.css";

type VariantType = "burger" | "cross";
type CrossProps = {
  handleClick: () => void;
  variant: VariantType;
  className?: string;
  isOpen?: boolean;
};

export const Cross = ({
  handleClick,
  variant,
  className,
  isOpen,
}: CrossProps) => {
  const lineClass = `${variant}Line`;
  const buttonClass = `${variant}Button`;

  return (
    <button
      type="button"
      className={classNames(styles[buttonClass], className)}
      onClick={handleClick}
    >
      <span
        className={
          isOpen
            ? classNames(styles[variant], styles.burgerRotated)
            : styles[variant]
        }
      >
        <span className={styles[lineClass]} />
      </span>
    </button>
  );
};
