export type GeneralInfoMockDataType = {
  uuid: string;
  name: string;
  surname: string;
};

export type PersonalInfoType = {
  name: string;
  surname: string;
  email: string;
  residenceAddress: string;
  residenceCity: string;
};

export type AvatarPopupType = {
  setIsModalOpen: (value: boolean) => void;
};

export type GeneralInfoType = {
  sectionData: GeneralInfoMockDataType;
};
