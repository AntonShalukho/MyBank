import {
  MAIN_PAGE_PATH,
  MAIN_PAGE_ACCOUNT_PATH,
  ACCOUNTS_INTL_ID,
  MAIN_SIDE_BAR_TITLE,
} from "../../../../utils/variables";

import { SidebarDataItem } from "../../../../components_v2/Sidebar/sidebarData";

export const sidebarData: SidebarDataItem[] = [
  {
    title: MAIN_SIDE_BAR_TITLE,
    path: MAIN_PAGE_PATH,
    subNav: [
      {
        title: ACCOUNTS_INTL_ID,
        path: MAIN_PAGE_ACCOUNT_PATH,
      },
    ],
  },
];
