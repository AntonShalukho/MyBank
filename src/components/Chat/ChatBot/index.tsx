import React from "react";

import { PageSection } from "../../../pages/PersonalCabinet/PageSection";

import { ChatBotBody } from "../ChatBotBody";

import { ChatBotHeader } from "../ChatBotHeader";

import "./ChatBotStyle.css";

export type ChatBotType = {
  onClose: () => void;
};

export const ChatBot: React.FC<ChatBotType> = ({ onClose }) => (
  <div className="chat-bot">
    <PageSection
      title={<ChatBotHeader onClose={onClose} />}
      className="bot-section"
      titleClassName="chat-bot-title"
    >
      <ChatBotBody />
    </PageSection>
  </div>
);
