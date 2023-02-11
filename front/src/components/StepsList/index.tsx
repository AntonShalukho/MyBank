import React from "react";

type StepsListType = {
  steps: string[];
  activeStep: number;
};

export const StepsList = ({ steps, activeStep }: StepsListType) => (
  <li className="recovery-form-body_step_container">
    {steps.map((step, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={`recovery-form-body_step-border ${
          (index || "") <= (activeStep || "") ? "active-step" : ""
        }`}
      >
        <span className="recovery-form-body_progress_text">{step}</span>
        <span
          className={`recovery-form-progress_ellipse ${
            (index || "") <= (activeStep || "") ? "active-ellipse" : ""
          }`}
        />
      </div>
    ))}
  </li>
);
