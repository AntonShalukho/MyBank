export type MobileDataItem = {
  title:
    | "mainPage"
    | "cards"
    | "accounts"
    | "loans"
    | "more"
    | "deposits"
    | "transfers"
    | "investing"
    | "insurance"
    | "dealsAndOffers";

  path: string;
};

export const MobileBarDataTop: MobileDataItem[] = [
  {
    title: "transfers",
    path: "",
  },
  {
    title: "deposits",
    path: "/cabinet/deposits",
  },
  {
    title: "investing",
    path: "/cabinet/investing",
  },
  {
    title: "insurance",
    path: "/cabinet/insurance",
  },
  {
    title: "dealsAndOffers",
    path: "/cabinet/deals-and-offers",
  },
];
export const MobileBarDataBottom: MobileDataItem[] = [
  {
    title: "mainPage",
    path: "/cabinet/main",
  },
  {
    title: "cards",
    path: "/cabinet/cards",
  },
  {
    title: "accounts",
    path: "/cabinet/accounts",
  },
  {
    title: "loans",
    path: "/cabinet/loans",
  },
  {
    title: "more",
    path: "",
  },
];
