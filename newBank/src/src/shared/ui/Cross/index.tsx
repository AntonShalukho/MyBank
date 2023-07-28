import classNames from "classnames";

import { CrossProps } from "../../types/Cross";

import styles from "./Cross.module.scss";

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
