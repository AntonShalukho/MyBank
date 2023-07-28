import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import user from "@testing-library/user-event";

import { withProviders } from "../../utils/test-utils";

import { UserProfilePage } from ".";

describe("Rendering UserProfilePage component", () => {
  beforeEach(() => {
    withProviders(<UserProfilePage />);
  });

  it("renders user profile page", () => {
    const userProfile = document.querySelector(".user_profile");
    expect(userProfile).toBeInTheDocument();
  });

  it("renders sections", () => {
    const section = document.querySelectorAll("section");
    expect(section).toHaveLength(3);
  });

  it("doesn't renders modal", () => {
    const modal = document.querySelector(".user_profile_popup");
    expect(modal).not.toBeInTheDocument();
  });

  it("renders edit button", () => {
    const openModalButton = document.querySelector(".edit_button");
    expect(openModalButton).toBeInTheDocument();
  });

  it("renders modal by click on edit button", async () => {
    const openModalButton = screen.getByRole("button", {
      name: "edit user image",
    });
    expect(openModalButton).toBeInTheDocument();
    user.click(openModalButton);
    const modal = await screen.findByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
