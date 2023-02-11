import React from "react";

import { useIntl } from "react-intl";

import { useSelector } from "react-redux";

import { selectAccountInfo } from "../../../redux/selectors/userSelectors";

import { Button } from "../../../uikit/Button";

import botButtonVector from "../../../uikit/static/botButtonVector.png";

import vectorChatBotInputActive from "../../../uikit/static/vectorChatBotInputActive.png";

import { ChatBotMainPage } from "../ChatBotMainPage";

import { ChatBotMessageBlock } from "../chatUikit/ChatBotMessageBlock";

import {
  MainPegaLinks,
  OtherLinks,
  ChatBotLinksType,
} from "../LinksGroupMockDate";

import "./ChatBotBodyStyle.css";

export const ChatBotBody = () => {
  const intl = useIntl();
  const isAuthUser = useSelector(selectAccountInfo);
  const [isMainPage, setIsMainPage] = React.useState<boolean>(true);
  const [isGreatingMessage, setIsGreatingMessage] =
    React.useState<boolean>(true);
  const [isUserSendMessage, setIsUserSendMessage] =
    React.useState<boolean>(false);
  const [isInputOnFocus, setIsInputOnFocus] = React.useState<boolean>(false);
  const [userMessage, setUserMessage] = React.useState<string>("");
  const [numbersRows, setNumbersRows] = React.useState<number>(1);
  const ref = React.useRef<HTMLDivElement>(null);
  const changeableUserMessage = React.useRef<string>("");
  const staticUserMessage = React.useRef<string>("");
  const userMessageCounter = React.useRef<number>(0);

  const chatBotMessage = () => {
    if (isMainPage) {
      return isGreatingMessage
        ? "chatBotGreetingMessage"
        : "chatBotSorryMessage";
    }
    return "chatBotGreetingMessage";
  };

  const onButtonClick = () => {
    if (isMainPage) {
      changeableUserMessage.current = "";
      setUserMessage("");
      setIsMainPage(false);
      setIsUserSendMessage(false);
    } else {
      changeableUserMessage.current = "";
      userMessageCounter.current = 0;
      setIsUserSendMessage(false);
      setIsGreatingMessage(true);
      setUserMessage("");
      setIsMainPage(true);
    }
    setIsMainPage(!isMainPage);
  };

  const isAuthUserHandler = (): ChatBotLinksType[] =>
    MainPegaLinks.map((link) => ({
      ...link,
      linkPath: isAuthUser ? link.linkPath : "/",
    }));

  const onBlurTeaxtAreaHandler = (): void => {
    userMessage !== "" ? null : setIsInputOnFocus(false);
  };

  const onFocusTextAreaHandler = (): void => {
    setIsInputOnFocus(true);
  };

  const addUserMessage = (): void => {
    if (changeableUserMessage.current.length !== 0) {
      staticUserMessage.current = changeableUserMessage.current;
      userMessageCounter.current += 1;
      if (userMessageCounter.current === 1) {
        setIsUserSendMessage(true);
        setIsGreatingMessage(false);
        setIsMainPage(true);
      } else {
        setIsMainPage(false);
      }

      if (changeableUserMessage.current.length !== 0) {
        setIsUserSendMessage(true);
      }

      setUserMessage("");
      setNumbersRows(1);
      setIsInputOnFocus(false);
    }
    setUserMessage("");
    setIsInputOnFocus(false);
  };

  const onChangeTextAreaHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.currentTarget.value.length <= 200) {
      setUserMessage(e.currentTarget.value);
      changeableUserMessage.current = e.currentTarget.value;
    }
  };

  React.useEffect(() => {
    if (numbersRows < 6) {
      switch (ref.current?.scrollHeight) {
        case 16: {
          setNumbersRows(1);
          break;
        }
        case 29: {
          setNumbersRows(2);
          break;
        }
        case 43: {
          setNumbersRows(3);
          break;
        }
        case 58: {
          setNumbersRows(4);
          break;
        }
        case 72: {
          setNumbersRows(5);
          break;
        }
        default: {
          break;
        }
      }
    }
  }, [onChangeTextAreaHandler]);

  return (
    <div className="chat-bot-body-wrapper-second">
      <div className="chat-bot-body-main-content">
        {isUserSendMessage && (
          <ChatBotMessageBlock
            isUser={true}
            userMessage={staticUserMessage.current}
          />
        )}
        <ChatBotMainPage
          chatBotMessage={chatBotMessage()}
          buttonText={isMainPage ? "otherBot" : "chatBotRestartButton"}
          links={isMainPage ? isAuthUserHandler() : OtherLinks}
          onButtonClick={onButtonClick}
        />
      </div>
      <div className="chat-bot-body-question chat-bot-body-input-block">
        <div
          className={`chat-bot-body-input-body 
            ${
              userMessage.length === 0 && isInputOnFocus
                ? "chat-bot-body-input-body-error"
                : ""
            }`}
        >
          <textarea
            className="chat-bot-body-input"
            rows={numbersRows}
            value={userMessage}
            onFocus={onFocusTextAreaHandler}
            onBlur={onBlurTeaxtAreaHandler}
            onChange={onChangeTextAreaHandler}
            placeholder={intl.formatMessage({ id: "writeMessagebot" })}
          />
          <Button
            className="chat-bot-body-input-button"
            onClick={addUserMessage}
          >
            <img
              src={isInputOnFocus ? vectorChatBotInputActive : botButtonVector}
              alt="chat-bot input button"
              className="chat-bot-body-input-image"
            />
          </Button>
        </div>
        {(isInputOnFocus || userMessage.length > 0) && (
          <div
            className={`
              chat-bot-body-input-character
              ${
                userMessage.length === 0 || userMessage.length === 200
                  ? "chat-bot-body-input-character-error"
                  : ""
              }
            `}
          >
            {`${intl.formatMessage({ id: "chatBotcharacterLeft" })} ${
              userMessage.length
            }/200`}
          </div>
        )}
      </div>
      <div className="chat-bot-body-input-div" ref={ref}>
        {userMessage}
      </div>
    </div>
  );
};
