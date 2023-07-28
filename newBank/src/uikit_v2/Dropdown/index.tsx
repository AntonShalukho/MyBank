import React, { useState, useRef, forwardRef, MutableRefObject } from "react";

import { string } from "yup";

import { useClickOutside } from "../../utils/hooks/useClickOutside";

import { Button } from "../../uikit/Button";

import { TickDropdown, ArrowDownDropdown } from "../../components_v2/Icon";

import styles from "./Dropdown.module.css";

type DropdownItem = {
  id: number;
  value: string | JSX.Element;
  productName: string;
};

type DropdownProps = {
  title?: string;
  items: DropdownItem[];
  selectedOption?: JSX.Element | string;
  onItemClick: (id: number) => void;
};

export const DropdownNewVision = forwardRef(
  ({ title, items, selectedOption, onItemClick }: DropdownProps, ref) => {
    const [open, setOpen] = useState(false);
    const [itemFocused, setItemFocused] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useClickOutside(wrapperRef as MutableRefObject<HTMLDivElement>, () =>
      setOpen(false)
    );

    const handleToggle = () => {
      setOpen(!open);
    };

    const handleClick = (item: DropdownItem) => {
      onItemClick(item.id);
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
      <div>
        {title && <div className={styles.dropdown_label}>{title}</div>}
        <div className={styles.dropdown_wrapper} ref={wrapperRef}>
          <div
            className={styles.dropdown_header}
            tabIndex={0}
            ref={ref as MutableRefObject<HTMLDivElement>}
            role="button"
            onKeyDown={handleToggle}
            onClick={handleToggle}
          >
            <div className={styles.dropdown_selected}>{selectedOption}</div>
            <div className={styles.dropdown_arrow}>
              <ArrowDownDropdown />
            </div>
          </div>
          {open && (
            <div className={styles.dropdown_list}>
              <ul>
                {items.map((item) => (
                  <li className={styles.dropdown_list_item} key={item.id}>
                    <Button
                      variant="dropdown"
                      className={styles.dropdown_list_item_button}
                      onClick={() => handleClick(item)}
                      onFocus={() => handleFocus(item)}
                      onBlur={() => setItemFocused(-1)}
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div>{item.value}</div>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
);
