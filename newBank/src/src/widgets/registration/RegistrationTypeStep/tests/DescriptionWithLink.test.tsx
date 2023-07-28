import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";
import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { screen } from "@testing-library/react";

import { DescriptionWithLink } from "../components/DescriptionWithLink";

describe("Rendering DescriptionWithLink component", () => {
  it("Render elements", () => {
    withProviders(<DescriptionWithLink />);
    const description = document.querySelector(".description");
    const link = screen.getByRole("link");

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(widgetEn.widget_officeStart);
    expect(description).toHaveTextContent(widgetEn.widget_officeEnd);
    expect(description).toContainElement(link);

    expect(link).toHaveTextContent(widgetEn.widget_officeLink);
  });

  it("Get snapshot", () => {
    const description = document.querySelector(".description");

    expect(description).toMatchSnapshot();
  });
});
