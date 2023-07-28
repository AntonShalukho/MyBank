import { useEffect, useState } from "react";

import { UserProfileSection } from "components_v2/UserProfileSection";

import { getAccountInfo } from "services/api/getAccountInfo";

import { useIntl } from "react-intl";

import { ImageComponent } from "components_v2/UserProfileSection/components/ImageComponent";

import {
  InitialValuesDataType,
  InitialValuesPersonalInformation,
  InitialValuesSecurityInformation,
  PersonalDataType,
  PersonalInformationDataType,
  SectionDataType,
  SecurityInformationDataType,
} from "components_v2/UserProfileSection/types";

import {
  personalInformationValidationSchema,
  securityInformationValidationSchema,
} from "components_v2/UserProfileSection/validationUtils";

import { sendPersonalInformationData } from "services/api/sendPersonalInformationData";

import { sendSecurityInformationData } from "services/api/sendSecurityInformationData";

import {
  getPersonalData,
  getSecurityData,
  getIdData,
  getInitialValuesPersonalInformation,
  getInitialValuesSecurityInformation,
  getFullDate,
} from "./utils";

import { AvatarPopup } from "./components/AvatarPopup";

import { UserProfileDataType } from "./types/apiType";

import { UneditableUserProfileSection } from "./components/UneditableUserProfileSection";

export const UserProfilePage = () => {
  const intl = useIntl();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalIdData, setPersonalIdData] = useState<PersonalDataType>(
    {} as PersonalDataType
  );
  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformationDataType>({} as PersonalInformationDataType);
  const [securityInformationData, setSecurityInformationData] =
    useState<SecurityInformationDataType>({} as SecurityInformationDataType);
  const [
    initialValuesPersonalInformation,
    setInitialValuesPersonalInformation,
  ] = useState<InitialValuesDataType>({});
  const [
    initialValuesSecurityInformation,
    setInitialValuesSecuritylInformation,
  ] = useState<InitialValuesDataType>({});

  const handlePersonalInformationData = (
    sectionData: SectionDataType,
    values: InitialValuesDataType
  ) => {
    const typedSectionData = sectionData as PersonalInformationDataType;
    const typedValues = values as InitialValuesPersonalInformation;
    setPersonalInformationData({
      ...typedSectionData,
      email: {
        ...typedSectionData.email,
        description: typedValues.email,
      },
      residenceAddress: {
        ...typedSectionData.residenceAddress,
        description: typedValues.residenceAddress,
      },
      residenceCity: {
        ...typedSectionData.residenceCity,
        description: typedValues.residenceCity,
      },
    });
  };

  const handleSecurityInformationData = (
    sectionData: SectionDataType,
    values: InitialValuesDataType
  ) => {
    const typedSectionData = sectionData as SecurityInformationDataType;
    const typedValues = values as InitialValuesSecurityInformation;
    setSecurityInformationData({
      ...typedSectionData,
      passportNumber: {
        ...typedSectionData.passportNumber,
        description: typedValues.passportNumber,
      },
      passportExpirationDate: {
        ...typedSectionData.passportExpirationDate,
        description: typedValues.passportExpirationDate,
      },
    } as SecurityInformationDataType);
  };

  useEffect(() => {
    getAccountInfo().then((response: UserProfileDataType) => {
      setPersonalIdData(getIdData(response));
      setPersonalInformationData(getPersonalData(response));
      setSecurityInformationData(getSecurityData(response));
      setInitialValuesPersonalInformation(
        getInitialValuesPersonalInformation(response)
      );
      setInitialValuesSecuritylInformation(
        getInitialValuesSecurityInformation(response)
      );
    });
  }, []);

  const submitPersonalInfornationData = (values: InitialValuesDataType) => {
    const typedValues = values as InitialValuesPersonalInformation;
    sendPersonalInformationData(typedValues);
  };

  const submitSecurityInfornationData = (values: InitialValuesDataType) => {
    const typedValues: InitialValuesSecurityInformation = {
      ...(values as InitialValuesSecurityInformation),
      passportExpirationDate: getFullDate(
        (values as InitialValuesSecurityInformation).passportExpirationDate
      ),
    };
    sendSecurityInformationData(typedValues);
  };

  return (
    <section>
      <UneditableUserProfileSection
        title={intl.formatMessage({ id: "myProfile" })}
        sectionData={personalIdData}
      >
        <ImageComponent setIsModalOpen={setIsModalOpen} />
      </UneditableUserProfileSection>
      <UserProfileSection
        title={intl.formatMessage({ id: "personalInformation" })}
        sectionData={personalInformationData}
        setSectionData={handlePersonalInformationData}
        initialValues={initialValuesPersonalInformation}
        setInitialValues={setInitialValuesPersonalInformation}
        validationSchema={personalInformationValidationSchema}
        submitData={submitPersonalInfornationData}
      />
      <UserProfileSection
        title={intl.formatMessage({ id: "securityInformation" })}
        sectionData={securityInformationData}
        setSectionData={handleSecurityInformationData}
        initialValues={initialValuesSecurityInformation}
        setInitialValues={setInitialValuesSecuritylInformation}
        validationSchema={securityInformationValidationSchema}
        submitData={submitSecurityInfornationData}
      />
      {isModalOpen && <AvatarPopup setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};
