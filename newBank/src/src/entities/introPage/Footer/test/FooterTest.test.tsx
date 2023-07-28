import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { entitiesEn } from "src/entities/assets/translation/entitiesEn";

import { Footer } from "..";

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
      entitiesEn.entities_footerDescription
    );
  });

  it("Footer snapshot", () => {
    const container = withProviders(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
