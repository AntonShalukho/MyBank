import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { BlockTitle } from ".";

const text = "This is Block Title";

describe("Rendering BlockTitle component", () => {
  beforeEach(() => {
    withProviders(<BlockTitle title={text} />);
  });

  it("Rendering Block Title", () => {
    const title = document.querySelector(".title");
    expect(title).toBeInTheDocument();
  });

  it("Checking if Block Title has the text content ", () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("This is Block Title");
  });

  it("Checking if Block Title has the className ", () => {
    const title = screen.getByText("This is Block Title");
    expect(title).toHaveAttribute("class", "title");
  });

  it("BlockTitle snapshot", () => {
    withProviders(<BlockTitle title={text} />);
    expect(BlockTitle).toMatchSnapshot();
  });
});
