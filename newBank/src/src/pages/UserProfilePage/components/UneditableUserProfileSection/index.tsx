import classNames from "classnames";

import { UneditableUserProfileSectionType } from "src/widgets/UserProfileSection/types";

import styles from "src/widgets/UserProfileSection/UserProfileSection.module.scss";

export const UneditableUserProfileSection = ({
  title,
  sectionData,
  children,
}: UneditableUserProfileSectionType) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    <div
      className={classNames(styles.container, {
        [styles.container_with_image]: children,
      })}
    >
      {children}
      <div
        className={classNames(styles.container_wrapper, {
          [styles.container_wrapper_with_image]: children,
        })}
      >
        {sectionData &&
          Object.entries(sectionData).map((item) => (
            <div
              key={item[0]}
              className={classNames(
                styles.section_info,
                item[0] === "id" && styles.section_info_id
              )}
            >
              <p className={styles.section_info_title}>{item[1].title}</p>

              <p className={styles.section_info_description}>
                {item[1].description}
              </p>
            </div>
          ))}
      </div>
    </div>
  </section>
);
