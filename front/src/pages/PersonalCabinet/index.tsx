import React from "react";

import { Outlet } from "react-router";

import { Container } from "../../components/Container";

import { Sidebar } from "./Sidebar";

import "./PersonalCabinetStyles.css";

export const PersonalCabinet = () => (
  <div className="personal-page-bg-container">
    <Container>
      <div className="personal-page-wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </Container>
  </div>
);
