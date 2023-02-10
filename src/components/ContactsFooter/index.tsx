import React from "react";

import { FormattedMessage } from "react-intl";

import { InfoBlock } from "../InfoBlock";

import { InfoCard } from "../InfoCard";

import { Iphone } from "../Icons";

import { StoreLinks } from "../StoreLinks";

import { Container } from "../Container";

import "./ContactsFooterStyles.css";

export const ContactsFooter = () => (
  <Container>
    <div className="contacts-footer-wrapper">
      <div className="contacts-footer-info-card-wrapper">
        <div className="contacts-footer-info-card-wrapper" />
        <InfoCard
          title={<FormattedMessage id="cardSupport" />}
          workSchedule={<FormattedMessage id="cardSupportWorkSchedule" />}
        />
        <div className="contacts-footer-info-block-wrapper">
          <InfoBlock
            icon={<Iphone className="contacts-footer-phone-icon mobile" />}
            phoneNumber="3800"
            description={<FormattedMessage id="individualsFreeCalls" />}
          />
          <InfoBlock
            phoneNumber="+1 (684) 654-0102"
            description={
              <FormattedMessage id="cardSupportInternationalCalls" />
            }
          />
        </div>
      </div>
      <div className="contacts-footer-info-card-wrapper">
        <div className="contacts-footer-info-card-wrapper" />
        <InfoCard
          title={<FormattedMessage id="individuals" />}
          workSchedule={<FormattedMessage id="individualsWorkSchedule" />}
        />
        <div className="contacts-footer-info-block-wrapper">
          <InfoBlock
            icon={<Iphone className="contacts-footer-phone-icon mobile" />}
            phoneNumber="3700"
            description={<FormattedMessage id="individualsFreeCalls" />}
          />
          <InfoBlock
            phoneNumber="+1 (684) 654-0102"
            description={
              <FormattedMessage id="cardSupportInternationalCalls" />
            }
          />
        </div>
      </div>
      <div className="contacts-footer-info-card-wrapper">
        <div className="contacts-footer-info-card-wrapper" />
        <h3 className="contacts-footer-legal-address-title">
          <FormattedMessage id="legalAddress" />
        </h3>
        <div className="contacts-footer-legal-address-wrapper">
          <p className="contacts-footer-legal-address-number">
            <FormattedMessage id="address" />
          </p>
          <p className="contacts-footer-legal-address-number">
            <FormattedMessage id="london" />
          </p>
        </div>
      </div>
      <p className="contacts-footer-info-card-description-link">
        <FormattedMessage id="footerLinkDescription" />
      </p>
      <div className="contacts-footer-store-links-wrapper">
        <StoreLinks />
      </div>
    </div>
  </Container>
);
