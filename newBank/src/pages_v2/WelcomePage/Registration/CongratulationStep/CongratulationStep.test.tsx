import "@testing-library/jest-dom";

import { withProviders } from "../../../../utils/test-utils";

import { CongratulationStep } from ".";

describe("Rendering CongratulationStep component", () => {
  beforeEach(() => {
    withProviders(<CongratulationStep />);
  });

  it("Rendering component popup", () => {
    const popup = document.querySelector(".popup");
    const wrapper = document.querySelector(".wrapper");

    expect(popup).toBeInTheDocument();
    expect(wrapper).toBeInTheDocument();

    expect(popup).toContainElement(wrapper as HTMLDivElement);
  });

  it("Rendering component wrapper and wrapped element", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const confetti = document.querySelector(".confetti");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Congratulations!");

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Your form has been sent successfully!"
    );

    expect(confetti).toBeInTheDocument();

    expect(wrapper).toContainElement(title as HTMLDivElement);
    expect(wrapper).toContainElement(description as HTMLDivElement);
  });

  it("Snapshot", () => {
    const popup = document.querySelector(".popup");

    expect(popup).toMatchSnapshot();
  });
});
