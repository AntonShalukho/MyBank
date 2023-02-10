import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import { screen, render, fireEvent } from "@testing-library/react";

import { Modal } from "./index";

import { localeContent } from "../../translation/languages";

describe("Modal component", () => {
  it("renders content correctly", () => {
    const handleBackClick = jest.fn();
    const handleClose = jest.fn();
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Modal onBackClick={handleBackClick} onClose={handleClose}>
          <div data-testid="modal-content">
            <h1>Header</h1>
            <div>Form</div>
          </div>
        </Modal>
      </IntlProvider>
    );

    const content = screen.getByTestId("modal-content");
    expect(content.children).toHaveLength(2);
    expect(content.firstChild).toHaveTextContent("Header");
    expect(content.lastChild).toHaveTextContent("Form");
  });

  it("calls onBackClick prop when clicked", () => {
    const handleBackClick = jest.fn();
    const handleClose = jest.fn();
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Modal onBackClick={handleBackClick} onClose={handleClose}>
          <h1>Header</h1>
          <div>Form</div>
        </Modal>
      </IntlProvider>
    );

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(handleBackClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClose prop when clicked", () => {
    const handleBackClick = jest.fn();
    const handleClose = jest.fn();
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Modal onBackClick={handleBackClick} onClose={handleClose}>
          <h1>Header</h1>
          <div>Form</div>
        </Modal>
      </IntlProvider>
    );

    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
