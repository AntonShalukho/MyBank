import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { OnlineStep } from "..";

describe("Rendering SingUpStepFive component", () => {
  beforeEach(() => {
    withProviders(<OnlineStep />);
  });

  it("Rendering basic structure of component", () => {
    const container = document.querySelector(".container");
    const step = document.querySelector(".sub_title");

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();

    expect(step).toBeInTheDocument();
    expect(step).toHaveTextContent(widgetEn.widget_cameraMessage);
    expect(container).toContainElement(step as HTMLHeadElement);
  });

  it("SnapShot of SingUpStepFive component", () => {
    const container = withProviders(<OnlineStep />);

    expect(container).toMatchSnapshot();
  });
});
