import React, {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from "react";

import { useIntl } from "react-intl";

import { useClickOutside } from "../../utils/hooks/useClickOutside";

import { Button } from "../../uikit/Button/index";

import { SVGKeyType, SVGMap } from "../../pages_v2/MapPage/MapFilters/SVGMap";

import "./SelectionStyles.css";

export type ItemForSelection = {
  id: number;
  value: string;
  iconName: SVGKeyType;
};

export type SelectionProps = {
  selections: ItemForSelection[] | null;
  className?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  selectHandler: (id: number) => void;
  enterPressHandler: (value: string) => void;
  placeholderTextId: string;
};

export const Selection: React.FC<
  SelectionProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  selections,
  selectHandler,
  changeHandler,
  enterPressHandler,
  className,
  value,
  placeholderTextId,
  ...props
}) => {
  const selectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  useClickOutside(selectionRef, () => setOpen(false));

  const onClick = (id: number) => {
    setOpen(false);
    if (id < 0) return;
    selectHandler(id);
  };

  const onFocus = () => {
    setOpen(true);
  };

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      enterPressHandler(event.currentTarget.value);
      setOpen(false);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    changeHandler(event);
  };

  return (
    <div ref={selectionRef} className={`selection-container ${className}`}>
      <input
        className="selection-input"
        onFocus={onFocus}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        placeholder={intl.formatMessage({ id: placeholderTextId })}
        {...props}
      />
      {open && selections && value && (
        <div className="selection-list">
          <ul>
            {selections.map((selection) => {
              const Icon = SVGMap[selection.iconName];
              return (
                <li className="selection-list-item" key={selection.id}>
                  <Button
                    variant="dropdown"
                    className="selection-button"
                    onClick={() => onClick(selection.id)}
                  >
                    <div className="selection-button-content">
                      <Icon />
                      {selection.value}
                    </div>
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
