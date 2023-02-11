import React from "react";

import { Button } from "../../uikit/Button";

import { EditorIcon } from "../Icons";

import styles from "./EditorButton.module.css";

type EditorButtonProps = {
  onClick: () => void;
};

export const EditorButton = ({ onClick }: EditorButtonProps) => (
  <Button className={styles.backButton} onClick={onClick}>
    <EditorIcon />
  </Button>
);
