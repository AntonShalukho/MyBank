import { Button } from "../Button";

import { EditorIcon } from "../../assets/icons";

type EditorButtonProps = {
  onClick: () => void;
};

export const EditorButton = ({ onClick }: EditorButtonProps) => (
  <Button variant="primarySmall" onClick={onClick}>
    <EditorIcon />
  </Button>
);
