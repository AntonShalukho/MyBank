import "@testing-library/jest-dom";

import { withProviders } from "../../utils/test-utils";

import { Footer } from ".";

describe("Rendering Footer component", () => {
  beforeEach(() => {
    withProviders(<Footer />);
  });

  it("Rendering all containers", () => {
    const mainContainer = document.querySelector(".container");
    const topContainer = document.querySelector(".top_container");
    const middleContainer = document.querySelector(".middle_container");
    const bottomContainer = document.querySelector(".bottom_container");

    expect(mainContainer).toBeInTheDocument();
    expect(topContainer).toBeInTheDocument();
    expect(middleContainer).toBeInTheDocument();
    expect(bottomContainer).toBeInTheDocument();
  });

  it("Rendering components on The Top of Footer", () => {
    const logoWrapper = document.querySelector(".logo_wrapper");
    const mainLogoIcon = document.querySelector(".icon");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");

    expect(logoWrapper).toBeInTheDocument();
    expect(logoWrapper).toContainElement(mainLogoIcon as HTMLDivElement);
    expect(logoWrapper).toContainElement(title as HTMLDivElement);
    expect(logoWrapper).toContainElement(description as HTMLDivElement);
  });

  it("Rendering components on The Middle of Footer", () => {
    const middleWrapper = document.querySelector(".middle_container");
    const cardWrapper = document.querySelector(".card_wrapper");
    const blockWrapper = document.querySelector(".block_wrapper");

    expect(middleWrapper).toBeInTheDocument();
    expect(middleWrapper).toContainElement(cardWrapper as HTMLDivElement);
    expect(middleWrapper).toContainElement(blockWrapper as HTMLDivElement);
  });

  it("Rendering The Text on The Bottom of Footer", () => {
    const BottomWrapper = document.querySelector(".bottom_container");
    expect(BottomWrapper).toBeInTheDocument();

    expect(BottomWrapper).toHaveTextContent(
      "If you would like to find out more about which BeeBank entity you receive services from, or if you have any other questions, please reach out to us via the in-app chat in the BeeBank app. BeeBank Ltd (No. 08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance related-products are arranged by BeeBank Travel Ltd which is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FCA No: 780586) and by BeeBank Ltd, an Appointed Representative of BeeBank Travel Ltd in relation to insurance distribution activities. Trading and investment products are provided by BeeBank Trading Ltd (No. 832790) is wholly owned subsidiary of BeeBank Ltd and is an appointed representative of Resolution Compliance Ltd which is authorised and regulated by the Financial Conduct Authority."
    );
  });

  it("Footer snapshot", () => {
    withProviders(<Footer />);
    expect(Footer).toMatchSnapshot();
  });
});
