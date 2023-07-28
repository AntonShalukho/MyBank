import { Apple, Google } from "../../Icon";

type StoresType = {
  name: JSX.Element;
  link: string;
};

export const stores: StoresType[] = [
  { name: <Apple />, link: "https://www.apple.com/" },
  { name: <Google />, link: "https://play.google.com/" },
];
