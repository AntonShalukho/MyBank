import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { CopyField } from "../index";

import { withProviders } from "../../../lib/test-utils";

describe("CopyField block en-us", () => {
  beforeEach(() => {
    withProviders(<CopyField />);
  });

  it("Rendered copy field didn't confirm", () => {
    withProviders(<CopyField />);

    const copyFieldTest = document.querySelector(".copy_field");

    expect(copyFieldTest).toBeInTheDocument();
    expect(copyFieldTest).toHaveClass("copy_field");
    expect(copyFieldTest).not.toHaveClass("copy_fields");
  });

  it("Is rendered text 'Copied' ", () => {
    const interest = screen.getByText("Copied");

    expect(interest).toBeInTheDocument();
    expect(interest).toHaveTextContent("Copied");
    expect(interest).toHaveClass("copy_field");
  });
});

it("CopyField snapshot", () => {
  const copyField = withProviders(<CopyField />);

  expect(copyField).toMatchSnapshot();
});
