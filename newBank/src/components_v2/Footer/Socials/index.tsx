import React from "react";

import styles from "./Socials.module.css";

import { socials } from "./socialsData";

export const Socials = () => (
  <ul className={styles.list}>
    {socials.map((item) => (
      <li key={item.link}>
        <a className={styles.item} href={undefined} rel="noreferrer">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);
