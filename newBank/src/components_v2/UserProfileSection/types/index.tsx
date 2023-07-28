export type PersonalDataType = {
  id: TestType;
};

export type PersonalInformationDataType = {
  name: TestType;
  surname: TestType;
  email: TestType;
  residenceAddress: TestType;
  residenceCity: TestType;
};

export type SecurityInformationDataType = {
  passportNumber: TestType;
  passportExpirationDate: TestType;
  pesel: TestType;
  language: TestType;
};

export type TestType = {
  id?: string;
  title: string;
  description: string;
};

export type InitialValuesPersonalInformation = {
  email: string;
  residenceAddress: string;
  residenceCity: string;
  houseNumber: string;
  apartmentNumber: string;
};

export type InitialValuesSecurityInformation = {
  passportNumber: string;
  passportExpirationDate: string;
};

export type SectionDataType =
  | PersonalDataType
  | PersonalInformationDataType
  | SecurityInformationDataType;

export type InitialValuesDataType =
  | (InitialValuesPersonalInformation & InitialValuesSecurityInformation)
  | {};

export type UserProfileSectionType = {
  title: string;
  sectionData: SectionDataType;
  initialValues: InitialValuesDataType;
  setInitialValues: (value: InitialValuesDataType) => void;
  setSectionData: (
    sectionData: SectionDataType,
    values: InitialValuesDataType
  ) => void;
  validationSchema: unknown;
  submitData: (values: InitialValuesDataType) => void;
};

export type UneditableUserProfileSectionType = {
  title: string;
  sectionData: SectionDataType;
  children?: React.ReactNode;
};

export type ImageComponentType = {
  setIsModalOpen?: (value: boolean) => void;
};
