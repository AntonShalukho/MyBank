import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { FaceIdentify } from ".";

describe("Rendering FaceIdentify component", () => {
  beforeEach(() => {
    withProviders(<FaceIdentify />);
  });

  it("Rendering FaceIdentify components container", () => {
    const container = document.querySelector(".container");
    const faceId = document.querySelector(".face_id");
    const title = document.querySelector(".title");
    const subTitle = document.querySelector(".sub_title");

    expect(container).toBeInTheDocument();
    expect(container).toContainElement(faceId as HTMLDivElement);
    expect(container).toContainElement(title as HTMLHeadElement);
    expect(container).toContainElement(subTitle as HTMLHeadElement);
  });

  it("Rendering FaceIdentify components headers", () => {
    const title = document.querySelector(".title");
    const subTitle = document.querySelector(".sub_title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Sign up");

    expect(subTitle).toBeInTheDocument();
    expect(subTitle).toHaveTextContent(
      "Please take a photo of yourself while holding your ID/ Passport."
    );
  });

  it("Rendering FaceIdentify components face_id block", () => {
    const faceId = document.querySelector(".face_id");
    const video = document.querySelector(".icon");
    const canvas = document.querySelector(".canvas");
    const description = document.querySelector(".description");
    const button = screen.getByRole("button");

    expect(faceId).toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect(canvas).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(faceId).toContainElement(video as HTMLVideoElement);
    expect(faceId).toContainElement(canvas as HTMLCanvasElement);

    expect(description).toHaveTextContent(
      "Your ID must be the same as the one used for identify verification."
    );
    expect(button).toHaveTextContent("Continue");

    expect(button).toHaveClass("primarySmall button");
  });

  it("Face identify components snapshot", () => {
    const container = withProviders(<FaceIdentify />);

    expect(container).toMatchSnapshot();
  });
});
