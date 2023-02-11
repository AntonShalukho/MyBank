import React from "react";

import { Routes, Route, useLocation, Outlet } from "react-router";

import { LoginPage } from "./LoginPage";

import { MapPage } from "./MapPage";

import { ContactsPage } from "./ContactsPage";

import { DemoModePage } from "./DemoModePage";

import { ExchangeRatesPage } from "./ExchangeRatesPage";

import { PasswordRecoveryPage } from "./PasswordRecoveryPage";

import { Header } from "../components/Header";

import { RegistrationPage } from "./RegistrationPage";

import { PersonalCabinet } from "./PersonalCabinet";

import { Chat } from "../components/Chat";

import { MyCardsPage } from "./PersonalCabinet/personalCabinetPages/MyCardsPage";

import { CardProductPage } from "./PersonalCabinet/personalCabinetPages/CardProductsPage";

import { LoanProductPage } from "./PersonalCabinet/personalCabinetPages/MyLoansPage/LoanProductPage";

import { ApplyForALoanPage } from "./PersonalCabinet/personalCabinetPages/ApplyForALoanPage";

import { MyDepositsPage } from "./PersonalCabinet/personalCabinetPages/MyDepositsPage";

import { DepositsProductPage } from "./PersonalCabinet/personalCabinetPages/DepositsProductsPage";

import { DialsAndOffersPage } from "./PersonalCabinet/personalCabinetPages/DialsAndOffersPage";

import { InsurancePage } from "./PersonalCabinet/personalCabinetPages/InsurancePage";

import { InvestingPage } from "./PersonalCabinet/personalCabinetPages/InvestingPage";

import { MainPage } from "./PersonalCabinet/personalCabinetPages/MainPage";

import { OperationHistoryPage } from "./PersonalCabinet/personalCabinetPages/OperationHistoryPage";

import { PersonalInfoPage } from "./PersonalCabinet/personalCabinetPages/PersonalInfoPage";

import { Footer } from "./LoginPage/Footer";

import { ContactsFooter } from "../components/ContactsFooter";

import { Accounts } from "./PersonalCabinet/personalCabinetPages/Accounts";

import { ListOfAccounts } from "./PersonalCabinet/personalCabinetPages/Accounts/ListOfAccounts";

import { OpenAccount } from "./PersonalCabinet/personalCabinetPages/Accounts/OpenAccount";

import {
  CURRENT,
  SAVING,
} from "./PersonalCabinet/personalCabinetPages/Accounts/ListOfAccounts/constants";

import { AccountDetails } from "./PersonalCabinet/personalCabinetPages/Accounts/AccountDetails/index";

import { useScrollToTop } from "../utils/useScrollToTop";

export const PageRenderer = () => {
  const { pathname } = useLocation();
  const pathsWithChat = ["/contacts", "/rates"];
  const paths = [
    "/",
    "/atms",
    "/recovery",
    "/registration",
    "/cabinet/accounts",
  ];

  const [isOperationHistory, setIsOperationHistory] =
    React.useState<boolean>(false);

  const toggleMainToOperationHistoryPage = () => {
    setIsOperationHistory(!isOperationHistory);
  };

  useScrollToTop();

  return (
    <>
      <Header />
      {pathsWithChat.includes(pathname) ? <Chat /> : null}
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="atms" element={<MapPage />} />
        <Route path="rates" element={<ExchangeRatesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="demo" element={<DemoModePage />} />
        <Route path="recovery" element={<PasswordRecoveryPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="cabinet" element={<PersonalCabinet />}>
          <Route
            path={pathname === "/cabinet" ? "" : "main"}
            element={
              isOperationHistory ? (
                <OperationHistoryPage
                  isOperationHistory={toggleMainToOperationHistoryPage}
                />
              ) : (
                <MainPage isMainPage={toggleMainToOperationHistoryPage} />
              )
            }
          />
          <Route
            path="cards"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="" element={<MyCardsPage />} />
            <Route path="my-cards" element={<MyCardsPage />} />
            <Route path="card-products" element={<CardProductPage />} />
          </Route>
          <Route
            path="accounts"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="" element={<Accounts />} />
            <Route
              path="open-accounts-Current"
              element={<OpenAccount accountType={CURRENT} />}
            />
            <Route
              path="open-accounts-Saving"
              element={<OpenAccount accountType={SAVING} />}
            />
            <Route path="list-of-accounts" element={<ListOfAccounts />} />
            <Route path="details-account" element={<AccountDetails />} />
          </Route>
          <Route
            path="loans"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="" element={<LoanProductPage />} />
            <Route path="my-loans" element={<LoanProductPage />} />
            <Route path="loan-products" element={<LoanProductPage />} />
            <Route path="apply-for-a-loan" element={<ApplyForALoanPage />} />
          </Route>
          <Route
            path="deposits"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="" element={<MyDepositsPage />} />
            <Route path="my-deposit" element={<MyDepositsPage />} />
            <Route path="deposit-products" element={<DepositsProductPage />} />
          </Route>
          <Route path="investing" element={<InvestingPage />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="deals-and-offers" element={<DialsAndOffersPage />} />
          <Route path="personal-info" element={<PersonalInfoPage />} />
        </Route>
      </Routes>
      {pathname === "/" && <Footer />}
      {!paths.includes(pathname) && <ContactsFooter />}
    </>
  );
};
