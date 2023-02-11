import React from "react";

import { useIntl } from "react-intl";

import { CardList } from "../../CardList";

import { ExchangeRates } from "../../ExchangeRates";

import { PageSection } from "../../PageSection";

import { Services } from "../../Services";

import { TransactionsHistory } from "../../TransactionsHistory";

import "./MainPageStyle.css";

type MainPageType = {
  isMainPage: () => void;
};

export const MainPage: React.FC<MainPageType> = (props) => {
  const { isMainPage } = props;

  const intl = useIntl();
  return (
    <div className="main-page-wrapper">
      <div className="main-page-left">
        <div>
          <PageSection
            title={intl.formatMessage({ id: "myCards" })}
            className="cards-section"
          >
            <CardList />
          </PageSection>
          <PageSection
            title={intl.formatMessage({ id: "operationHistory" })}
            className="history-section"
          >
            <TransactionsHistory isMainPage={isMainPage} />
          </PageSection>
        </div>
        <PageSection
          title={intl.formatMessage({ id: "exchangeRates" })}
          className="exchange-rates-section"
        >
          <ExchangeRates />
        </PageSection>
      </div>
      <PageSection
        title={intl.formatMessage({ id: "featuredServicesSelection" })}
        className="featured-services-section"
      >
        <Services />
      </PageSection>
    </div>
  );
};
