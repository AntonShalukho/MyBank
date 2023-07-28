import { useState } from "react";

import { OutlinedEditIcon } from "components_v2/Icon";

import { Button } from "uikit_v2/Button";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { SectionInfo } from "components_v2/SectionInfo";

import styles from "./UserProfileSection.module.css";

import { handleValidate } from "./validationUtils";

import { InitialValuesDataType, UserProfileSectionType } from "./types";

export const UserProfileSection = ({
  title,
  initialValues,
  setInitialValues,
  sectionData,
  setSectionData,
  validationSchema,
  submitData,
}: UserProfileSectionType) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const intl = useIntl();
  const onSubmit = (values: InitialValuesDataType) => {
    setIsEditMode(!isEditMode);
    setSectionData(sectionData, values);
    setInitialValues(values);
    submitData(values);
  };

  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
        validate={handleValidate}
      >
        {({ isValid, setFieldError, setFieldValue }) => (
          <Form>
            <div className={classNames(styles.container)}>
              <div className={styles.container_wrapper}>
                {sectionData &&
                  Object.entries(sectionData).map((item) => (
                    <SectionInfo
                      key={item[1].title}
                      title={item[1].title}
                      description={item[1].description}
                      id={item[0]}
                      isEditMode={isEditMode}
                      setFieldError={setFieldError}
                      setFieldValue={setFieldValue}
                    />
                  ))}
              </div>
              <div
                className={` ${
                  isEditMode && styles.container_button_edit_mode
                }`}
              >
                {isEditMode && (
                  <Button
                    type="submit"
                    data-testid="submit_button"
                    variant="primarySmall"
                    disabled={!isValid}
                  >
                    <OutlinedEditIcon />
                    <span className={styles.button_text}>
                      {intl.formatMessage({ id: "saveInformation" })}
                    </span>
                  </Button>
                )}
                <Button
                  type="reset"
                  data-testid="edit_information_button"
                  variant="secondarySmall"
                  onClick={() => {
                    setIsEditMode(!isEditMode);
                  }}
                >
                  {!isEditMode && <OutlinedEditIcon />}
                  <span className={styles.button_text}>
                    {isEditMode
                      ? intl.formatMessage({ id: "cancel" })
                      : intl.formatMessage({ id: "editInformation" })}
                  </span>
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
