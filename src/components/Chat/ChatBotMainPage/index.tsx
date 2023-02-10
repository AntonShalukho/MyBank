import React from "react";

import { useIntl } from "react-intl";

import { ChatBotButtonsGroup } from "../chatUikit/ChatBotButtonsGroup";

import { ChatBotContactsMessage } from "../chatUikit/ChatBotContactsMessage";

import { ChatBotMessageBlock } from "../chatUikit/ChatBotMessageBlock";

import { ChatBotLinksType } from "../LinksGroupMockDate";

type ChatBotMainPageType = {
  chatBotMessage: string;
  buttonText: string;
  links: ChatBotLinksType[];
  onButtonClick: () => void;
};

export const ChatBotMainPage: React.FC<ChatBotMainPageType> = ({
  chatBotMessage,
  buttonText,
  links,
  onButtonClick,
}) => {
  const intl = useIntl();
  return (
    <>
      {links.length === 1 ? (
        <ChatBotContactsMessage />
      ) : (
        <ChatBotMessageBlock
          isUser={false}
          chatBotMessage={intl.formatMessage({ id: chatBotMessage })}
        />
      )}
      <ChatBotButtonsGroup
        buttonText={buttonText}
        onButtonClick={onButtonClick}
        links={links}
      />
    </>
  );
};
