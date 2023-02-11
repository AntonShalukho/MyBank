export type ChatBotLinksType = {
  title: string;
  linkPath: string;
};

export const MainPegaLinks: Array<ChatBotLinksType> = [
  {
    title: "cards",
    linkPath: "cabinet/cards",
  },
  {
    title: "loans",
    linkPath: "cabinet/loans",
  },
  {
    title: "personalAccauntBot",
    linkPath: "cabinet/personal-info",
  },
  {
    title: "eDepositsBot",
    linkPath: "cabinet/deposits",
  },
];
export const OtherLinks: Array<ChatBotLinksType> = [
  {
    title: "thirdPictogram",
    linkPath: "contacts",
  },
];
