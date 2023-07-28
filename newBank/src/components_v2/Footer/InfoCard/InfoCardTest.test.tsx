import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { FormattedMessage } from "react-intl";

import { withProviders } from "../../../utils/test-utils";

import { InfoCard } from ".";

describe("Rendering InfoCard component", () => {
  beforeEach(() => {
    withProviders(
      <InfoCard
        title={<FormattedMessage id="cardSupport" />}
        workScheduleFirst={<FormattedMessage id="legalAddressDescription" />}
      />
    );
  });

  it("Rendering all elements", () => {
    const title = document.querySelector(".title");
    const schedule = document.querySelector(".schedule");

    expect(title).toBeInTheDocument();
    expect(schedule).toBeInTheDocument();
  });

  it("Checking title", () => {
    const cardTitle = screen.getByRole("heading", { level: 3 });

    expect(cardTitle).toHaveAttribute("class", "title");
    expect(cardTitle).not.toBeEmptyDOMElement();
    expect(cardTitle).toHaveTextContent("Cards support");
  });

  it("InfoCard snapshot", () => {
    withProviders(
      <InfoCard
        title={<FormattedMessage id="cardSupport" />}
        workScheduleFirst={<FormattedMessage id="legalAddressDescription" />}
      />
    );
    expect(InfoCard).toMatchSnapshot();
  });
});
