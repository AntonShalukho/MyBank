import { useEffect, useState } from "react";

import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { InactivityHandler } from "src/features/InactivityHandler";

import { RegistrationPage } from "../RegistrationPage";

import { IntroPage } from "../introPage";
import { LoginPage } from "../LoginPage";
import { UserProfilePage } from "../UserProfilePage";

export const Router = () => {
  const token = getSessionStorage("token");
  const { pathname } = useLocation();
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleContainerFolded = (): void => {
    setIsFolded(!isFolded);
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
      {/* {token ? ( 
        <InactivityHandler>
        // <Container isFolded={isFolded}>
        //   {token && <Sidebar toggleContainerFolded={toggleContainerFolded} />}
        //   {!token && pathname !== LOG_IN_PATH && <Header />}
        //   <Routes>
        //     <Route path="" element={<CabinetPage />}>
        //       <Route
        //         path={pathname === "/" ? "" : "main"}
        //         element={
        //           <PageContainer isFolded={isFolded}>
        //             <Outlet />
        //           </PageContainer>
        //         }
        //       >
        //         <Route path="" element={<MainPage />} />
        //         <Route path="accounts" element={<MainPage />} />
        //       </Route>
        //       <Route
        //         path="products"
        //         element={
        //           <PageContainer isFolded={isFolded}>
        //             <Outlet />
        //           </PageContainer>
        //         }
        //       >
        //         <Route path="" element={<ProductsPage />} />
        //         <Route path="accounts" element={<ProductsPage />}>
        //           <Route
        //             path="open-accounts-Saving"
        //             element={<ProductsPage />}
        //           />
        //           <Route
        //             path="open-accounts-Current"
        //             element={<ProductsPage />}
        //           />
        //           <Route path="list-of-accounts" element={<ProductsPage />} />
        //           <Route path="details-account" element={<ProductsPage />} />
        //         </Route>
        //       </Route>
        //     </Route>
        //   </Routes>
        // </Container>
        <InactivityHandler>
      ) : (null
      )} */}
      <Routes>
        <Route path="user-profile" element={<UserProfilePage />} />
        <Route path="" element={<RegistrationPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="sing-up" element={<RegistrationPage />} />
        <Route path="sing-up/:step" element={<RegistrationPage />} />
        <Route path="log-in" element={<LoginPage />} />
        {/* <Route path="atms" element={<MapPage />} /> */}
      </Routes>
    </InactivityHandler>
  );
};
