export type LayoutOpenProps = {
  isOpen: boolean;
};

export type SideBarToggleBtnProps = LayoutOpenProps & {
  setIsOpen: (value: boolean) => void;
};
