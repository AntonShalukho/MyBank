import "@testing-library/jest-dom";

import { withProviders } from "../../../../utils/test-utils";

import { ProgressBar } from ".";

import { getStepStylesNum, getStepStylesBtn, StepBoxData } from "./StepBoxData";

import {
  INITIAL_REGISTRATION_STEP,
  ONLINE_REGISTRATION_STEP,
  REGISTRATION_TYPE_REGISTRATION_STEP,
  SIGN_UP_REGISTRATION_STEP,
  FINAL_REGISTRATION_STEP,
} from "../../../../utils/variables";

describe("Rendering ProgressBar component", () => {
  beforeEach(() => {
    withProviders(<ProgressBar />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const container = document.querySelector(".container");
    const crossIcon = document.querySelector(".cross_icon");

    expect(wrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(crossIcon).toBeInTheDocument();

    expect(wrapper).toContainElement(container as HTMLDivElement);
    expect(wrapper).toContainElement(crossIcon as HTMLDivElement);
  });

  it("Rendering components snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});

describe("Check 'getStepStylesNum' function", () => {
  it("Current step", () => {
    const result = getStepStylesNum(StepBoxData[0], INITIAL_REGISTRATION_STEP);

    expect(result).toBe("step_number_previous");
  });

  it("Previous step", () => {
    const result = getStepStylesNum(StepBoxData[1], INITIAL_REGISTRATION_STEP);

    expect(result).toBe("step_number_previous");
  });

  it("Next step", () => {
    const result = getStepStylesNum(
      StepBoxData[1],
      REGISTRATION_TYPE_REGISTRATION_STEP
    );

    expect(result).toBe("step_number_previous");
  });

  it("Current step", () => {
    const result = getStepStylesNum(
      StepBoxData[2],
      REGISTRATION_TYPE_REGISTRATION_STEP
    );

    expect(result).toBe("step_number_previous");
  });

  it("Final step", () => {
    const result = getStepStylesNum(StepBoxData[2], FINAL_REGISTRATION_STEP);

    expect(result).toBe("step_number_previous");
  });

  it("Next step", () => {
    const result = getStepStylesNum(StepBoxData[3], ONLINE_REGISTRATION_STEP);

    expect(result).not.toBe("step_number_next");
  });

  it("Previous step", () => {
    const result = getStepStylesNum(StepBoxData[4], SIGN_UP_REGISTRATION_STEP);

    expect(result).toBe("step_number_next");
  });
});

describe("Check 'getStepStylesBtn' function", () => {
  it("Current step", () => {
    const result = getStepStylesBtn(StepBoxData[0], INITIAL_REGISTRATION_STEP);

    expect(result).toBe("step_button_previous");
  });

  it("Previous step", () => {
    const result = getStepStylesBtn(StepBoxData[1], INITIAL_REGISTRATION_STEP);

    expect(result).toBe("step_button_previous");
  });

  it("Next step", () => {
    const result = getStepStylesBtn(
      StepBoxData[1],
      REGISTRATION_TYPE_REGISTRATION_STEP
    );

    expect(result).toBe("step_button_previous");
  });

  it("Final step", () => {
    const result = getStepStylesBtn(StepBoxData[2], FINAL_REGISTRATION_STEP);

    expect(result).toBe("step_button_previous");
  });

  it("Next step", () => {
    const result = getStepStylesBtn(StepBoxData[3], ONLINE_REGISTRATION_STEP);

    expect(result).not.toBe("step_button_next");
  });

  it("Previous step", () => {
    const result = getStepStylesBtn(StepBoxData[4], SIGN_UP_REGISTRATION_STEP);

    expect(result).not.toBe("step_button_previous");
  });
});
