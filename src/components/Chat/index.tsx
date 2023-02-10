import React from "react";

import { ChatBubble } from "../Icons";

import { ChatBot } from "./ChatBot";

import "./ChatStyles.css";

export const Chat = React.memo(() => {
  const [bot, setBot] = React.useState<boolean>(false);
  const onOpen = () => {
    setBot(true);
  };
  const onClose = () => {
    setBot(false);
  };
  return (
    <>
      <ChatBubble className="chat-bubble" onClick={onOpen} />
      {bot && <ChatBot onClose={onClose} />}
    </>
  );
});
