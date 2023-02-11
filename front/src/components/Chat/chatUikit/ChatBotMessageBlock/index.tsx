import React from "react";

import { useIntl } from "react-intl";

import "./ChatBotMessageBlockStyle.css";

type ChatBotMessageBlockType = {
  isUser: boolean;
  userMessage?: string;
  chatBotMessage?: string;
};

export const ChatBotMessageBlock: React.FC<ChatBotMessageBlockType> = (
  props
) => {
  const { isUser, userMessage, chatBotMessage } = props;
  const intl = useIntl();

  return (
    <div
      className={
        isUser ? "chat-bot-user-message" : "chat-bot-bot-greeting-message"
      }
    >
      {isUser ? (
        <>{userMessage}</>
      ) : (
        <>{intl.formatMessage({ id: chatBotMessage })}</>
      )}
    </div>
  );
};
