import React, { useState } from "react";

import { ChangePasswordForm } from "../ChangePasswordForm.tsx";

import { ChangeQuestionForm } from "../ChangeQuestionForm";

import {
  PASSWORD,
  SecurityButtons,
  SECURITY_QUESTION,
} from "../SecurityButtons.tsx";

import "./SecurityStyles.css";

export const Security = () => {
  const [option, setOption] = useState<string | null>(null);
  return (
    <div className="security-container">
      {option ? (
        <div className="security-forms-container">
          {option === PASSWORD && <ChangePasswordForm setOption={setOption} />}
          {option === SECURITY_QUESTION && (
            <ChangeQuestionForm setOption={setOption} />
          )}
        </div>
      ) : (
        <SecurityButtons setOption={setOption} />
      )}
    </div>
  );
};
