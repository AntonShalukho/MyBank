import { PencilSquareIcon } from "components_v2/Icon";

import { ImageComponentType } from "components_v2/UserProfileSection/types";

import userProfilePhotoMock from "uikit_v2/static/userProfilePhotoMock.png";

import styles from "./ImageComponent.module.css";

export const ImageComponent = ({ setIsModalOpen }: ImageComponentType) => (
  <div className={styles.container_image}>
    <img
      className={styles.container_image}
      src={userProfilePhotoMock}
      alt="user profile"
    />
    <div className={styles.container_image_inner_block}>
      <button
        aria-label="edit user image"
        type="button"
        className={styles.container_edit_button}
        onClick={() => setIsModalOpen && setIsModalOpen(true)}
      >
        <PencilSquareIcon />
      </button>
    </div>
  </div>
);
