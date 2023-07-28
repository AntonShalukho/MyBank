import React from "react";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { AuthHeader } from "./AuthHeader";

import { UnauthHeader } from "./UnauthHeader";

export const Header = () => {
  const token = getSessionStorage("token");

  return token ? <AuthHeader /> : <UnauthHeader />;
};
