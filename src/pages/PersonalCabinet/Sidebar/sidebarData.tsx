export type SidebarDataItem = {
  title:
    | "mainPage"
    | "cards"
    | "accounts"
    | "loans"
    | "deposits"
    | "transfers"
    | "investing"
    | "insurance"
    | "dealsAndOffers";
  path: string;
  subNav?: SubNavType[];
};

export type SubNavType = {
  title:
    | "myCards"
    | "cardProducts"
    | "openAccounts"
    | "myLoans"
    | "loanProducts"
    | "applyForALoan"
    | "myDeposits"
    | "depositsProducts";
  path: string;
};

export const sidebarData: SidebarDataItem[] = [
  {
    title: "mainPage",
    path: "/cabinet/main",
  },
  {
    title: "cards",
    path: "/cabinet/cards",
    subNav: [
      {
        title: "myCards",
        path: "/cabinet/cards/my-cards",
      },
      {
        title: "cardProducts",
        path: "/cabinet/cards/card-products",
      },
    ],
  },
  {
    title: "accounts",
    path: "/cabinet/accounts",
  },
  {
    title: "loans",
    path: "/cabinet/loans",
    subNav: [
      {
        title: "myLoans",
        path: "/cabinet/loans/my-loans",
      },
      {
        title: "loanProducts",
        path: "/cabinet/loans/loan-products",
      },
      {
        title: "applyForALoan",
        path: "/cabinet/loans/apply-for-a-loan",
      },
    ],
  },
  {
    title: "deposits",
    path: "/cabinet/deposits",
    subNav: [
      {
        title: "myDeposits",
        path: "/cabinet/deposits/my-deposit",
      },
      {
        title: "depositsProducts",
        path: "/cabinet/deposits/deposit-products",
      },
    ],
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
