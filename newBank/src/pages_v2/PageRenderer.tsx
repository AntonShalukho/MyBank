import { useEffect, useState } from "react";

import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { InactivityHandler } from "components_v2/InactivityHandler";

import { LeftBar } from "components_v2/LeftBar";

import { ProductsPage } from "./ProductsPage";

import { Header } from "../components_v2/Header";

import { Container } from "../components_v2/Container";

import { CabinetPage } from "./CabinetPage";

import { WelcomePage } from "./WelcomePage";

import { PageContainer } from "./PageContainer";

import { MainPage } from "./MainPage";

import { LOG_IN_PATH } from "../utils/variables";

import { IntroPage } from "./WelcomePage/IntroPage";

import { Spinner } from "../uikit_v2/Spinner";

import { MapPage } from "./MapPage";

import { LoginPage } from "./WelcomePage/LoginPage";

import { getProductAccountsRoutes } from "./Routes/getProductAccountsRoutes";

import { UserProfileContainer } from "./UserProfileContainer";

import { UserProfilePage } from "./UserProfilePage";

export const PageRenderer = () => {
  const token = getSessionStorage("token");
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleContainerFolded = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  // will be commented, while back is working on account info request

  // useEffect(() => {
  //   if (token) {
  //     setIsLoading(true);
  //     getAccountInfo()
  //       .catch(() => {
  //         deleteCookie("token");
  //         navigate("/");
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, [token]);

  return (
    <InactivityHandler token={token}>
      {token ? (
        <Container isCollapsed={isCollapsed}>
          {token && (
            <LeftBar
              toggleContainerFolded={toggleContainerFolded}
              isCollapsed={!isCollapsed}
            />
          )}
          {!token && pathname !== LOG_IN_PATH && <Header />}
          <Routes>
            <Route path="" element={<CabinetPage />}>
              <Route
                path={pathname === "/" ? "" : "main"}
                element={
                  <PageContainer isCollapsed={isCollapsed}>
                    <Outlet />
                  </PageContainer>
                }
              >
                <Route path="" element={<MainPage />} />
                <Route path="accounts" element={<MainPage />} />
              </Route>
              <Route
                path="products"
                element={
                  <PageContainer isCollapsed={isCollapsed}>
                    <Outlet />
                  </PageContainer>
                }
              >
                <Route path="" element={<ProductsPage />}>
                  {getProductAccountsRoutes()}
                </Route>
                <Route path="accounts" element={<ProductsPage />}>
                  {getProductAccountsRoutes()}
                </Route>
              </Route>
              <Route path="settings" element={<UserProfileContainer />}>
                <Route path="" element={<UserProfilePage />} />
                <Route path="profile" element={<UserProfilePage />} />
                <Route path="security" element={<></>} />
                <Route path="notifications" element={<></>} />
                <Route path="delete-account" element={<></>} />
              </Route>
            </Route>
          </Routes>
        </Container>
      ) : (
        <Routes>
          <Route path="" element={<IntroPage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="sing-up" element={<WelcomePage />} />
          <Route path="sing-up/:step" element={<WelcomePage />} />
          <Route path="log-in" element={<LoginPage />} />
          <Route path="atms" element={<MapPage />} />
        </Routes>
      )}
      {isLoading && <Spinner />}
    </InactivityHandler>
  );
};
