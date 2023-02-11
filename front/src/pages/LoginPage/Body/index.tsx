import React from "react";

import { Slider } from "../../../components/Slider";

import { AuthorizationForm } from "../../../components/AuthorizationForm";

import "./bodyStyles.css";

export const Body = () => (
  <div className="body-wrapper">
    <Slider />
    <AuthorizationForm />
  </div>
);
