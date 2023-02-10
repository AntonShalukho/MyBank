import React, { useState, useRef, forwardRef, MutableRefObject } from "react";

import { useClickOutside } from "../../utils/useClickOutside";

import { Button } from "../../uikit/Button";

import { TickDropdown, ArrowDownDropdown } from "../Icons";

import "./DropdownStyles.css";

type DropdownItem = {
  id: number;
  value: string | JSX.Element;
};

type DropdownProps = {
  title?: string;
  items: DropdownItem[];
  selectedOption?: JSX.Element | string;
  getSelectedOption: (id: number) => void;
};

export const Dropdown = forwardRef(
  ({ title, items, selectedOption, getSelectedOption }: DropdownProps, ref) => {
    const [open, setOpen] = useState(false);
    const [itemFocused, setItemFocused] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useClickOutside(wrapperRef as MutableRefObject<HTMLDivElement>, () =>
      setOpen(false)
    );

    const handleToggle = (toggle: boolean) => {
      setOpen(toggle);
    };

    const handleClick = (item: DropdownItem) => {
      getSelectedOption(item.id);
      setItemFocused(-1);
      setOpen(false);
    };

    const handleFocus = (item: DropdownItem) => {
      setItemFocused(item.id);
    };

    const handleMouseEnter = (item: DropdownItem) => {
      setItemFocused(item.id);
    };

    const handleMouseLeave = () => {
      setItemFocused(-1);
    };

    return (
      <>
        {title ? (
          <div className="dropdown-label">
            <p>{title}</p>
          </div>
        ) : null}
        <div className="dropdown-wrapper" ref={wrapperRef}>
          <div
            className="dropdown-header"
            tabIndex={0}
            ref={ref as MutableRefObject<HTMLDivElement>}
            role="button"
            onKeyPress={() => handleToggle(!open)}
            onClick={() => handleToggle(!open)}
          >
            <div className="dropdown-selected">{selectedOption}</div>
            <div className="dropdown-arrow">
              <ArrowDownDropdown />
            </div>
          </div>
          {open && (
            <div className="dropdown-list">
              <ul>
                {items.map((item) => (
                  <li className="dropdown-list-item" key={item.id}>
                    <Button
                      variant="dropdown"
                      className="dropdown-list-item--button"
                      onClick={() => handleClick(item)}
                      onFocus={() => handleFocus(item)}
                      onBlur={() => setItemFocused(-1)}
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div>{item.value}</div>
                      <div>{itemFocused === item.id && <TickDropdown />}</div>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
);
