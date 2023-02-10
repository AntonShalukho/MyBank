import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import { screen, render } from "@testing-library/react";

import { LinksFooter } from "./index";

import { localeContent } from "../../translation/languages";

describe("Footer component", () => {
  beforeEach(() => {
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <LinksFooter />
      </IntlProvider>
    );
  });

  it("renders copyright", () => {
    const copyrightText = screen.getByText(/Affinity Bank/);
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders two app links", () => {
    const appLinks = screen.getAllByRole(/link/);
    expect(appLinks).toHaveLength(2);
  });

  it("renders mobile icons description", () => {
    const iconsDesc = screen.getByText("Mobile application");
    expect(iconsDesc).toBeInTheDocument();
  });

  it("Android mobile icon leads to Google Play Store", () => {
    const androidLink = screen.getAllByRole("link")[0];
    expect(androidLink).toHaveAttribute(
      "href",
      "https://play.google.com/store"
    );
  });

  it("Apple mobile icon leads to Apple App Store", () => {
    const appleLink = screen.getAllByRole("link")[1];
    expect(appleLink).toHaveAttribute("href", "https://www.apple.com/store");
  });
});
