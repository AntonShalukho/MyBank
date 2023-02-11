import React, { useState } from "react";

import classNames from "classnames";

import { Outlet, useLocation, useNavigate } from "react-router";

import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import { NavLink } from "react-router-dom";

import { AnimatedLogo } from "../AnimatedLogo";

import { Pictogram } from "../Pictogram";

import { LanguageButtons } from "../LanguageButtons";

import { pictogramData } from "../Pictogram/PictogramData";

import { setAccountInfo } from "../../redux/actions/userActions";

import { useTypedDispatch } from "../../redux/store/store";

import {
  selectAvatar,
  selectUserName,
} from "../../redux/selectors/userSelectors";

import { Button } from "../../uikit/Button";

import { BurgerMenuIcon, CloseBurgerMenu, Logout } from "../Icons";

import { Sidebar } from "../../pages/PersonalCabinet/Sidebar";

import { deleteCookie, getCookie } from "../../utils/cookieHandlers";

import defaultAvatar from "../../uikit/static/avatar.png";

import { Container } from "../Container";

import "./headerStyles.css";

export const pathsWithDarkBackground = ["/", "/registration", "/recovery"];
export const Header = () => {
  const { pathname } = useLocation();
  const token = getCookie("token");
  const avatar = useSelector(selectAvatar);
  const userName = useSelector(selectUserName);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleLogout = () => {
    dispatch(setAccountInfo(null));
    deleteCookie("token");
    navigate("/");
    setIsBurgerMenuOpen(false);
  };
  const handleClick = () => {
    setIsBurgerMenuOpen(false);
  };
  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  return (
    <Container>
      <div
        className={classNames("header-wrapper", {
          light: !pathsWithDarkBackground.includes(pathname),
        })}
      >
        <div className="header-animated-logo">
          <AnimatedLogo />
        </div>

        <ul
          className={classNames(
            "header-wrapper_pictogram",
            isBurgerMenuOpen && "header-wrapper_pictogram_active"
          )}
        >
          {pictogramData.map((pict) => (
            <Pictogram
              componentIcon={pict.componentIcon}
              text={pict.text}
              key={pict.id}
              link={pict.link}
              closeBurgerMenu={handleClick}
            />
          ))}
        </ul>

        {!pathsWithDarkBackground.includes(pathname) && token && (
          <div
            className={classNames(
              "user-login-block",
              isBurgerMenuOpen && "user-login-block_active"
            )}
          >
            {userName && (
              <div className="user-login-avatar-wrapper">
                <img
                  className="user-login-avatar"
                  src={
                    avatar ? `data:image/jpg;base64,${avatar}` : defaultAvatar
                  }
                  alt="avatar"
                  width="32"
                  height="32"
                />
                <NavLink
                  className="user-login-block-link"
                  to="/cabinet/personal-info"
                  onClick={handleClick}
                >
                  {userName}
                </NavLink>
              </div>
            )}
            <Button className="user-login-btn" onClick={handleLogout}>
              <>
                <Logout className="user-logout-icon" />
                <FormattedMessage id="logout" />
              </>
            </Button>
          </div>
        )}
        <LanguageButtons />
        <Button onClick={handleBurgerMenuClick}>
          {!isBurgerMenuOpen ? (
            <BurgerMenuIcon className="header-burger-menu" />
          ) : (
            <CloseBurgerMenu className="close-burger-menu-icon" />
          )}
        </Button>
      </div>
      <Outlet />
      {isBurgerMenuOpen && (
        <Sidebar
          isBurgerMenuOpen={isBurgerMenuOpen}
          closeBurgerMenu={handleClick}
        />
      )}
    </Container>
  );
};
