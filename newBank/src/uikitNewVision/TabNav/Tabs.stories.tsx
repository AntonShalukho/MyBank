import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";

import { TabNav } from ".";

const config = ["byPhone", "byPassport"];

export default {
  title: "component/Tabs",
  component: TabNav,
  argTypes: {
    className: { control: "string" },
    tabs: { control: "array" },
    selected: { control: "string" },
    setSelected: { action: "clicked" },
  },
} as ComponentMeta<typeof TabNav>;

export const Default = () => {
  const [selected, setSelected] = useState("");
  const toggleSelected = (tab: string) => {
    setSelected(tab);
  };
  return (
    <div>
      <TabNav tabs={config} selected={selected} setSelected={toggleSelected}>
        {selected === "By phone" ? <p>First content</p> : null}
        {selected === "By ID" ? <p>Second content</p> : null}
      </TabNav>
    </div>
  );
};
