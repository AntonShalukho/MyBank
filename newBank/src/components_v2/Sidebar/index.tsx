import React, { useEffect, useState } from "react";

import classNames from "classnames";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import { deleteSessionStorage } from "utils/sessionStorageHandler";

import { sendInvalidate } from "components_v2/InactivityHandler/api/sendInvalidate";

import { MainLogoBlock } from "./MainLogoBlock";

import { SubMenu } from "./SubMenu";

import defaultAvatar from "../../uikit/static/avatar.png";

import { ArrowDoubleRight, LogoutIcon, Wallet } from "../Icon";

import { sidebarData } from "./sidebarData";

import { useTypedDispatch } from "../../redux/store/store";

import { setAccountInfo } from "../../redux/actions/userActions";

import { MAIN_PAGE_PATH, MAIN_SIDE_BAR_TITLE } from "../../utils/variables";

import { MobileSubMenu } from "./MobileSubMenu";

import { getProfilePicture } from "../../services/api/userAvatar";

import { getAccountInfo } from "../../services/api/clientInformation";

import { AccountProduct } from "../../pages_v2/ProductsPage/Accounts/AccountProduct";

import styles from "./Sidebar.module.css";

type SidebarType = {
  toggleContainerFolded: () => void;
};

export const Sidebar: React.FC<SidebarType> = ({ toggleContainerFolded }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(MAIN_SIDE_BAR_TITLE);
  const [avatar, setAvatar] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const intl = useIntl();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleContainerFolded();
  };

  const handleLogout = () => {
    sendInvalidate().finally(() => {
      dispatch(setAccountInfo(null));
      deleteSessionStorage("token");
      navigate("/");
    });
  };

  const handleBurgerMenu = () =>
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);

  useEffect(() => {
    const { width } = window.screen;
    if (width <= 375) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  }, [window.screen.width]);

  useEffect(() => {
    getAccountInfo().then((data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
    });
    getProfilePicture().then((data) => setAvatar(data));
  }, []);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapper_inactive]: !isSidebarOpen,
      })}
    >
      {isMobileScreen && (
        <MobileSubMenu
          mobileClassName={classNames({
            active_mobile_menu: isMobileMenu,
          })}
          handleLogout={handleLogout}
          isSidebarOpen={isSidebarOpen}
          activeSubmenu={activeSubmenu}
          setActiveSubmenu={setActiveSubmenu}
        />
      )}
      <Link to={MAIN_PAGE_PATH}>
        <MainLogoBlock isSidebarOpen={isSidebarOpen} />
      </Link>
      {!isMobileScreen ? (
        <>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_item}>
              <SubMenu
                link={sidebarData[0]}
                isSidebarOpen={isSidebarOpen}
                activeSubmenu={activeSubmenu}
                setActiveSubmenu={setActiveSubmenu}
              />
            </li>
            <div className={styles.product_pic}>
              <Wallet />
              {isSidebarOpen && (
                <div className={styles.product_text}>
                  {intl.formatMessage({ id: "products" })}
                </div>
              )}
            </div>
            <li className={styles.sidebar_item}>
              <SubMenu
                link={sidebarData[1]}
                isSidebarOpen={isSidebarOpen}
                activeSubmenu={activeSubmenu}
                setActiveSubmenu={setActiveSubmenu}
              />
            </li>
          </ul>
          <div className={styles.footer_block}>
            {
              //  eslint-disable-next-line
              <div
                className={classNames(styles.buttonCollapse, {
                  [styles.buttonCollapse_inactive]: !isSidebarOpen,
                })}
                onClick={handleToggleSidebar}
              >
                <ArrowDoubleRight />
                <span>{intl.formatMessage({ id: "collapse" })}</span>
              </div>
            }
            <div
              className={classNames(styles.line, {
                [styles.line_inactive]: !isSidebarOpen,
              })}
            />
            <div className={styles.user_wrapper}>
              <img
                className={styles.user_avatar}
                src={avatar ? `data:image/jpg;base64,${avatar}` : defaultAvatar}
                alt="avatar"
              />
              <Link to="/settings/profile" className={styles.user_link}>
                {isSidebarOpen && (
                  <div className={styles.user_name}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                  </div>
                )}
              </Link>
              {isSidebarOpen && (
                //  eslint-disable-next-line
                <div onClick={handleLogout} className={styles.logout}>
                  <LogoutIcon />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        //  eslint-disable-next-line
        <div className={styles.burger_icon} onClick={handleBurgerMenu}>
          <div
            className={classNames(styles.icon, {
              [styles.icon_active]: isMobileMenu,
            })}
          />
        </div>
      )}
    </div>
  );
};
