import React from "react";

import "@testing-library/jest-dom";

import { screen, render, fireEvent } from "@testing-library/react";

import { BlockSeven } from "./index";

import { withProviders } from "../../../../utils/test-utils";

import { Mountain } from "../../../../components_v2/Icon";

describe("Intro Page Block Seven", () => {
  beforeEach(() => {
    withProviders(<BlockSeven />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".container");
    const wrapper = document.querySelector(".wrapper");
    const blockRight = document.querySelector("block_right");
    const blockLeft = document.querySelector("block_left");
    expect(container).toBeInTheDocument;
    expect(wrapper).toBeInTheDocument;
    expect(blockRight).toBeInTheDocument;
    expect(blockLeft).toBeInTheDocument;
  });

  it("Is rendered 'Mountain' ", () => {
    render(<Mountain />);
    const mountain = screen.getByDisplayValue;
    expect(mountain).toBeInTheDocument;
  });
});

it("BlockSeven snapshot", () => {
  const blockSeven = withProviders(<BlockSeven />);

  expect(blockSeven).toMatchSnapshot();
});
