import React from "react";

import { Error } from "src/shared/ui/Error";

import { ErrorsListTypeProps } from "../../types";

export const ErrorsList = ({ errors }: ErrorsListTypeProps) => (
  <>
    {Array.isArray(errors)
      ? errors.map((error) => <Error key={error} errorMessageId={error} />)
      : typeof errors === "string" && <Error errorMessageId={errors} />}
  </>
);
