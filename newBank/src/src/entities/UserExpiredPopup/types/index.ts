export type UserDescType = () => React.ReactNode;

type ButtonsMock = {
  primary: string;
  secondary: string;
};

export type UserMockData = {
  title: string;
  description: string;
  buttons: ButtonsMock;
};

export type UserExpiredType = {
  mockData: UserMockData;
  children: React.ReactNode;
  onClose: () => void;
  stayOnSite: () => void;
  isExpired: boolean;
};

export type UserExpiredPopupType = {
  onClose: () => void;
  onTimeout: () => void;
  stayOnSite: () => void;
};
