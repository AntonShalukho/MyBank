import { Facebook, Instagram, Linkedin, Skype, Twitter } from "../../Icon";

type SocialType = {
  name: JSX.Element;
  link: string;
};

export const socials: SocialType[] = [
  { name: <Facebook fill="#A0A0A6" />, link: "https://www.facebook.com/" },
  { name: <Instagram fill="#A0A0A6" />, link: "https://www.instagram.com/" },
  { name: <Twitter fill="#A0A0A6" />, link: "https://twitter.com/" },
  { name: <Skype fill="#A0A0A6" />, link: "https://www.skype.com/" },
  { name: <Linkedin fill="#A0A0A6" />, link: "https://www.linkedin.com/" },
];
