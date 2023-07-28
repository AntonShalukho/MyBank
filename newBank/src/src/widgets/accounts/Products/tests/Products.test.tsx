import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { screen } from "@testing-library/react";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { Products } from "..";

import { getAccountProducts } from "../api/getAccountProducts";

import { ProductResponseType } from "../types";

const responseBody = [
  {
    name: "Current",
    description: "I am description",
  },
];

jest.mock("../api/getAccountProducts");

describe("Rendering Products component", () => {
  beforeEach(() => {
    const mockGetUserDetails = getAccountProducts as jest.MockedFunction<
      typeof getAccountProducts
    >;
    mockGetUserDetails.mockImplementation(() =>
      Promise.resolve<ProductResponseType[]>(responseBody)
    );
  });

  it("Rendering numbers of products", async () => {
    withProviders(<Products />);
    const container = document.querySelectorAll(".container");

    expect(container).toHaveLength(1);

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
    expect(container[0]).toContainElement(button);
    expect(button).toHaveTextContent(widgetEn.widget_openAccount);
    expect(button).toHaveClass("primarySmall button");

    const card = await screen.findByRole("list");
    expect(card).toBeInTheDocument();
    expect(container[0]).toContainElement(card);

    const headerName = await screen.findByRole("heading", { level: 1 });
    expect(headerName).toHaveTextContent("Current");
    expect(headerName).toHaveClass("title");

    const desc = await document.querySelector(".description");
    expect(desc).toHaveTextContent("I am description");

    expect(await container[0]).toMatchSnapshot();
  });
});
