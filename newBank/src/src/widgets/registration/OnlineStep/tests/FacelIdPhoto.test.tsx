import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { FaceIDPhoto } from "../components/FaceIDPhoto";

const handleClick = jest.fn();

describe("Rendering SingUpStepOne component", () => {
  beforeEach(() => {
    withProviders(<FaceIDPhoto handleClick={handleClick} />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".container");
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(title as HTMLHeadingElement);
    expect(wrapper).toContainElement(subTitle as HTMLHeadingElement);
  });

  it("Rendering components Headers", () => {
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();

    expect(title).toHaveTextContent("Sign up");
    expect(subTitle).toHaveTextContent(widgetEn.widget_faceIDPhoto);

    expect(title).toHaveClass("title");
    expect(subTitle).toHaveClass("sub_title");
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".container");

    expect(wrapper).toMatchSnapshot();
  });
});
