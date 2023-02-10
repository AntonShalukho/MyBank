import React, { ReactNode } from "react";

import { Link } from "../Link";

import "./PictogramStyles.css";

type PictogramProps = {
  componentIcon: ReactNode;
  text: JSX.Element;
  id?: number | string;
  link: string;
  closeBurgerMenu: () => void;
};

export const Pictogram = ({
  componentIcon,
  text,
  id,
  link,
  closeBurgerMenu,
}: PictogramProps) => (
  <>
    <li className="pictogram-list" key={id}>
      {componentIcon}
      <Link to={link} className="pictogram-link" onClick={closeBurgerMenu}>
        <p className="pictogram-text"> {text}</p>
      </Link>
    </li>
  </>
);
