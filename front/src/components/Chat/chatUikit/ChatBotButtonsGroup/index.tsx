import React from "react";

import { useIntl } from "react-intl";

import { Link } from "react-router-dom";

import { VectorChatbot } from "../../../Icons";

import { Button } from "../../../../uikit/Button";

import { ChatBotLinksType } from "../../LinksGroupMockDate";

import "./ChatBotButtonsGroupStyle.css";

type ChatBotButtonsGroupType = {
  buttonText: string;
  links: ChatBotLinksType[];
  onButtonClick: () => void;
};

export const ChatBotButtonsGroup: React.FC<ChatBotButtonsGroupType> = ({
  buttonText,
  onButtonClick,
  links,
}) => {
  const intl = useIntl();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.title}
          className="chat-bot-body-button chat-bot-body-button-secont-page"
          to={link.linkPath}
        >
          {intl.formatMessage({ id: link.title })}
          <VectorChatbot className="chat-bot-button-group-link-svg" />
        </Link>
      ))}
      <Button
        className="chat-bot-body-button chat-bot-body-button-secont-page"
        onClick={onButtonClick}
      >
        {intl.formatMessage({ id: buttonText })}
      </Button>
    </>
  );
};
