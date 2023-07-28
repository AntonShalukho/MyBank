import React from "react";

import { getSessionStorage } from "src/shared/lib/sessionStorageHandler";

import { AuthHeader } from "./components/AuthHeader";

import { UnauthHeader } from "./components/UnauthHeader";

export const Header = () => {
  const token = getSessionStorage("token");

  return token ? <AuthHeader /> : <UnauthHeader />;
};
