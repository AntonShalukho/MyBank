import React from "react";

import { useIntl } from "react-intl";

import { ClearInputIcon } from "../../Icons";

import botAvatar from "../../../uikit/static/botAvatar.png";

import "./ChatBotHeaderStyle.css";

export type ChatBotType = {
  onClose: () => void;
};

export const ChatBotHeader: React.FC<ChatBotType> = ({ onClose }) => {
  const intl = useIntl();

  return (
    <div className="chat-bot-header">
      <span className="chat-bot-header-bot-avatar">
        <img
          src={botAvatar}
          alt="chat bot avatar"
          className="chat-bot-header-bot-avatar-img"
        />
      </span>
      <span className="chat-bot-header-span-first-text">
        {intl.formatMessage({ id: "chatWithUs" })}
        <br />
        <span className="chat-bot-header-span-second-text">
          <div className="chat-bot-header-span-second-text-circle" />
          {intl.formatMessage({ id: "weAreOnlyne" })}
        </span>
      </span>
      <ClearInputIcon
        className="chat-bot-header-arrow-down-dropdown"
        onClick={onClose}
      />
    </div>
  );
};
