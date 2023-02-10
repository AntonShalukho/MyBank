import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import { screen, render, fireEvent } from "@testing-library/react";

import { Confirmation } from "./index";

import { localeContent } from "../../translation/languages";

describe("Confirmation component", () => {
  it("renders content correctly", () => {
    const handleBtnClick = jest.fn();
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Confirmation onButtonClick={handleBtnClick}>
          <p>You successfully registered in Affinity Online Bank!</p>
        </Confirmation>
      </IntlProvider>
    );

    const heading = screen.getByText(/congratulations/i);
    expect(heading).toBeInTheDocument();
    const message = screen.getByText(/successfully registered/i);
    expect(message).toBeInTheDocument();
  });

  it("calls onButtonClick prop when clicked", () => {
    const handleBtnClick = jest.fn();
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Confirmation onButtonClick={handleBtnClick}>
          <p>You successfully registered in Affinity Online Bank!</p>
        </Confirmation>
      </IntlProvider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleBtnClick).toHaveBeenCalledTimes(1);
  });
});
