import React from "react";

import { useNavigate } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import { Container } from "../../components/Container";

import { InfoCard } from "../../components/InfoCard";

import { InfoBlock } from "../../components/InfoBlock";

import { BackButton } from "../../components/BackButton";

import { SupervisorAccount, CreditCard, Iphone } from "../../components/Icons";

import "./ContactsPage.css";

export const ContactsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="contacts-wrapper">
          <div className="back-btn-wrapper">
            <BackButton onClick={() => navigate(-1)} />

            <h1 className="contacts-title">
              <FormattedMessage id="contactsTitle" />
            </h1>
          </div>
          <div className="contacts-info-card-wrapper">
            <div className="contacts-info-card-item">
              <InfoCard
                title={<FormattedMessage id="individuals" />}
                icon={<SupervisorAccount />}
                description={<FormattedMessage id="individualsDescription" />}
                workSchedule={<FormattedMessage id="individualsWorkSchedule" />}
              />
              <div className="contacts-info-block-wrapper">
                <InfoBlock
                  icon={<Iphone className="contacts-footer-phone-icon" />}
                  phoneNumber="3700"
                  description={<FormattedMessage id="individualsFreeCalls" />}
                />
                <InfoBlock
                  icon={<Iphone className="contacts-footer-phone-icon" />}
                  phoneNumber="+1 (684) 654-0102"
                  description={
                    <FormattedMessage id="cardSupportInternationalCalls" />
                  }
                />
              </div>
            </div>
            <div className="contacts-info-card-item">
              <InfoCard
                title={<FormattedMessage id="cardSupport" />}
                icon={<CreditCard />}
                description={<FormattedMessage id="cardSupportDescription" />}
                workSchedule={<FormattedMessage id="cardSupportWorkSchedule" />}
              />
            </div>
            <div className="contacts-info-block-wrapper">
              <InfoBlock
                icon={<Iphone className="contacts-footer-phone-icon" />}
                phoneNumber="3800"
                description={<FormattedMessage id="individualsFreeCalls" />}
              />
              <InfoBlock
                icon={<Iphone className="contacts-footer-phone-icon" />}
                phoneNumber="+1 (684) 654-0102"
                description={
                  <FormattedMessage id="cardSupportInternationalCalls" />
                }
              />
            </div>
          </div>
          <p className="notification">
            <FormattedMessage id="contactsNotification" />
          </p>
        </div>
      </Container>
    </>
  );
};
