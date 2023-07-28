import classNames from "classnames";

import { useEffect, useState } from "react";

import { sendInvalidate } from "components_v2/InactivityHandler/api/sendInvalidate";

import { useNavigate } from "react-router";

import { deleteSessionStorage } from "utils/sessionStorageHandler";

import { getAccountInfo } from "services/api/getAccountInfo";

import { useMobileScreen } from "utils/hooks/useMobileScreen";

import { LeftBarType, UserType } from "./types";

import { defaultUser } from "./consts";

import { MobileScreenBar } from "./components/MobileScreenBar";

import { FullScreenBar } from "./components/FullScreenBar";

import mobileStyles from "./components/NavItem/MobileNavItem.module.css";

import fullscreenStyles from "./components/NavItem/NavItem.module.css";

import styles from "./LeftBar.module.css";

export const LeftBar = ({
  toggleContainerFolded,
  isCollapsed,
}: LeftBarType) => {
  const [user, setUser] = useState<UserType>(defaultUser);
  const navigate = useNavigate();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleLogout = () => {
    sendInvalidate().finally(() => {
      deleteSessionStorage("token");
      navigate("/");
    });
  };

  useEffect(() => {
    getAccountInfo().then((data) => {
      setUser((prev) => ({ ...prev, name: data.name, surname: data.surname }));
    });
  }, []);

  const getMobileScreen = () => {
    if (window.screen.width >= 768) {
      setIsMobileScreen(false);
      return;
    }

    if (window.screen.width < 768) {
      setIsMobileScreen(true);
    }
  };

  useMobileScreen(getMobileScreen);

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_inactive]: !isCollapsed,
        },
        {
          [styles.wrapper_mobile]: isMobileScreen,
        }
      )}
    >
      {isMobileScreen ? (
        <MobileScreenBar
          handleLogout={handleLogout}
          isCollapsed={isCollapsed}
          user={user}
          navItemStyles={mobileStyles}
        />
      ) : (
        <FullScreenBar
          toggleContainerFolded={toggleContainerFolded}
          isCollapsed={isCollapsed}
          user={user}
          handleLogout={handleLogout}
          navItemStyles={fullscreenStyles}
        />
      )}
    </div>
  );
};
