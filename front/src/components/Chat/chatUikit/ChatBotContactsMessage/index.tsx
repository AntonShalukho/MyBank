import React from "react";

import { useIntl } from "react-intl";

import phoneIconChatBot from "../../../../uikit/static/phoneIconChatBot.png";

import "./ChatBotContactsMessageStyle.css";

export const ChatBotContactsMessage = () => {
  const intl = useIntl();
  return (
    <div className="chat-bot-contacts-message">
      <div className="chat-bot-contacts-messsage-phone-section">
        <img
          src={phoneIconChatBot}
          alt="phone icon"
          className={`chat-bot-contacts-messsage-phone-section-svg1 ${
            intl.locale === "de-de" ? "chat-bot-de-de" : ""
          }`}
        />
        <img
          src={phoneIconChatBot}
          alt="phone icon"
          className={`chat-bot-contacts-messsage-phone-section-svg2 ${
            intl.locale === "de-de" ? "chat-bot-de-de2" : ""
          }`}
        />
      </div>
      <div className="chat-bot-contacts-messsage-contacts-section">
        <span>{intl.formatMessage({ id: "chatBotContactMessageTop" })}</span>
        <br />
        <span>
          {intl.formatMessage({ id: "chatBotContactMessagePhone1" })}
          <a
            href="tel: 3700"
            className="chat-bot-contacts-messsage-contacts-section-input1"
          >
            3700
          </a>
        </span>
        <br />
        <span>
          {intl.formatMessage({ id: "chatBotContactMessagePhone2" })}
          <a
            href="tel: 3800"
            className="chat-bot-contacts-messsage-contacts-section-input2"
          >
            3800
          </a>
        </span>
        <br />
        <span>{intl.formatMessage({ id: "chatBotContactMessageBottom" })}</span>
      </div>
    </div>
  );
};
