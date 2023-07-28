import { Input } from "uikit_v2/TextInput";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { getDateMack } from "utils/dateUtils";

import styles from "./SectionInfo.module.css";

type SectionInfoType = {
  id: string;
  title: string;
  description: string;
  isEditMode?: boolean;
  setFieldError: (value: string, error: string) => void;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void;
};

export const SectionInfo = ({
  id,
  title,
  description,
  isEditMode,
  setFieldError,
  setFieldValue,
}: SectionInfoType) => {
  const intl = useIntl();
  const isPassportExpirationDate = id === "passportExpirationDate";
  const isInputShow =
    isEditMode &&
    (id === "residenceAddress" ||
      id === "residenceCity" ||
      id === "passportNumber" ||
      id === "passportExpirationDate");
  return (
    <div
      className={classNames(
        styles.section_info,
        id === "id" && styles.section_info_id
      )}
    >
      <p className={styles.section_info_title}>{title}</p>
      {isInputShow ? (
        <Input
          name={id}
          maxLength={isPassportExpirationDate ? 10 : 100}
          handleFocus={() => setFieldError(id, "")}
          placeholder={
            isPassportExpirationDate
              ? intl.formatMessage({
                  id: "expirationDatePlaceholder",
                })
              : ""
          }
          onChange={(e) => {
            id === "passportExpirationDate"
              ? setFieldValue(
                  "passportExpirationDate",
                  getDateMack(e.target.value)
                )
              : setFieldValue(id, e.target.value);
          }}
        />
      ) : (
        <p className={styles.section_info_description}>{description}</p>
      )}
    </div>
  );
};
