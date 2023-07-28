import styles from "./Stores.module.scss";

import { stores } from "./storesData";

export const Stores = () => (
  <ul className={styles.list}>
    {stores.map((item) => (
      <li key={item.link}>
        <a className={styles.item} href={undefined} rel="noreferrer">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);
