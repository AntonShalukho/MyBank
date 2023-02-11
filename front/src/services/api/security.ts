import { patch } from ".";

import { config } from "../../config/config";

export const sendPasswordChangeRequest = (
  currentPassword: string,
  newPassword: string
) =>
  patch({
    url: config.api.changePasswordUrl,
    body: { currentPassword, newPassword },
  });

export const sendQuestionChangeRequest = (question: string, answer: string) =>
  patch({
    url: config.api.changeQuestionUrl,
    body: {
      secretQuestion: question,
      secretAnswer: answer,
    },
  });
