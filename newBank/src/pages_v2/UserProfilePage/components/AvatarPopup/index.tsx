import { Modal } from "components_v2/Modal";

import { useIntl } from "react-intl";

import { Button } from "uikit_v2/Button";

import { PencilSquareIcon } from "components_v2/Icon";

import userProfilePhotoMock from "../../../../uikit_v2/static/userProfilePhotoMock.png";

import styles from "./AvatarPopup.module.css";

import { AvatarPopupType } from "../../types";

export const AvatarPopup = ({ setIsModalOpen }: AvatarPopupType) => {
  const intl = useIntl();

  return (
    <div data-testid="modal">
      <Modal
        className={styles.popup}
        closeButtonClassName={styles.popup_button_close}
        onClose={() => setIsModalOpen(false)}
        backdrop={true}
      >
        <h2 className={styles.popup_title}>
          {intl.formatMessage({ id: "myProfile" })}
        </h2>
        <img
          src={userProfilePhotoMock}
          alt="user profile"
          className={styles.popup_image}
        />
        <div className={styles.popup_button_container}>
          <Button
            variant="primarySmall"
            className={styles.popup_button}
            onClick={() => setIsModalOpen(false)}
          >
            <PencilSquareIcon className={styles.button_icon} />
            <span>{intl.formatMessage({ id: "edit" })}</span>
          </Button>
          <Button
            variant="primarySmall"
            className={`${styles.popup_button} ${styles.popup_button_delete}`}
            onClick={() => setIsModalOpen(false)}
          >
            {intl.formatMessage({ id: "deleteAvatar" })}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
