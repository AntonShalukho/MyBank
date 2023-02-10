import React, { useState } from "react";

import { TabNav } from "../../../uikit/TabNav";

import { GeneralInfo } from "../GeneralInfo";

import { Notifications } from "../Notifications";

import { Security } from "../Security";

import { Settings } from "../Settings";

import "./AccountStyles.css";

const tabs = ["generalInfo", "security", "notifications", "settings"];

export const AccountInfoTabs = () => {
  const [selected, setSelected] = useState("generalInfo");
  return (
    <div className="account-tabs-container">
      <TabNav tabs={tabs} selected={selected} setSelected={setSelected}>
        <div className="account-content-container">
          {selected === "generalInfo" && <GeneralInfo />}
          {selected === "security" && <Security />}
          {selected === "notifications" && <Notifications />}
          {selected === "settings" && <Settings />}
        </div>
      </TabNav>
    </div>
  );
};
