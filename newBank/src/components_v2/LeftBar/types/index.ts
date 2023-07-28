export type SubLinksType = Pick<LeftBarDataType, "title" | "path" | "icon">;

export type LeftBarDataType = {
  title: string;
  path: string;
  icon: React.ReactNode;
  subLinks?: SubLinksType[];
};

export type IconsType = {
  className?: string;
};

export type UserType = {
  name: string;
  surname: string;
  avatar: string;
};

export type MainLogoBlockType = {
  isSidebarOpen: boolean;
  className?: string;
};

export type GeneralItemsType = {
  toggleContainerFolded: () => void;
  isCollapsed: boolean;
  user: UserType;
  handleLogout: () => void;
  navItemStyles: Record<string, string>;
  itemData: LeftBarDataType;
  isActiveItem: boolean;
  isDefault?: boolean;
  styles: Record<string, string>;
};

export type LeftBarType = Pick<
  GeneralItemsType,
  "toggleContainerFolded" | "isCollapsed"
>;

export type FullScreenBarType = Pick<
  GeneralItemsType,
  | "toggleContainerFolded"
  | "isCollapsed"
  | "user"
  | "handleLogout"
  | "navItemStyles"
>;

export type MobileScreenBarType = Pick<
  GeneralItemsType,
  "handleLogout" | "isCollapsed" | "user" | "navItemStyles"
>;

export type ItemContentType = Pick<
  GeneralItemsType,
  "itemData" | "isActiveItem" | "isCollapsed" | "isDefault"
>;

export type NavItemType = Pick<
  GeneralItemsType,
  "itemData" | "isCollapsed" | "isDefault" | "styles"
>;

export type GetActiveClassNameType = (
  isActive: boolean,
  setIsActiveItem: (isActiveItem: boolean) => void,
  isDefault: boolean | undefined,
  itemData: LeftBarDataType,
  styles: Record<string, string>
) => string;
